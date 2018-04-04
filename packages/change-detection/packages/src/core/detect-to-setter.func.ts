// external
import * as _ from 'lodash-es';

// @angular-package
import { StoreOriginalClass } from '@angular-package/core/store';
import { ApPropertiesInterface } from '..';

/**
 * @template T
 * @param {StoreOriginalClass} store
 * @param {Function} component
 * @param {ApPropertiesInterface} properties
 */
export const detectToSetterFunction = function<T>(
  store: StoreOriginalClass,
  component: Function,
  properties: ApPropertiesInterface,
  propertiesStoreName: string
): void {
  // Store target.prototype original setter and getter properties.
  store.setterGetter(component, Object.keys(properties));

  // Detect changes on indicated properties by using setter.
  _.each(Object.keys(properties), (property: string): void => {
    Object.defineProperty(component.prototype, property, {

      // Update setter.
      set: function (value: any) {
        if (store.setter[property] !== undefined) {
          store.setter[property].apply(this, arguments);
        } else {
          this[`_${property}`] = value;
        }
        // Detect changes if indicated property is set to true.
        if (this[`_${propertiesStoreName}`][property] === true) {
          this['_detect']();
        }
      },

      // Update getter.
      get: function () {
        if (store.getter[property]) {
          return store.getter[property].apply(this, arguments);
        } else {
          return this[`_${property}`];
        }
      }
    });
  });
};
