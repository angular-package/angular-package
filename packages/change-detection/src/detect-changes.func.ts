// external
import * as _ from 'lodash-es';

// internal
import { DetectChangesClass } from './detect-changes.class';
import { PropertiesInterface } from './interface';

/**
 * @DetectChanges()
 * @export
 * @param {PropertiesInterface} properties
 * @returns {Function}
 */
export function DetectChanges(properties: PropertiesInterface): Function {
  return function (target: any) {
    let dcClass = new DetectChangesClass({ getter: {}, setter: {} }, target, properties);

    // store ngOnInit
    const ngOnInit = target.prototype.ngOnInit;
    // store old getters and setters.
    dcClass.lookupProperties(properties);

    // ngOnInit
    target.prototype.ngOnInit = function (): void {
      // set new setters and getters specified in `properties` object.
      dcClass.setterDetectChanges(this);

      // Apply original `ngOnInit()` method.
      if (ngOnInit !== undefined) {
        ngOnInit.apply(this, arguments);
      }
    };
  };
}
