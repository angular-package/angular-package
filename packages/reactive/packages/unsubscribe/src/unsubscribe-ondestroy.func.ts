// external
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash-es';

// internal
import { PropertiesInterface } from '../../subject/src/properties.interface';

/**
 * ApUnsubscribeOnDestroy
 * @export
 * @template T
 * @param {Function} target
 * @param {PropertiesInterface} [properties]
 */
export const ApUnsubscribeOnDestroy = function<T>(target: Function, properties?: PropertiesInterface<T>): void {
  if (target.prototype.ngOnDestroy !== undefined) {
    // Original ngOnDestroy
    const ngOnDestroy = target.prototype.ngOnDestroy;

    // new ngOnDestroy
    target.prototype.ngOnDestroy = function(): void {
      if (properties === undefined) {
        _.each(this, (subscription: Subscription) => {
          // Find properties in component and search for subscription instance.
          if (subscription instanceof Subscription && subscription.closed === false) {
            subscription.unsubscribe();
          }
        });
      } else {
        _.each(this, (subscription: Subscription, key: string) => {
          _.each(properties, (observableName: string) => {
            if (key.includes(observableName)) {
              if (subscription instanceof Subscription && subscription.closed === false) {
                subscription.unsubscribe();
              }
            }
          });
        });
      }
      if (ngOnDestroy !== undefined) {
        ngOnDestroy.apply(this, arguments);
      }
    };
  }
};
