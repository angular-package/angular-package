// external
import { merge } from 'lodash-es';

// internal
import { ApChangeDetectionOptions, ApChangeDetectionProperties } from '../interface';
import { DEFAULT_OPTIONS } from './default_options';
import { ApChangeDetectorClass } from '../change-detector/src/change-detector.class';
import { PropertyWrapperClass } from '@angular-package/core/property-wrapper';

/**
 * Indicate component properties by name whether to detect or not changes on them.
 * @export
 * @template T
 * @param {ApChangeDetectionProperties} properties Name of component property with value true is sensitive for detection.
 * @param {ApChangeDetectionOptions} [options] Method or property name that is accessible directly in component under this name.
 * @returns {Function}
 */
export function ApChangeDetection<T>(properties: ApChangeDetectionProperties, options?: ApChangeDetectionOptions): Function {
  return function (component: Function): void {

    options = (options) ? merge(DEFAULT_OPTIONS, options) : DEFAULT_OPTIONS;

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
            this._changeDetector = new ApChangeDetectorClass<T>(this, Object.assign({}, properties));
          }
          return this._changeDetector as ApChangeDetectorClass<T>;
        }
      },

      detection: {
        set(detection: boolean) {
          this.changeDetector.detection = detection;
          this.changeDetector.setDetection(this);
        },
        get(): boolean {
          return this.changeDetector.detection;
        }
      },
    });

    if (options) {
      // Detach.
      if (options.detach) {
        Object.defineProperties(component.prototype, {
          [`${options.detach}`]: {
            configurable: false,
            writable: true,
            value: function (): void {
              this.changeDetector.detach(this);
            }
          }
        });
      }

      // Detect.
      if (options.detect) {
        Object.defineProperties(component.prototype, {
          [`${options.detect}`]: {
            configurable: false,
            writable: true,
            value: function (property?: string): void {
              this.changeDetector.detect(this, property);
            }
          }
        });
      }

      // Properties.
      if (options.properties) {
        Object.defineProperties(component.prototype, {
          [`${options.properties}`]: {
            set: function (value: ApChangeDetectionProperties) {
              this.changeDetector.properties = value;
              this.changeDetector.detect(this);
              this.changeDetector.detectToSetter(this);
            },
            get: function (): ApChangeDetectionProperties {
              return this.changeDetector.properties;
            }
          }
        });
      }

      // Reattach.
      if (options.reattach) {
        Object.defineProperties(component.prototype, {
          [`${options.reattach}`]: {
            configurable: false,
            writable: true,
            value: function (): void {
              this.changeDetector.reattach(this);
            }
          }
        });
      }
    }

  };
}


