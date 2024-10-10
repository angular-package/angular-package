// external
import {
  get as _get,
  set as _set
} from 'lodash-es';
import { Injectable } from '@angular/core';

// internal
import { StoreOriginalClass } from '../../store';
import { PrefixSuffixClass } from '../../src/prefixsuffix.class';
import { Getter } from '../type/getter.type';
import { Setter } from '../type/setter.type';
import { Property } from '../interface/property.interface';

/**
 * Class to help link component properties with e.g. service properties by using set/get.
 * @export
 */
@Injectable()
export class PropertyClass extends PrefixSuffixClass implements Property {
  /**
   * `StoreOriginalClass` instance.
   */
  private stored: StoreOriginalClass = new StoreOriginalClass();

  /**
   * Creates an instance of PropertyClass.
   * @param [prefix] Prefix of new property name.
   * @param [suffix] Suffix of new property name.
   */
  constructor(prefix?: string, suffix?: string) {
    super(prefix, suffix);
  }

  /**
   * Bind source component specified properties to the target properties.
   * It uses `set`/`get` and original `set` is in use. It can be done **once**.
   * @template S Component source type.
   * @template T Component target type.
   * @param source Component to bind its properties to the target.
   * @param properties Source and target properties names to bind.
   * @param target Object that source is bind to.
   */
  bind<S, T = string>(source: Function | S, properties: string | Array<string>, target: T): this {
    try {
      this
        .toArray<string>(properties)
        .forEach(property => this.string(property) ? this._bind(source, property, target) : property);
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
   * Get component property value by using lodash `get()` function.
   * @template PT Returned object property value type.
   * @param source The object to get path value from.
   * @param path The path of the property to get.
   */
  get<PT>(source: Object, path: string): PT {
    return _get(source, path);
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
    return _set<Object>(source, path, value);
  }

  string(object: any): object is string {
    return typeof object === 'string';
  }

  /**
   * Return back specified properties to original `set`/`get` values.
   * @template S Component source type.
   * @template T Component target type.
   * @param source Component object.
   * @param properties Name or list of properties names.
   */
  unbind<S>(source: S, properties?: string | Array<string>): this {
    try {
      this
        .toArray<string>(properties)
        .forEach(property => this.string(property) ? this._unbind(source, property) : property);
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

  unwrap<S>(source: S, properties?: string | Array<string>): this {
    try {
      this
        .toArray<string>(properties)
        .forEach(property => this.string(property) ? this._unwrap(source, property) : property);
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

  /**
   * Method to wrap specified properties with `setter` and `getter` callback function.
   * @template S Component source type.
   * @template R Result type of `setter()` and `getter()` function.
   * @param source Function or component.
   * @param properties Names of properties to be wrapped.
   * @param setter Callback function invoked on set.
   * @param getter Callback function invoked on get.
   */
  wrap<S, R = any>(source: Function | S, properties: string | Array<string>, setter?: Setter<S, R>, getter?: Getter<S, R>): this {
    try {
      this
        .toArray<string>(properties)
        .forEach(property => this.string(property) ? this._wrap(source, property, setter, getter) : property);
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

  /**
   * Define new property in source object, also adding to `wrapped` or `binded`.
   * @template S Component source type.
   * @param source Component as `Function` or `Object` to define property.
   * @param property Name of defined property.
   * @param descriptor Configuration of defining property.
   */
  define<S>(source: Function | S, property: string, descriptor: PropertyDescriptor): this {
    if (!descriptor.get) {
      delete descriptor.get;
    }
    if (!descriptor.set) {
      delete descriptor.set;
    }
    if (!descriptor.get && !descriptor.set) {
      descriptor.writable = (descriptor.writable !== undefined) ? descriptor.writable : true;
    }
    Object.defineProperty((source instanceof Function) ? source.prototype : source, property, descriptor);

    return this;
  }

  /**
   * Bind source component specified properties to the target properties.
   * @template S Component source type.
   * @param source Component to bind its properties to the target.
   * @param property Property name.
   * @param target Name of object in source component or another object.
   */
  private _bind<S, T, R = any>(source: Function | S, property: string, target: T | string): void {
    // Store original Setter/Getter.
    const store = this.stored.setterGetter(source, property);
    // Create `get()` method.
    const get = function getter(this: S): R {
      // Use old getter.
      if (store.getter[property]) {
        store.getter[property].apply(source instanceof Function ? this : source, arguments);
      }
      if (typeof target === 'string') {
        return (source instanceof Function ? this : source)[target] !== undefined
          ? (source instanceof Function ? this : source)[target][property] : undefined;
      }

      return target[property];
    };

    // Create `set()` method.
    // const _set = function(this: S, value: R): void {
    const set = function setter(this: S, value: R): void {
      // Use old setter.
      if (store.setter[property]) {
        store.setter[property].apply(source instanceof Function ? this : source, arguments);
      }
      // TODO: Check source.
      if (typeof target === 'string') {
        if ((source instanceof Function ? this : source)[target] !== undefined) {
          (source instanceof Function ? this : source)[target][property] = value;
        }
      } else if (target) {
        target[property] = value;
      }
    };
    this.define(source, property, { get, set });
  }

  /**
   * @template S Component source type.
   * @template T Component target type.
   * @param source Component as Function or as json object to clear property.
   * @param property Name of property to be cleared in source component.
   */
  private _unbind<S>(source: S, property: string): void {
    this.define(source, property, { get: this.stored.getter[property], set: this.stored.setter[property] });
  }

  /**
   * @template S Component source type.
   * @template T Component target type.
   * @param source Component as Function or as json object to clear property.
   * @param property Name of property to be cleared in source component.
   */
  private _unwrap<S>(source: S, property: string): void {
    this.define(source, property, { get: this.stored.getter[property], set: this.stored.setter[property] });
  }

  /**
   * @template S Component source type.
   * @template T Component target type.
   * @param source Component as Function or as json object to wrap property.
   * @param property Name of component source property to be wrapped.
   * @param setterCallback Function that is invoked in component source property `set`.
   * @param [getterCallback] Function that is invoked in component source property `get`.
   */
  private _wrap<S, R = any>(source: Function | S, property: string, setterCallback?: Setter<S, R>, getterCallback?: Getter<S, R>): void {
    // Store original Setter/Getter.
    const store = this.stored.setterGetter(source, property);

    // Property with prefix and suffix.
    const sourcePropertyName = this.propertyName(property);

    // Wrap property.
    if (sourcePropertyName) {

      const get = function getter(this: S): R | undefined {
        if (store.getter[property]) {
          return store.getter[property].apply(source instanceof Function ? this : source, arguments);
        }
        // Use new getter.
        if (getterCallback instanceof Function) {
          return getterCallback(property, source instanceof Function ? this : source);
        }

        return (source instanceof Function ? this : source)[sourcePropertyName];
      };

      const set = function setter(this: S, value: R | undefined): void {
        // Remember input value.
        (source instanceof Function ? this : source)[sourcePropertyName] = value;

        // Use old setter.
        if (store.setter[property]) {
          store.setter[property].apply(source instanceof Function ? this : source, arguments);
        }
        // Use setter function.
        if (setterCallback instanceof Function) {
          setterCallback(property, source instanceof Function ? this : source, sourcePropertyName);
        }
      };

      // Create property with prefix and suffix to be wrapped by original name.
      this.define(source, sourcePropertyName, {
        writable: true,
        value: (source[property])
          ? (source instanceof Function ? this : source)[property] : (source instanceof Function ? this : source)[sourcePropertyName]
        })
        .define(source, property, { get, set });

      // this.wrapped.push(property);
    } else {
      throw new Error(`sourcePropertyName is not created.`);
    }
  }
}
