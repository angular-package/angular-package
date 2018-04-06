import * as _ from 'lodash-es';

// @angular-package
import { StoreOriginalClass } from '@angular-package/core/store';

// internal
import { ApChangeDetectionProperties, ApChangeDetectionConfig } from '../../interface';
import { ApChangeDetectorClass } from '../../change-detector';
import { WRAP_DEFAULT } from './wrap';

/**
 * @export
 * @template T
 * @param {Function} component
 * @param {ApChangeDetectionConfig} config
 * @returns {void}
 */
export function configureDetector<T>(
  component: Function,
  properties: ApChangeDetectionProperties,
  config?: ApChangeDetectionConfig
): void {

  if (config) {
    config.wrap = _.merge(WRAP_DEFAULT, config.wrap);
  } else {
    config = {
      wrap: WRAP_DEFAULT
    };
  }

  // Add to component - must be.
  Object.defineProperties(component.prototype, {

    _changeDetector: {
      configurable: false,
      writable: true
    },
    changeDetector: {
      set: function (value: ApChangeDetectorClass<T>) {
        this._changeDetector = value;
      },
      get: function (): ApChangeDetectorClass<T> {
        if (this._changeDetector === undefined) {
          this._changeDetector = new ApChangeDetectorClass<T>(this);
          Object.assign(this._changeDetector, {
            properties: Object.assign({}, properties)
          });
        }
        return this._changeDetector as ApChangeDetectorClass<T>;
      }
    },

    detection: {
      set(detection: boolean) {
        this.changeDetector.detection = detection;
        if (detection === false) {
          this.changeDetector.detach(this);
        } else if (detection === true) {
          this.changeDetector.reattach(this);
        }
      },
      get(): boolean {
        return this.changeDetector.detection;
      }
    },

  });

  if (config.wrap) {
    // Detach.
    if (config.wrap.detach && config.wrap.detach.active === true) {
      Object.defineProperties(component.prototype, {
        [`${config.wrap.detach.name}`]: {
          configurable: false,
          writable: false,
          value: function (): void {
            this.changeDetector.detach(this);
          }
        }
      });
    }

    // Detect.
    if (config.wrap.detect && config.wrap.detect.active === true) {
      Object.defineProperties(component.prototype, {
        [`${config.wrap.detect.name}`]: {
          configurable: false,
          writable: false,
          value: function (property?: string): void {
            this.changeDetector.detect(this, property);
          }
        }
      });
    }

    // Detect.
    if (config.wrap.detect && config.wrap.detect.active === true) {
      Object.defineProperties(component.prototype, {
        [`${config.wrap.detect.name}`]: {
          configurable: false,
          writable: false,
          value: function (property?: string): void {
            this.changeDetector.detect(this, property);
          }
        }
      });
    }

    // Properties.
    if (config.wrap.properties && config.wrap.properties.active === true) {
      Object.defineProperties(component.prototype, {
        [`${config.wrap.properties.name}`]: {
          set: function (value: ApChangeDetectionProperties) {
            this._detect();
            Object.assign(this.changeDetector, {
              properties: value
            });
          },
          get: function (): ApChangeDetectionProperties {
            return this.changeDetector.properties;
          }
        }
      });
    }

    // Reattach.
    if (config.wrap.reattach && config.wrap.reattach.active === true) {
      Object.defineProperties(component.prototype, {
        [`${config.wrap.reattach.name}`]: {
          configurable: false,
          writable: false,
          value: function (): void {
            this.changeDetector.reattach(this);
          }
        }
      });
    }

  }
}
