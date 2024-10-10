// external
import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Type
} from '@angular/core';

// internal
import { ComponentLoaderCommon } from '../interface';
import { PropertyService } from '../../property';
import { Getter, Setter } from '../../property/type';

/**
 * Some useful methods to handle dynamic component.
 * @export
 */
export
  abstract class ComponentLoaderCommonClass<T>
  implements ComponentLoaderCommon<T> {

  __prefix = '_';
  __suffix = '';

  /**
   * Property name where dynamic component will be placed.
   */
  __componentPropertyName = '__componentRef';

  /**
   * Wrapper `set` for `__componentPropertyName`.
   */
  set __component(value: ComponentRef<T> | undefined) {
    if (this.__componentPropertyName) {
      this[this.__componentPropertyName] = value;
    }
  }

  /**
   * Wrapper `get` for `__componentPropertyName`.
   */
  get __component(): ComponentRef<T> | undefined {
    return this[this.__componentPropertyName];
  }

  /**
   * 
   */
  __properties: Array<string> = [];

  /**
   * Handle property bind or wrap.
   */
  protected _propertyClass?: PropertyService;
  get propertyClass(): PropertyService | undefined {
    this._propertyClass = (this._propertyClass) ? this._propertyClass : new PropertyService(this.__prefix, this.__suffix);

    return this._propertyClass;
  }

  /**
   * Creates an instance of ComponentLoaderCommonAClass.
   * @param componentFactoryResolver https://angular.io/api/core/ComponentFactoryResolver
   */
  constructor(public componentFactoryResolver: ComponentFactoryResolver) {}

  /**
   * Assign values of property or list of properties from source component to dynamic component instance.
   * @template PT Property type - not useful here.
   * @template S Source component type.
   * @param [p=this.__properties] Property that values will be set from source component to dynamic component.
   * @param source Component which properties values will be assigned to dynamic component.
   */
  __assign<PT, S>(p: string | Array<string> = this.__properties, source: S): void {
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
   * @param property Name of property that will be set to dynamic component instance.
   * @param value Value of property that will be set to dynamic component instance.
   */
  __set<PT>(property: string, value: PT): void {
    if (this.__component && this.__component.hasOwnProperty('instance')) {
      Object.assign(this.__component.instance, {
        [property]: value
      });
    }
  }

  /**
   * Get specified property value from dynamic component instance.
   * @template PT Property type.
   * @param property Name of property that will be get from instance.
   * @returns Return value with specified type or undefined.
   */
  __get<PT>(property: string): PT | undefined {
    if (property.length > 0) {
      if (this.__component && this.__component.hasOwnProperty('instance')) {
        return this.__component.instance[property];
      }
    } else {
      throw new Error(`ComponentLoaderCommonAClass.__get(property ${property}) : property length is 0`);
    }

    return;
  }

  /**
   * Subscribe to specified property of dynamic component instance.
   * @param property Property name of dynamic component instance.
   * @param args Functions in order success, error, complete.
   */
  __subscribe(property: string, ...args: Array<any>): void {
    if (this.__component && this.__component.instance.hasOwnProperty(property)) {
      this.__get<any>(property)
        .subscribe(...args);
    } else {
      throw new Error(`this.component.instance does not have property ${property}`);
    }
  }

  /**
   * Resolve component from `entryComponents`.
   * @template D Dynamic component type.
   * @param component Component to resolve.
   */
  protected __resolve(component: Type<T>): ComponentFactory<T> {
    return this.componentFactoryResolver.resolveComponentFactory(component);
  }

  /**
   * @template S Source component type.
   * @param [properties=this.__properties] Properties to be wrapped.
   * @param source Source component.
   * @param setter Callback function performed on set.
   * @param getter Callback function performed on get.
   */
  protected __wrap<S>(properties: Array<string> = this.__properties, source: S, setter: Setter<S>, getter: Getter<S>): this {
    if (this.propertyClass instanceof PropertyService) {
      // Wrap properties with specified setter and getter.
      this.propertyClass.wrap<S>(source, properties, setter, getter);
    }
    
    return this;
  }
}
