// external
import {
  get,
  // has,
  set
} from 'lodash-es';

// internal
import { StoreOriginalClass } from '../../store';
import { PrefixSuffixClass } from '../../src/prefixsuffix.class';
import { Getter, Setter } from '../type';
import { Property } from '../interface';

/**
 * Wrap indicated properties of source component with instance dynamic component.
 * @export
 */
export class PropertyClass extends PrefixSuffixClass implements Property {

  /**
   * Instance of store.
   */
  private stored: StoreOriginalClass = new StoreOriginalClass();

  /**
   * List of properties that were being binded.
   */
  private _binded: Array<string> = [];
  set binded(property: string | Array<string> | number) {
    if (property instanceof Array) {
      property.forEach(p => {
        this._binded.push(p);
      });
    }
    if (typeof property === 'string') {
      this._binded.push(property);
    }
    if (typeof property === 'number') {
      this._binded.splice(property, 1);
    }
  }
  get binded(): string | Array<string> | number {
    return this._binded;
  }

  /**
   * List of properties that were being wrapped.
   */
  private wrapped: Array<string> = [];

  /**
   * Creates an instance of PropertyClass.
   * @param [prefix] Prefix of new property name.
   * @param [suffix] Suffix of new property name.
   */
  constructor(prefix?: string, suffix?: string) {
    super(prefix, suffix);
  }

  /**
   * @template S Component source type.
   * @template T Component target type.
   * @param source Component as Function or as json object to bind its properties to the target.
   * @param properties Properties names source object to be binded with target properties.
   * @param target Target to have properties binded to source properties.
   * @param [description] Give information about what this bind is for.
   */
  // , description?: string
  bind<S, T = string>(source: Function | S, properties: string | Array<string>, target: T): this {
    try {
      if (source) {
        if (properties instanceof Array) {
          properties.forEach((property: string) => {
            this._bind(source, property, target);
          });
        } else {
          this._bind(source, properties, target);
        }
      }
    } catch (e) {
      if (e instanceof TypeError) {
      } else if (e instanceof RangeError) {
      } else if (e instanceof EvalError) {
      } else {
      }
      console.warn(e.message);
    } finally { }

    return this;
  }

  /**
   * Remove setter/getter and from binded/wrapped indicated properties by names.
   * @template S Component source type.
   * @template T Component target type.
   * @param source Usually component as Function or as json object to clear properties.
   * @param properties Name of properties to be cleared in source component.
   */
  clear<S>(source: Function | S, properties?: string | Array<string>): this {
    try {
      if (source) {
        const p = (properties) ? (typeof properties === 'string') ? [properties] : properties : this.binded;
        if (p instanceof Array) {
          p.forEach((property: string) => this._clear(source, property));
        }
      }
    } catch (e) {
      if (e instanceof TypeError) {
      } else if (e instanceof RangeError) {
      } else if (e instanceof EvalError) {
      } else {
      }
      console.warn(e.message);
    }

    return this;
  }

  /*
  has(source: Object, path: any): boolean {
    console.info('1', source['__component'].instance.model, has(source, '__component.instance.model'));

    return has(source, '__component.instance.model');
  }
  */

  /**
   * Get component property value by using lodash `get()` function.
   * @template PT Returned object property value type.
   * @param source The object to get path value from.
   * @param path The path of the property to get.
   */
  get<PT>(source: Object, path: string): PT {
    return get(source, path);
  }

  /**
   * Set component property value by using lodash `set()` function.
   * @template PT The path of the property value type.
   * @param source The object to modify.
   * @param path The path of the property to set.
   * @param value The value to set.
   */
  set<PT>(source: Object, path: string, value: PT): Object {
    // CHECK HAS()
    return set<Object>(source, path, value);
  }

  string(object: any): object is string {
    return typeof object === 'string';
  }

  /**
   * Method to wrap specified properties with setter and getter callback method.
   * @template S Component source type.
   * @template R Result type of `setter()` and `getter()` function.
   * @param source Function or component.
   * @param properties Names of properties to be wrapped.
   * @param setter Callback function invoked on set.
   * @param getter Callback function invoked on get.
   */
  wrap<S, R = any>(source: Function | S, properties: string | Array<string>, setter?: Setter<S, R>, getter?: Getter<S, R>): this {
    try {
      if (source) {
        if (properties instanceof Array) {
          properties.forEach((property: string) => {
            this._wrap(source, property, setter, getter);
          });
        } else {
          this._wrap(source, properties, setter, getter);
        }
      }
    } catch (e) {
      if (e instanceof TypeError) {
      } else if (e instanceof RangeError) {
      } else if (e instanceof EvalError) {
      } else {
      }
      console.warn(e.message);
    }

    return this;
  }

