import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash-es';

import { ObservablesInterface } from './../reactive-decorator.interface';

export const unsubscribeOnDestroy = function (target: any, observables?: ObservablesInterface): void {
  // Original ngOnDestroy
  const ngOnDestroy = target.prototype.ngOnDestroy;
  // Add unsubscribe.
  target.prototype.ngOnDestroy = function () {
    if (observables === undefined) {
      _.each(this, (subscription: Subscription) => {
        // Find properties in component and search for subscription instance.
        if (subscription instanceof Subscription && subscription.closed === false) {
          subscription.unsubscribe();
        }
      });
    } else {
      _.each(this, (subscription: Subscription, key: string) => {
        _.each(observables, (observableName: string) => {
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
