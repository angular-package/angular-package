import { Injectable } from '@angular/core';

// internals
import { StoreOriginalClass } from './store-original.class';
import { PrefixSuffixClass } from './prefixsuffix.class';
import { setProperty } from './set-property.function';
import { getProperty } from './get-property.function';
import { GetterCallback, SetterCallback } from '../type';

// @angular-package/type
import { FunctionType } from '@angular-package/type';
import { Constructor, isObject, isObjectType, isPrimitiveType, isString, Primitives } from '@angular-package/type';

@Injectable()
export class PropertyClass<From = FunctionType> extends PrefixSuffixClass {

  private bound$$ = [];
  private wrapped$$ = [];

  /**
   * @param properties Properties to bind/wrap.
   * @param args Prefix/Suffix for properties.
   */
  constructor(public properties?: Array<string>, ...args: any) {
    super(...args);
  }

  /**
   * Bind One or Many properties from object to object.
   * @param source Source object properties to bind.
   * @param target Target name or object where source properties are bound to.
   * @param properties Names to bind.
   */
  public bind<Source = From, Target = string>(source: Source, target: Target, properties: Array<string> = this.properties): this {
    if (Array.isArray(properties)){
      properties.forEach(name => this.bind$$<any, Source, Target>(name, source, target));
    } else {
      throw new Error(`Argument \`properties\`: ${properties} must be \`Array<string>\` type`);
    }

    return this;
  }

  /**
   * @param obj Object to set its property value.
   * @param key Property key object.
   * @param value Property value in object.
   * @param type Property value type in object to check.
   */
  // TODO: Add Types instead of Primitives to handle objects
  // public set<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key], type?: Primitives): this {
  //   setProperty<Obj, Key>(obj, key, value, type);
  //   return this;
  // }


  /**
   * Wrapper for source object property.
   * @param source Source object as decorator function or component type to wrap properties.
   * @param key Source object property key to wrap value.
   * @param getterCallback Function to wrap source property getter.
   * @param setterCallback Function to wrap source property setter.
   */
  public wrap<Source, Key extends keyof Source>(
    source: Source,
    key: Key,
    getterCallback?: GetterCallback<Source, Key>,
    setterCallback?: SetterCallback<Source, Key>
  ): this {
    if (isObject<Source>(source)) {
      // Use key as string.
      const property: string = key.toString();
      if (isPrimitiveType<string>(property, 'string')) {
        if (this.wrapped$$ instanceof Array && this.wrapped$$.includes(key) === false) {
          // Store original property getter and setter.
          const stored = new StoreOriginalClass().properties(property, source);
          // Create property with prefix and suffix to be wrapped by original name.
          const privatePropertyName = this.name(property);
          // Wrap property.
          if (isString(privatePropertyName)) {
            Object.defineProperties(source instanceof Function ? source.prototype : source, {
              [privatePropertyName]: {
                writable: true,
                value: (source instanceof Function ? source.prototype : source)[key]
              }
            });
            Object.defineProperties(source instanceof Function ? source.prototype : source, {
              [key]: {
                configurable: true,
                get(): Source[Key] {
                  // Custom getter.
                  if (isObject<GetterCallback<Source, Key>>(getterCallback)) {
                    getterCallback(key, this);
                  }
                  // Perform stored getter.
                  if (stored.getter[property]) {
                    return stored.getter[property].apply(this, arguments);
                  }
                  if (this[privatePropertyName]) {
                    return this[privatePropertyName];
                  }
                },
                set(value: Source[Key]): void {
                  const oldValue = this[privatePropertyName];
                  // Remember input value.
                  this[privatePropertyName] = value;
                  // Perform stored setter.
                  if (stored.setter[property]) {
                    stored.setter[property].apply(this, arguments);
                  }
                  // Use custom setter.
                  if (isObject<SetterCallback<Source, Key>>(setterCallback)) {
                    setterCallback(value, oldValue, this);
                  }
                }
              }
            });
            this.wrapped$$.push(key);
          } else {
            throw new Error(`Problem: const \`privatePropertyName\`: ${privatePropertyName} must be \`string\` type`);
          }
        }
      } else {
        throw new Error(`Problem: Argument \`key\`: ${key} must be \`Key\` type`);
      }
    } else {
      throw new Error(`Problem: Argument \`source\`: ${source} must be \`Source\` type`);
    }
    return this;
  }

  /**
   * Bind property from source object to target object.
   * @param key Property key name to bind.
   * @param source Bind from source object.
   * @param to Bind to target object.
   */
  private bind$$<Key extends keyof Source, Source, Target = string>(key: Key, source: Source, to: Target): void {
    if (isObject<Source>(source)) {
      // Use key as string.
      const property: string = key.toString();
      if (isPrimitiveType<string>(property, 'string')) {
        if (this.bound$$ instanceof Array && this.bound$$.includes(property) === false) {
          // Store original setters and getters.
          const stored = new StoreOriginalClass().properties(property, source);
          const initial = { };
          // Bind property to source.
          Object.defineProperties(source instanceof Function ? source.prototype : source, { [property]: {
            get(): Source[Key] {
              // Use stored getter.
              if (stored.getter[property]) {
                stored.getter[property].apply(this, arguments);
              }
              // Return value from this[to] object.
              if (typeof to === 'string' && this[to] instanceof Object) {
                return getProperty<any, string>(this[to], property);
              }
              if (to instanceof Object) {
                if (to[property] === undefined) {
                  setProperty<any, string>(to, property, initial[property]);
                }
                return getProperty<any, string>(to, property);
              }
            },
            set(value: Source[Key]): void {
              if (value) {
                initial[property] = value;
              }
              // Use stored setter.
              if (stored.setter[property]) {
                stored.setter[property].apply(this, arguments);
              }
              // TODO: Check source.
              if (isObject<Target>(to)) {
                setProperty<any, string>(to, property, value);
              } else if (isString(to)) {
                setProperty<any, string>(this[to], property, value);
              }
            }
          }});
          this.bound$$.push(property);
        }
      }
    } else {
      throw new Error(`Argument(\`source\`): is undefined`);
    }
  }
}
