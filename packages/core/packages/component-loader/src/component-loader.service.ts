import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ElementRef,
  Injectable,
  Injector
} from '@angular/core';

import { ComponentLoaderCommonAClass } from './component-loader-common.aclass';
import { ComponentType } from '../../type';
import { ComponentLoaderConfigInterface } from '../interface';

/**
 * Service to easy handle loading dynamic component.
 * It is created with https://medium.com/@caroso1222/angular-pro-tip-how-to-dynamically-create-components-in-body-ba200cc289e6.
 * @export
 * @class ComponentLoaderService
 * @extends {ComponentLoaderCommonAClass}
 * @template T
 */
@Injectable()
export class ComponentLoaderService<T> extends ComponentLoaderCommonAClass {

  set componentPropertyName(value: string) {
    this.__componentPropertyName = value;
  }
  get componentPropertyName(): string {
    return this.__componentPropertyName;
  }

  set properties(properties: string[]) {
    this.__properties = properties;
    if (properties instanceof Array) {
      properties.forEach((property: string) => {
        Object.defineProperty(this, property, {
          set: (value: any) => {
            this.__set(property, value);
          },
          get: () => {
            return this.__get(property);
          }
        });
      });
    }
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
   * Append HTMLElement of dynamic component to specified container.
   * @private
   * @param {string} container Name of place for querySelector that dynamic component will be placed.
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  private appendChild(container: string): this {
    this.elementRef.nativeElement
      .querySelector(container)
      .appendChild((this.__component.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement);
    return this;
  }

  /**
   * Assign property or list of properties from source object to targeted dynamic component instance.
   * @param {(string | string[])} [p=this.properties] List of properties that will be assigned from source object to target component.
   * @param {string} [prefix] Prefix source property.
   * @param {string} [suffix] Suffix source property.
   * @param {*} [source] Source object.
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  public assign(
    p: string | string[] = this.properties,
    prefix?: string,
    suffix?: string,
    source?: any
  ): this {
    this.__assign(p, prefix, suffix, source);
    return this;
  }

  /**
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  public attachView(): this {
    if (this.attached === false) {
      this.appRef.attachView(this.__component.hostView);
      this.attached = true;
    }
    return this;
  }

  /**
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  public destroy(): this {
    this.detachView();
    if (this.__component) {
      this.__component.destroy();
      this.__component = null;
      this.attached = false;
    }
    return this;
  }

  /**
   *
   *
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  public detachView(): this {
    if (this.__component) {
      this.appRef.detachView(this.__component.hostView);
    }
    return this;
  }

  /**
   * @param {ComponentType<T>} component
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  public create(component: ComponentType<T>): this {
    if (!this.__component) {
      this.__component = this.__resolve(component).create(this.injector);
    }
    return this;
  }

  /**
   * Get specified property value from dynamic component instance with `__get` helper method from `ComponentLoaderCommonAClass`.
   * @template N
   * @param {string} name
   * @returns {(N | undefined)}
   * @memberof ComponentLoaderService
   */
  public get<N>(name: string): N | undefined {
    return this.__get<N>(name);
  }

  /**
   * @param {ComponentLoaderConfigInterface} config
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  public init(config: ComponentLoaderConfigInterface): this {
    Object.assign(this, config);

    this
      .create(config.component)
      .attachView()
      .appendChild(config.container);

    return this;
  }

  /**
   * Assign property value to dynamic component instance with `__set` helper method from `ComponentLoaderCommonAClass`.
   * @template N
   * @param {string} key
   * @param {N} value
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  public set<N>(key: string, value: N): this {
    this.__set(key, value);
    return this;
  }

  /**
   * Subscribe to property of dynamic component instance with `__subscribe` helper method from `ComponentLoaderCommonAClass`.
   * @param {string} property
   * @param {...any[]} args
   * @returns {this}
   * @memberof ComponentLoaderService
   */
  public subscribe(property: string, ...args: any[]): this {
    this.__subscribe.apply(this, arguments);
    return this;
  }
}
