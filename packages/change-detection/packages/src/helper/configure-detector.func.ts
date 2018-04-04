// @angular-package
import { StoreOriginalClass } from '@angular-package/core/store';

// internal
import { ApPropertiesInterface } from '../../interface';
import { ApChangeDetectorClass } from '../../change-detector';

/**
 * @export
 * @template T
 * @param {Function} component
 * @param {ApPropertiesInterface} properties
 * @param {string} propertiesHolderName
 * @returns {void}
 */
export const configureDetectorFunction = function<T>(
  component: Function,
  properties: ApPropertiesInterface,
  propertiesStoreName: string
): void {
  Object.defineProperties(component.prototype, {

    __changeDetector: { writable: true },
    _changeDetector: {
      set: function (value: ApChangeDetectorClass<T>) {
        this.__changeDetector = value;
      },
      get: function (): ApChangeDetectorClass<T> {
        if (this.__changeDetector === undefined) {
          this.__changeDetector = new ApChangeDetectorClass<T>(this);
        }
        return this.__changeDetector;
      }
    },

    _detach: {
      configurable: false,
      writable: false,
      value: function (): void {
        this._changeDetector.detach(this);
      }
    },

    _detect: {
      configurable: false,
      writable: false,
      value: function (): void {
        this._changeDetector.detect(this);
      }
    },

    // Whether component changes are going to be detected or not.
    __detection: { writable: true },
    _detection: {
      set(value: boolean) {
        this.__detection = value;
        if (value === false) {
          this._detach();
        } else if (value === true) {
          this._reattach();
        }
      },
      get(): boolean {
        return this.__detection;
      }
    },

    [`__${propertiesStoreName}`]: { writable: true, value: properties },
    [`_${propertiesStoreName}`]: {
      set: function (value: ApPropertiesInterface) {
        this._detect();
        this[`__${propertiesStoreName}`] = value;
      },
      get: function (): ApPropertiesInterface {
        return this[`__${propertiesStoreName}`];
      }
    },

    _reattach: {
      writable: false,
      value: function (): void {
        this._changeDetector.reattach(this);
      }
    }
  });
};
