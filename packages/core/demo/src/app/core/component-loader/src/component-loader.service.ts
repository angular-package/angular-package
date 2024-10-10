// external
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ElementRef,
  // EmbeddedViewRef,
  Injectable,
  Injector,
  Type
  // ViewRef
} from '@angular/core';

// internal
import { ComponentLoaderCommonClass } from './component-loader-common.class';
import { ComponentLoaderConfig, ComponentLoaderS } from '../interface';

/**
 * Service to make handle loading dynamic component easier.
 * It is created with https://medium.com/@caroso1222/angular-pro-tip-how-to-dynamically-create-components-in-body-ba200cc289e6.
 * @export
 * @extends {ComponentLoaderCommonClass}
 * @template T Component type to load.
 */
@Injectable()
export
  class ComponentLoaderService<T>
  extends ComponentLoaderCommonClass<T>
  implements ComponentLoaderS<T> {

  // Prefix
  set prefix(value: string) {
    this.__prefix = value;
  }
  get prefix(): string {
    return this.__prefix;
  }

  set suffix(value: string) {
    this.__suffix = value;
  }
  get suffix(): string {
    return this.__suffix;
  }

  set componentPropertyName(value: string) {
    this.__componentPropertyName = value;
  }
  get componentPropertyName(): string {
    return this.__componentPropertyName;
  }

  set properties(properties: Array<string>) {
    this.__properties = properties;
  }
  get properties(): Array<string> {
    return this.__properties;
  }

  /**
   * Whether dynamic component is attached to view or it is not.
   */
  private attached = false;

  /**
   * Creates an instance of ComponentLoaderService.
   * @param appRef https://angular.io/api/core/ApplicationRef
   * @param injector https://angular.io/api/core/Injector
   * @param componentFactoryResolver https://angular.io/api/core/ComponentFactoryResolver
   * @param elementRef https://angular.io/api/core/ElementRef
   */
  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    public componentFactoryResolver: ComponentFactoryResolver,
    public elementRef: ElementRef
  ) {
    super(componentFactoryResolver);
  }

  /**
   * Link properties of source component to dynamic component.
   * @template S Source component.
   * @param [properties=this.properties] Properties from component source.
   * @param source Source component which properties are linked to dynamic component.
   */
  __link<S>(properties: Array<string> = this.properties, source: S): this {
    if (properties instanceof Array) {
      this.__wrap<S>(properties, source,
        (property: string, s?: Function | S | undefined, sourcePropertyName?: string) => {
          // TODO
          if (s && this.__set instanceof Function && sourcePropertyName) {
            this.__set(property, s[sourcePropertyName]);
          }
        },
        (property: string): any => {
          // TODO
          if (this.__get instanceof Function) {
            return this.__get(property);
          }
        });
    }

    return this;
  }

  /**
   * Create resolved component.
   * @template D Type of dynamic component.
   * @param component Dynamic component to create.
   */
  __create(component: Type<T>): this {
    if (!this.__component) {
      const resolved = this.__resolve(component);
      if (resolved) {
        const created = resolved.create(this.injector);
        if (created) {
          this.__component = created;
        }
      }
    }

    return this;
  }

  /**
   * Detach view and destroy dynamic component.
   */
  __destroy(): undefined {
    this.detachView();
    if (this.__component) {
      this.__component.destroy();
      this.__component = undefined;
    }

    // return this.__component;
    return undefined;
  }

  /**
   * @template S Type of source component.
   * @param config Main configuration.
   * @param [source] Component which its properties are linked to dynamic component.
   */
  init<S>(config: ComponentLoaderConfig<T>, source?: S): this {
    Object.assign(this, config);

    this
      .__create(config.component)
      .attachView()
      .appendChild(config.container);

    // Link properties on initialization when source is provided.
    if (source && config.properties) {
      this.__link(config.properties, source);
    }

    return this;
  }

  /**
   * Append HTMLElement of dynamic component to specified container.
   * @param container Name of place for querySelector that dynamic component will be placed.
   */
  appendChild(container: string): this {
    if (container && this.__component) {
      const q = this
        .elementRef
        .nativeElement
        .querySelector(container);

      if (this.__component.hostView.hasOwnProperty('rootNodes')) {
        q.appendChild(this.__component.hostView['rootNodes'][0]);
      }
      // q.appendChild((this.__component.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement);
    }

    return this;
  }

  /**
   * Attach dynamic component view.
   */
  attachView(): this {
    if (this.attached === false && this.__component) {
      this.appRef.attachView(this.__component.hostView);
      this.attached = true;
    }

    return this;
  }

  /**
   * Detach dynamic component view.
   */
  detachView(): this {
    if (this.__component && this.attached === true) {
      this.appRef.detachView(this.__component.hostView);
      this.attached = false;
    }

    return this;
  }
}
