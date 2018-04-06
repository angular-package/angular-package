// external
import * as _ from 'lodash-es';

// @angular-package
import { StoreOriginalClass } from '@angular-package/core/store';

// internal
import { ApChangeDetectionProperties } from '../../interface';
import { ApChangeDetectorClass } from '../../change-detector';

/**
 * @export
 * @template T
 * @param {StoreOriginalClass} store
 * @param {Function} component
 * @param {ApChangeDetectionProperties} properties
 */
export function detectToSetter<T>(
  store: StoreOriginalClass,
  component: Function,
  properties: ApChangeDetectionProperties
): void {
  if (properties) {

    const propertiesKeys = Object.keys(properties);

    // Store target.prototype original setter and getter properties.
    store.setterGetter(component, propertiesKeys);

    // Detect changes on indicated properties by using setter.
    _.each(propertiesKeys, (property: string): void => {

      // Create wrapped property if getter is not set.
      if (store.getter[property] === undefined) {
        Object.defineProperty(component.prototype, `_${property}`, { writable: true });
      }

      // Update setter and getter.
      Object.defineProperty(component.prototype, property, {

        // Update setter.
        set: function (value: any) {
          if (store.setter[property] !== undefined) {
            store.setter[property].apply(this, arguments);
          } else {
            this[`_${property}`] = value;
          }
          // Detect changes if indicated property is set to true.
          this['changeDetector'].detect(this, property);
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
  }
}
