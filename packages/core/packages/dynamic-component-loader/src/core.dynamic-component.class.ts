import {
  ComponentFactory,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import { component } from './core.type';

/**
 * Angular 2+ abstract class extend for component with ability to dynamically create component that is available in entryComponents
 * to a specific container and destroy it. After create you can set properties instance.
 * @export
 * @abstract
 * @class DynamicComponentClass
 */
export abstract class DynamicComponentClass {

  /**
   * Newly created dynamic component
   * @private
   * @type {*}
   * @memberof DynamicComponentClass
   */
  private __component: any = null;

  /**
   * Resolver from entryComponents
   * @type {ComponentFactoryResolver}
   * @memberof DynamicComponentClass
   */
  public componentFactoryResolver: ComponentFactoryResolver;

  /**
   * Container property where Dynamic Component will be put in
   * @protected
   * @type {*}
   * @memberof DynamicComponentClass
   */
  @ViewChild('container', { read: ViewContainerRef }) public container: any;

  /**
   * @param {ComponentFactoryResolver} componentFactoryResolver
   * @memberof DynamicComponentClass
   */
  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    this.componentFactoryResolver = componentFactoryResolver;
  }

  /**
   * Assign property to `__component` instance if not null
   * @protected
   * @template T
   * @param {string} key
   * @param {T} value
   * @memberof DynamicComponentClass
   */
  protected __assign<T>(key: string, value: T): void {
    if (this.__component !== null) {
      Object.assign(this.__component.instance, {
        [key]: value
      });
    }
  }

  /**
   * Create in html `#container` resolved component and set to `__component` property
   * @protected
   * @param {component} component
   * @returns {void}
   * @memberof DynamicComponentClass
   */
  protected __create(component: component): void {
    if (this.container && component) {
      this.__component = this.container.createComponent(this.__resolve(component));
    }
  }

  /**
   * If property `component` is defined use destory method on it and set as null
   * @protected
   * @returns {null}
   * @memberof DynamicComponentClass
   */
  protected __destroy(): null {
    if (this.__component) {
      this.__component.destroy();
      this.__component = null;
    }
    return this.__component;
  }

  /**
   * Return property, either private
   * @protected
   * @param {string} property - property name
   * @returns {*}
   * @memberof DynamicComponentClass
   */
  protected __get(property: string): any {
    if (property.length > 0) {
      return this[property];
    } else {
      throw new Error(`DynamicComponentClass.__get(property ${property}) : property length is 0`);
    }
  }

  /**
   * Resolve component from entryComponents
   * @private
   * @param {component} component - Angular component
   * @returns {*}
   * @memberof DynamicComponentClass
   */
  private __resolve(component: component): any {
    if (component) {
      return this.componentFactoryResolver.resolveComponentFactory(component);
    }
  }

  /**
   * Set respectively properties values in property `__component` instance with values from extended class
   * @protected
   * @param {(string | Array<string>)} key - property name as string or properties as array of string
   * @memberof DynamicComponentClass
   */
  protected __set(property: string | Array<string>): void {
    if (this.__component) {
      if (property instanceof Array) {
        property.forEach((value, index) => {
          if (value) {
            this.__component.instance[value] = this[value];
          }
        });
      } else if (property) {
        this.__component.instance[property] = this[property];
      }
    }
  }

  /**
   * Subscribe to specific @Output property in instance of `this` property `__component`
   * @protected
   * @param {string} property - property `component` instance property
   * @param {...any[]} args - args functions like complete, error
   * @memberof DynamicComponentClass
   */
  protected __subscribe(property: string, ...args: any[]): void {
    // if created component has got property to subscribe
    if (this.__component.instance.hasOwnProperty(property)) {
      this.__component.instance[property].subscribe(...args);
    } else {
      throw new Error(`this.component.instance does not have property ${property}`);
    }
  }
}
