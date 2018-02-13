// @angular-package
import { OriginalStoreClass } from '@angular-package/core/target';

// internal
import { ApPropertiesInterface } from '../../interface';
import { ApChangeDetectorClass } from '../../change-detector';

/**
 * @export
 * @template T
 * @param {Function} t
 * @param {ApPropertiesInterface} p
 * @returns {void}
 */
export const configureDetectorFunction = function <T>(t: Function, p: ApPropertiesInterface): void {
  Object.defineProperties(t.prototype, {

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
      writable: false,
      value: function (): void {
        this._changeDetector.detach(this);
      }
    },

    _detect: {
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

    __properties: { writable: true, value: p },
    _properties: {
      set: function (value: ApPropertiesInterface) {
        this._detect();
        this.__properties = value;
      },
      get: function (): ApPropertiesInterface {
        return this.__properties;
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
