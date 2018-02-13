// external
import * as _ from 'lodash-es';

// @angular-package
import { OriginalStoreClass } from '@angular-package/core/target';
import { ApPropertiesInterface } from '..';

/**
 * @template T
 * @param {OriginalStoreClass} o
 * @param {Function} t
 * @param {ApPropertiesInterface} p
 */
export const detectToSetterFunction = function <T>(o: OriginalStoreClass, t: Function, p: ApPropertiesInterface): void {
  // Store target.prototype original setter and getter properties.
  o.setterGetter(t, Object.keys(p));

  // Detect changes on indicated properties by using setter.
  _.each(Object.keys(p), (property: string): void => {
    Object.defineProperty(t.prototype, property, {

      // Update setter.
      set: function (value: any) {
        if (o.setter[property] !== undefined) {
          o.setter[property].apply(this, arguments);
        } else {
          this[`_${property}`] = value;
        }
        // Detect changes if indicated property is set to true.
        if (this['_properties'][property] === true) {
          this['_detect']();
        }
      },

      // Update getter.
      get: function () {
        if (o.getter[property]) {
          return o.getter[property].apply(this, arguments);
        } else {
          return this[`_${property}`];
        }
      }
    });
  });
};
