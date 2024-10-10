// external
import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash-es';

// internal
import { completeFunction } from './complete.function';
import { PropertiesInterface } from './properties.interface';
import { subscribeFunction } from './subscribe.function';
import { LookupInterface } from './lookup.interface';
import { originalGetterSetter } from './store-lookup.func';

/**
 * ApSubjectInit
 * @template T
 * @param {Function} target
 * @param {PropertiesInterface} properties
 */
export const ApSubjectInit = function <T>(target: Function, properties: PropertiesInterface<T>): void {
  const lookup: LookupInterface = { getter: {}, setter: {} };

  if (properties instanceof Array) {
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
            this[`_${property}$`] = new Subject<T>();
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
