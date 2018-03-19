import { StoreOriginalClass } from '../../store';
import { PrefixSuffixClass } from '../../src/prefixsuffix.class';
import { CallbackGetterType } from '../type/callback-getter.type';
import { CallbackSetterType } from '../type/callback-setter.type';

/**
 * Wrap indicated properties of source component with instance dynamic component.
 * @export
 * @class PropertyWrapperClass
 */
export class PropertyWrapperClass extends PrefixSuffixClass {

  private store: StoreOriginalClass = new StoreOriginalClass();
  private wrapped: string[] = [];

  /**
   * Creates an instance of PropertyWrapperClass.
   * @param {string} [prefix]
   * @param {string} [suffix]
   * @memberof PropertyWrapperClass
   */
  constructor(prefix?: string, suffix?: string) {
    super(prefix, suffix);
  }

  /**
   * Method to wrap specified properties with setter and getter callback method.
   * @template S
   * @param {(Function | S)} source Function or component.
   * @param {(string | string[])} properties Name of properties that will be wrapped.
   * @param {CallbackSetterType<S>} setter Callback function used on set.
   * @param {CallbackGetterType<S>} getter Callback function used on get.
   * @memberof PropertyWrapperClass
   */
  wrap<S>(source: Function | S, properties: string | string[], setter: CallbackSetterType<S>, getter: CallbackGetterType<S>): void {
    try {
      if (source) {
        if (properties instanceof Array) {
          properties.forEach((property: string) => {
            this.wrapProperty(source, property, setter, getter);
          });
        } else {
          this.wrapProperty(source, properties, setter, getter);
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
  }

  private wrapProperty<S>(source: Function | S, property: string, setter: CallbackSetterType<S>, getter: CallbackGetterType<S>): void {
    // Check if property is already wrapped.
    if (this.wrapped.includes(property) === false) {
      const t = this;

      // Store original Setter/Getter.
      const store = this.store.setterGetter(source, property);

      // Property with prefix and suffix.
      const sourcePropertyName = this.propertyName(property);

      // Wrap property.
      if (sourcePropertyName) {
        // Create property with prefix and suffix to be wrapped by original name.
        Object.defineProperty(
          (source instanceof Function) ? source.prototype : source,
          sourcePropertyName,
          { writable: true, value: (source[property]) ? source[property] : source[sourcePropertyName] }
        );

        Object.defineProperties((source instanceof Function) ? source.prototype : source, {
          [property]: {
            get: function () {
              if (store.getter[property]) {
                return store.getter[property].apply(this, arguments);
              }
              // Use new getter.
              if (getter instanceof Function) {
                return getter(property, this);
              }
            },
            set: function (value) {
              // Remember input value.
              this[sourcePropertyName] = value;

              // Use old setter.
              if (store.setter[property]) {
                store.setter[property].apply(this, arguments);
              }
              // Use setter function.
              if (setter instanceof Function) {
                setter(property, sourcePropertyName, this);
              }
            }
          }
        });
        this.wrapped.push(property);
      } else {
        throw new Error(`sourcePropertyName is not generated.`);
      }
    }
  }
}
