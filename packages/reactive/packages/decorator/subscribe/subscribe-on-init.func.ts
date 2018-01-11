// external
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as _ from 'lodash-es';

// internal
import { ObservablesInterface } from './../reactive-decorator.interface';

export const subscribeOnInit = function <T>(target: any, observables: ObservablesInterface): void {
  const ngOnInit = target.prototype.ngOnInit;
  const lookup = { getter: {}, setter: {} };

  // Set lookup getters / setters.
  _.each(observables, (property: string) => {
    lookup.getter[property] = target.prototype.__proto__.__lookupGetter__(property);
    lookup.setter[property] = target.prototype.__proto__.__lookupSetter__(property);
  });

  target.prototype.ngOnInit = function (): void {
    if (observables instanceof Array) {
      _.each(observables, (property: string) => {
        const originalValue = this[property];
        // Define `Subject` in $$ suffix property name component.
        Object.defineProperty(this, `${property}$$`, { writable: false, value: new Subject<T>() });
        // Define poperty for subscribe to subject.
        Object.defineProperty(this, `${property}$`, { writable: false, value: this[`${property}$$`].asObservable() });
        // Add to Setter/Getter to subscribed property.
        Object.defineProperty(this, property, {
          set: function (value: T) {
            // Send `value` to Subject.
            setTimeout(() => {
              this[`${property}$$`].next(value);
            }, 0);

            if (lookup.setter[property] !== undefined) {
              lookup.setter[property].apply(this, arguments);
            } else {
              this[`_${property}`] = value;
            }
          },
          get: function (): T {
            if (lookup.getter[property] === undefined) {
              return this[`_${property}`];
            } else {
              return lookup.getter[property].apply(this, arguments);
            }
          }
        });
        this[`_${property}`] = originalValue;
      });
    }

    // Apply original `ngOnInit()` method.
    if (ngOnInit !== undefined) {
      ngOnInit.apply(this, arguments);
    }
  };

  // if method does not exist call it.
  if (ngOnInit === undefined) {
    target.prototype.ngOnInit();
  }
};
