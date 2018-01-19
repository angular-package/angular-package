// external
import { AsyncSubject } from 'rxjs/AsyncSubject';
import * as _ from 'lodash-es';

// internal
import { PropertiesInterface } from '../../src/properties.interface';

/**
 * ApSubjectAsyncInit
 * @export
 * @template T
 * @param {Function} target
 * @param {PropertiesInterface<T>} properties
 */
export const ApSubjectAsyncInit = function <T>(target: Function, properties: PropertiesInterface<T>): void {
  if (properties instanceof Array) {
    const ngOnInit = target.prototype.ngOnInit;
    const lookup = { getter: {}, setter: {} };

    // Set lookup getters / setters.
    _.each(properties, (property: string): void => {
      lookup.getter[property] = target.prototype.__proto__.__lookupGetter__(property);
      lookup.setter[property] = target.prototype.__proto__.__lookupSetter__(property);

      // Define `AsyncSubject` in $ suffix.
      Object.defineProperty(target.prototype, `_${property}$`, { writable: true });
      Object.defineProperty(target.prototype, `${property}$`, {
        set: function (value: T) {
          this[`_${property}$`] = value;
        },
        get: function (): T {
          if (this[`_${property}$`] === undefined) {
            this[`_${property}$`] = new AsyncSubject<T>();
          }
          return this[`_${property}$`];
        }
      });

      // Indicated property returns instance of AsyncSubject.
      Object.defineProperty(target.prototype, property, {
        // Add next to setter.
        set: function (value: T) {
          if (this[`${property}$`]) {
            this[`${property}$`].next(value);
          }
          if (lookup.setter[property] !== undefined) {
            lookup.setter[property].apply(this, arguments);
          }
        },
        // Return this AsyncSubject instance.
        get: function (): T {
          return this[`${property}$`];
        }
      });
    });
  }
};
