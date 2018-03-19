// external
import { ComponentFactoryResolver, ComponentRef, Type } from '@angular/core';

// internal
import { ComponentLoaderCommonInterface } from '../interface';
import { PropertyWrapperClass } from '../../property-wrapper';
import { CallbackGetterType } from '../../property-wrapper/type/callback-getter.type';
import { CallbackSetterType } from '../../property-wrapper/type/callback-setter.type';

/**
 * Some useful methods to handle dynamic component.
 * @export
 * @abstract
 * @class ComponentLoaderCommonAClass
 */
export
  abstract class ComponentLoaderCommonAClass<T>
  implements ComponentLoaderCommonInterface<T> {

  public __prefix = '_';
  public __suffix = '';

  protected wrapper?: PropertyWrapperClass;

  /**
   * Property name where dynamic component will be placed.
   * @memberof ComponentLoaderCommonAClass
   */
  public __componentPropertyName = '__componentRef';

  /**
   * Wrapper `set` for `__componentPropertyName`.
   * @memberof ComponentLoaderCommonAClass
   */
  set __component(value: ComponentRef<T> | undefined) {
    if (this.__componentPropertyName) {
      this[this.__componentPropertyName] = value;
    }
  }

  /**
   * Wrapper `get` for `__componentPropertyName`.
   * @type {*}
   * @memberof ComponentLoaderCommonAClass
   */
  get __component(): ComponentRef<T> | undefined {
    return this[this.__componentPropertyName];
  }

  /**
   * @type {string[]}
   * @memberof ComponentLoaderCommonAClass
   */
  public __properties: string[] = [];

  /**
   * Creates an instance of ComponentLoaderCommonAClass.
   * @param {ComponentFactoryResolver} componentFactoryResolver
   * @memberof ComponentLoaderCommonAClass
   */
  constructor(public componentFactoryResolver: ComponentFactoryResolver) {}

  /**
   * Assign values of property or list of properties from source component to dynamic component instance.
   * @template PT Property type - not useful here.
   * @template S Source component type.
   * @param {(string | string[])} [p=this.__properties] Property that values will be set from source component to dynamic component.
   * @param {S} source Component which properties values will be assigned to dynamic component.
   * @memberof ComponentLoaderCommonAClass
   */
  public __assign<PT, S>(p: string | string[] = this.__properties, source: S): void {
    if (this.__component) {
      if (p instanceof Array) {
        p.forEach((property: string): void => {
          this.__set<PT>(property, source[property]);
        });
      } else if (p) {
        this.__set<PT>(p, source[p]);
      }
    }
  }

  /**
   * Set specified property value to dynamic component instance.
   * @template PT Property type.
   * @param {string} property Name of property that will be set to dynamic component instance.
   * @param {PT} value Value of property that will be set to dynamic component instance.
   * @memberof ComponentLoaderCommonAClass
   */
  public __set<PT>(property: string, value: PT): void {
    if (this.__component && this.__component.hasOwnProperty('instance')) {
      Object.assign(this.__component.instance, {
        [property]: value
      });
    }
  }

  /**
   * Get specified property value from dynamic component instance.
   * @template PT Property type.
   * @param {string} property Name of property that will be get from instance.
   * @returns {(PT | undefined)} Return value with specified type or undefined.
   * @memberof ComponentLoaderCommonAClass
   */
  public __get<PT>(property: string): PT | undefined {
    if (property.length > 0) {
      if (this.__component && this.__component.hasOwnProperty('instance')) {
        return this.__component.instance[property];
      }
    } else {
      throw new Error(`ComponentLoaderCommonAClass.__get(property ${property}) : property length is 0`);
    }
  }

  /**
   * Subscribe to specified property of dynamic component instance.
   * @param {string} property Property name of dynamic component instance.
   * @param {...any[]} args Functions in order success, error, complete.
   * @memberof ComponentLoaderCommonAClass
   */
  public __subscribe(property: string, ...args: any[]): void {
    if (this.__component && this.__component.instance.hasOwnProperty(property)) {
      this.__get<any>(property).subscribe(...args);
    } else {
      throw new Error(`this.component.instance does not have property ${property}`);
    }
  }

  /**
   * Resolve component from `entryComponents`.
   * @protected
   * @template D Dynamic component type.
   * @param {Type<D>} component
   * @returns {*}
   * @memberof ComponentLoaderCommonAClass
   */
  protected __resolve<D = T>(component: Type<D>): any {
    if (component) {
      return this.componentFactoryResolver.resolveComponentFactory(component);
    }
  }

  /**
   * @protected
   * @template S Source component type.
   * @param {string[]} [p=this.__properties] Properties to be wrapped.
   * @param {S} source Source component.
   * @param {CallbackSetterType<S>} setter Callback function performed on set.
   * @param {CallbackGetterType<S>} getter Callback function performed on get.
   * @returns {this}
   * @memberof ComponentLoaderCommonAClass
   */
  protected __wrap<S>(p: string[] = this.__properties, source: S, setter: CallbackSetterType<S>, getter: CallbackGetterType<S>): this {
    this.wrapper = (this.wrapper) ? this.wrapper : new PropertyWrapperClass(this.__prefix, this.__suffix);
    if (this.wrapper instanceof PropertyWrapperClass) {
      // Wrap properties with specified setter and getter.
      this.wrapper.wrap<S>(source, p, setter, getter);

      // Assign initial values to dynamic component.
      p.forEach((property: string): void => {
        if (this.wrapper) {
          this.__set<any>(property, source[this.wrapper.propertyName(property)]);
        }
      });
    }
    return this;
  }
}


