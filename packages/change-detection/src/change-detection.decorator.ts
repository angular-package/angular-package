/// <reference path="./typings/index.d.ts" />

// external
import _ from '_lodash';

// internal
import { ChangeDetectionInterface, LookupInterface, LookupItemInterface, PropertiesInterface } from './interface';
import { SetterGetterClass } from './setter-getter.class';
import { ChangeDetectorClass } from './change-detector.class';

/**
 * Initially set change detector status to `Detached`, and with provided `properties` detect changes by using `set`.
 * @export
 * @param {boolean} [detection=true]
 * @param {PropertiesInterface} properties
 * @returns {Function}
 */
export function ChangeDetection(detection = true, properties: PropertiesInterface): Function {
  return function (target: any) {
    // Store original setters and getters provided `properties`.
    const setterGetterClass = new SetterGetterClass(target).store(properties);
    // Store original `ngAfterContentInit()` method.
    const ngAfterContentInit = target.prototype.ngAfterContentInit;
    // Store original `ngOnInit()` method.
    const ngOnInit = target.prototype.ngOnInit;
    // Declare new `ngOnInit()` and apply original to it.
    target.prototype.ngOnInit = function () {
      // Create change detector instance.
      const changeDetector = new ChangeDetectorClass(this);
      // Create local instance of properties variable.
      properties = Object.assign({}, properties);
      // Add `changeDetection` property to component.
      this.changeDetection = <ChangeDetectionInterface>{
        detection,
        properties,
        ready: false
      };
      // Add some properties.
      Object.defineProperties(this, {
        /*
          Detach this component.
        */
        __detach: {
          writable: false,
          value: function(): void {
            changeDetector.detach();
          }
        },
        /*
          Detect changes in this component.
        */
        __detect: {
          writable: false,
          value: function (): void {
            changeDetector.detect();
          }
        },

        /*
          Status of detection true or false.
        */
        __detection: {
          set: function (value: boolean) {
            this.changeDetection.detection = value;
            if (this.changeDetection.ready === true) {
              if (value === false) {
                changeDetector.detach();
              } else if (value === true) {
                this.changeDetector.reattach();
              }
              changeDetector.detect();
            }
          },
          get: function (): boolean {
            return this.changeDetection.detection;
          }
        },

        /*
          Properties marked to make change detection working when component is `Detached`.
        */
        __properties: {
          set: function (value: PropertiesInterface) {
            if (this.changeDetection.ready === true) {
              changeDetector.detect();
            }
            this.changeDetection.properties = value;
          },
          get: function (): PropertiesInterface {
            return this.changeDetection.properties;
          }
        },
        __reattach: {
          writable: false,
          value: function(): void {
            changeDetector.reattach();
          }
        }
      });

      /*
        Replace all provided properties to detect changes when true.
      */
      setterGetterClass.replaceAll(this);

      if (ngOnInit) {
        ngOnInit.apply(this, arguments);
      }
    };

    // Declare new `ngAfterContentInit()` and apply original to it.
    target.prototype.ngAfterContentInit = function () {
      this.changeDetection.ready = true;
      setTimeout(() => {
        this.__detection = detection;
      }, 0);
      if (ngAfterContentInit) {
        ngAfterContentInit.apply(this, arguments);
      }
    };
  };
}
