// external
import { ComponentFactoryResolver } from '@angular/core';

// internal
import { ComponentType } from '../../type';
import { ComponentLoaderCommonInterface } from '../interface';

/**
 * Some useful methods to handle dynamic component.
 * @export
 * @abstract
 * @class ComponentLoaderCommonAClass
 */
export abstract class ComponentLoaderCommonAClass implements ComponentLoaderCommonInterface {

  /**
   * Property name where dynamic component will be placed.
   * @memberof ComponentLoaderCommonAClass
   */
  public __componentPropertyName = '__componentRef';

  /**
   * Wrapper `set` for `__componentPropertyName`.
   * @memberof ComponentLoaderCommonAClass
   */
  set __component(value: any) {
    if (this.__componentPropertyName) {
      this[this.__componentPropertyName] = value;
    }
  }

  /**
   * Wrapper `get` for `__componentPropertyName`.
   * @type {*}
   * @memberof ComponentLoaderCommonAClass
   */
  get __component(): any {
    if (this.__componentPropertyName) {
      return this[this.__componentPropertyName];
    }
    return null;
  }

  /**
   * @type {string[]}
   * @memberof ComponentLoaderCommonAClass
   */
  public __properties: string[] = [];

  /**
   * @param {ComponentFactoryResolver} componentFactoryResolver
   * @memberof ComponentLoaderCommonAClass
   */
  constructor(public componentFactoryResolver: ComponentFactoryResolver) { }

  /**
   * Assign property or list of properties from source object to targeted dynamic component instance.
   * @public
   * @param {(string | string[])} p Target property of dynamic component instance.
   * @param {string} [prefix='_'] Source property prefix.
   * @param {string} [suffix=''] Source property suffix.
   * @param {*} [source=this]
   * @memberof ComponentLoaderCommonAClass
   */
  public __assign(p: string | string[], prefix = '', suffix = '', source: any = this): void {
    if (this.__component) {
      if (p instanceof Array) {
        p.forEach((property: string): void => {
          if (property) {
            this.__set(property, source[`${prefix}${property}${suffix}`]);
            // this.__component.instance[property] = source[`${prefix}${property}${suffix}`];
          }
        });
      } else if (p) {
        this.__set(p, source[`${prefix}${p}${suffix}`]);
        // this.__component.instance[p] = source[`${prefix}${p}${suffix}`];
      }
    }
  }

  /**
   * Set property value to dynamic component instance.
   * @public
   * @template T
   * @param {string} key
   * @param {T} value
   * @memberof ComponentLoaderCommonAClass
   */
  public __set<T>(key: string, value: T): void {
    if (this.__component && this.__component.hasOwnProperty('instance')) {
      Object.assign(this.__component.instance, {
        [key]: value
      });
    }
  }

  /**
   * Get specified property value from dynamic component instance.
   * @public
   * @template T Property type.
   * @param {string} property Name of property that will be get from instance.
   * @returns {(T | undefined)} Return with specified type or undefined.
   * @memberof ComponentLoaderCommonAClass
   */
  public __get<T>(property: string): T | undefined {
    if (property.length > 0) {
      if (this.__component && this.__component.hasOwnProperty('instance')) {
        return this.__component.instance[property];
      }
    } else {
      throw new Error(`ComponentLoaderCommonAClass.__get(property ${property}) : property length is 0`);
    }
  }

  /**
   * Subscribe to property of dynamic component instance.
   * @public
   * @param {string} property Property name to instance.
   * @param {...any[]} args Functions in order success, error, complete.
   * @memberof ComponentLoaderCommonAClass
   */
  public __subscribe(property: string, ...args: any[]): void {
    if (this.__component.instance.hasOwnProperty(property)) {
      this.__component.instance[property].subscribe(...args);
    } else {
      throw new Error(`this.component.instance does not have property ${property}`);
    }
  }

  /**
   * Resolve component from `entryComponents`.
   * @protected
   * @param {component} component Angular component.
   * @returns {*}
   * @memberof ComponentLoaderAClass
   */
  protected __resolve(component: ComponentType<any>): any {
    if (component) {
      return this.componentFactoryResolver.resolveComponentFactory(component);
    }
  }
}