  protected type(path: string, source?: Object): any {
    if (source) {
      return typeof get(source, path);
    }

    return path;
  }

  /**
   * Define new property in source object.
   * @template S Component source type.
   * @param source Component as `Function` or `Object` to define property.
   * @param property Name of defined property.
   * @param descriptor Configuration of defining property.
   */
  private define<S>(source: Function | S, property: string, descriptor: ThisType<any>, type?: 'bind' | 'wrap'): this {
    Object.defineProperties(
      (source instanceof Function) ? source.prototype : source, {
        [property]: descriptor
      }
    );
    if (type === 'bind') {
      // Property is used.
      this.binded = property;
    } else {
      /* {
        [property]: store[property]
      } */
      this.wrapped.push(property);
    }

    return this;
  }

  /**
   * Bind property from source component one to one to the target.
   * @template S Component source type.
   * @param source Component as Function or as json object to bind its property to the target.
   * @param property Name of property to bind to target.
   * @param target Name of object in source component or another object.
   */
  private _bind<S, T, R = any>(source: Function | S, property: string, target: T | string): void {
    // Check if property is already used.
    if (this.binded instanceof Array && this.binded.includes(property) === false) {

      // Store original Setter/Getter.
      const store = this.stored.setterGetter(source, property);

      // Create `get()` method.
      const _get = function(this: S): R {
        // Use old getter.
        if (store.getter[property]) {
          store.getter[property].apply(source, arguments);
        }
        if (typeof target === 'string' && source[target]) {
          return source[target][property];
        }
        
        return target[property];
      };

      // Create `set()` method.
      const _set = function(this: S, value: R): void {
        // Use old setter.
        if (store.setter[property]) {
          store.setter[property].apply(source, arguments);
        }
        // TODO: Check source.
        if (typeof target === 'string') {
          source[target][property] = value;
        } else {
          target[property] = value;
        }
      };

      // Bind property to source.
      this.define(source, property, { get: _get, set: _set }, 'bind');
    }
  }

  /**
   * @template S Component source type.
   * @template T Component target type.
   * @param source Component as Function or as json object to clear property.
   * @param property Name of property to be cleared in source component.
   */
  private _clear<S>(source: Function | S, property: string): void {
    // Check if property is already used.
    if (this.binded instanceof Array && this.binded.includes(property) === true) {

      this.define(source, property, {
        get: this.stored.getter[property],
        set: this.stored.setter[property]
      });

      // Property is removed from used.
      const index: number = this.binded.indexOf(property);
      if (index > -1) {
        this.binded = index;
      }
    }
  }

  /**
   * @template S Component source type.
   * @template T Component target type.
   * @param source Component as Function or as json object to wrap property.
   * @param property Name of component source property to be wrapped.
   * @param setter Function that is invoked in component source property `set`.
   * @param [getter] Function that is invoked in component source property `get`.
   */
  private _wrap<S, R = any>(source: Function | S, property: string, setter?: Setter<S, R>, getter?: Getter<S, R>): void {
    // Check if property is already used.
    if (this.wrapped.includes(property) === false) {

      // Store original Setter/Getter.
      const store = this.stored.setterGetter(source, property);

      // Property with prefix and suffix.
      const sourcePropertyName = this.propertyName(property);

      // Wrap property.
      if (sourcePropertyName) {

        const _get = function(this: S): R | undefined {
          if (store.getter[property]) {
            return store.getter[property].apply(this, arguments);
          }
          // Use new getter.
          if (getter instanceof Function) {
            return getter(property, source) || this[sourcePropertyName];
          }

          return;
        };

        const _set = function(this: S, value: R | undefined): void {
          // Remember input value.
          this[sourcePropertyName] = value;

          // Use old setter.
          if (store.setter[property]) {
            store.setter[property].apply(this, arguments);
          }
          // Use setter function.
          if (setter instanceof Function) {
            setter(property, source, sourcePropertyName);
          }
        };

        // Create property with prefix and suffix to be wrapped by original name.
        // this.define(source, sourcePropertyName, )
        this.define(source, sourcePropertyName, {
          writable: true,
          value: (source[property]) ? source[property] : source[sourcePropertyName]
        }, 'wrap')
          .define(source, property, { get: _get, set: _set }, 'wrap');
      } else {
        throw new Error(`sourcePropertyName is not generated.`);
      }
    }
  }
}
