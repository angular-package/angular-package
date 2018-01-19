// external
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash-es';

// internal
import { completeFunction } from '../../src/complete.function';
import { PropertiesInterface } from '../../src/properties.interface';
import { subscribeFunction } from '../../src/subscribe.function';
import { LookupInterface } from '../../src/lookup.interface';
import { originalGetterSetter } from '../../src/store-lookup.func';

/**
 * ApSubjectBehaviorInit
 * @export
 * @template T
 * @param {Function} target
 * @param {string[]} properties
 */
export const ApSubjectBehaviorInit = function <T>(target: Function, properties: string[]): void {
  if (properties instanceof Array) {
    const lookup: LookupInterface = { getter: {}, setter: {} };

    _.each(properties, (property: string) => {
      // store original getters / setters.
      originalGetterSetter(lookup, target, property);

      // Define property to hold value.
      Object.defineProperty(target.prototype, `_${property}`, { writable: true });

      // Define `Subject` in `${property}$` on demand by using `_${property}$`.
      Object.defineProperty(target.prototype, `_${property}$`, { writable: true });
      Object.defineProperty(target.prototype, `${property}$`, {
        set: function (value: T) {
          this[`_${property}$`] = value;
        },
        get: function (): T {
          if (this[`_${property}$`] === undefined) {
            this[`_${property}$`] = new BehaviorSubject<T>(this[`${property}`]);
          }
          return this[`_${property}$`];
        }
      });

      // Define property with function to subscribe to observables.
      subscribeFunction<T>(target);

      // Create function to complete observables.
      completeFunction(target);

      // Update property attributes.
      Object.defineProperty(target.prototype, `${property}`, {
        set: function (value: T) {
          // Send `value` to Subject.
          if (this[`${property}$`]) {
            this[`${property}$`].next(value);
          }

          // if setter is undefined then assign to property with suffix _.
          if (lookup.setter[property] === undefined) {
            this[`_${property}`] = value;
          // else use defined setter.
          } else {
            lookup.setter[property].apply(this, arguments);
          }
        },
        get: function (): T {
          // if setter is undefined then return property with suffix _.
          if (lookup.getter[property] === undefined) {
            return this[`_${property}`];
          // else use defined getter.
          } else {
            return lookup.getter[property].apply(this, arguments);
          }
        }
      });
    });
  }
};
