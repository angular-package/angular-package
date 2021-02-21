import { FunctionType } from '@angular-package/core/type';
import { typeObjectGuard } from '@angular-package/core/type/guard';

// internal
import { ChangeDetectorClass } from '../change-detector/lib/change-detector.class';
import { DetectionProperties } from '../interface/detection-properties.interface';
import { DetectorOptions } from '../interface/detector-options.interface';

// const.
import { DETECTOR_OPTIONS } from './detector-options.const';

/**
 * Function to use with decorator.
 * @param component Source component for properties.
 * @param properties Properties names to detect changes if true.
 * @param options Change default names assigned to component.
 */
export const configureDetector = <C>(
  component: FunctionType,
  properties: DetectionProperties,
  options: DetectorOptions = DETECTOR_OPTIONS
): void => {

  if (typeObjectGuard<C>(component)) {
    if (typeObjectGuard<DetectorOptions>(options)) {
      options = Object.assign(DETECTOR_OPTIONS, options);
    }

    Object.defineProperties(component.prototype, {

      $$changeDetector: { writable: true },
      [options.changeDetector]: {
        get(): ChangeDetectorClass<C> {
          if (this.$$changeDetector === undefined) {
            this.$$changeDetector = new ChangeDetectorClass<C>(this, properties).addDetection();
          }
          return this.$$changeDetector;
        }
      },

      // Whether component changes are going to be detected or not.
      [options.detection]: {
        set(value: boolean): void {
          if (value === false) {
            this[options.changeDetector].detach();
          } else if (value === true) {
            this[options.changeDetector].reattach();
          }
        }
      },

      [options.properties]: {
        set(value: DetectionProperties): void {
          this.$$changeDetector.properties = value;
        },
        get(): DetectionProperties {
          return this.changeDetector.properties;
        }
      },
    });
  }
};
