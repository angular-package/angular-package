// external
import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ElementRef,
  Injectable,
  Injector,
  Type
} from '@angular/core';

// internal
import { ComponentLoaderCommonAClass } from './component-loader-common.aclass';
import { ComponentLoaderConfigInterface, ComponentLoaderServiceInterface } from '../interface';

/**
 * Service to make easier handle loading dynamic component.
 * It is created with https://medium.com/@caroso1222/angular-pro-tip-how-to-dynamically-create-components-in-body-ba200cc289e6.
 * @export
 * @class ComponentLoaderService
 * @extends {ComponentLoaderCommonAClass}
 * @template T
 */
@Injectable()
export
  class ComponentLoaderService<T>
  extends ComponentLoaderCommonAClass<T>
  implements ComponentLoaderServiceInterface<T> {

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

  set properties(properties: string[]) {
    this.__properties = properties;
  }
  get properties(): string[] {
    return this.__properties;
  }

  /**
   * Whether dynamic component is attached to view or it is not.
   * @private
   * @memberof ComponentLoaderService
   */
  private attached = false;

  /**
   * Creates an instance of ComponentLoaderService.
   * @param {ApplicationRef} appRef
   * @param {Injector} injector
   * @param {ComponentFactoryResolver} componentFactoryResolver
   * @param {ElementRef} elementRef
   * @memberof ComponentLoaderService
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
   * @param {string[]} [properties=this.properties] Properties from component source.
   * @param {S} source Source component which properties are linked to dynamic component.
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  public __link<S>(properties: string[] = this.properties, source: S): this {
    if (properties instanceof Array) {
      this.__wrap<S>(properties, source,
        (property: string, sourcePropertyName: string, s?: S) => {
          // TODO
          if (s && this.__set instanceof Function) {
            this.__set(property, s[sourcePropertyName]);
          }
        },
        (property: string, s?: S) => {
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
   * @param {Type<D>} component Dynamic component to create.
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  public __create<D = T>(component: Type<D>): this {
    if (!this.__component) {
      this.__component = this.__resolve(component).create(this.injector);
    }
    return this;
  }

  /**
   * Detach view and destroy dynamic component.
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  public __destroy(): undefined {
    this.detachView();
    if (this.__component) {
      this.__component.destroy();
      this.__component = undefined;
    }
    return this.__component;
  }

  /**
   * @template S
   * @param {ComponentLoaderConfigInterface<T>} config
   * @param {S} [source] Component which its properties are linked to dynamic component.
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  public init<S>(config: ComponentLoaderConfigInterface<T>, source?: S): this {
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
   * @private
   * @param {string} container Name of place for querySelector that dynamic component will be placed.
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  private appendChild(container: string): this {
    if (container && this.__component) {
      this
        .elementRef
        .nativeElement
        .querySelector(container)
        .appendChild((this.__component.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement);
    }
    return this;
  }

  /**
   * Attach dynamic component view.
   * @private
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  private attachView(): this {
    if (this.attached === false && this.__component) {
      this.appRef.attachView(this.__component.hostView);
      this.attached = true;
    }
    return this;
  }

  /**
   * Detach dynamic component view.
   * @private
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  private detachView(): this {
    if (this.__component && this.attached === true) {
      this.appRef.detachView(this.__component.hostView);
      this.attached = false;
    }
    return this;
  }
}
