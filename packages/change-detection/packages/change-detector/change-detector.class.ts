import { ChangeDetectorRef, Type } from '@angular/core';
import * as _ from 'lodash-es';

// internal
import { instanceOf } from '../src/instance-of.func';

/**
 * Find `ChangeDetectorRef` component instance and simply use it.
 * @export
 * @class ApChangeDetectorClass
 * @template T
 */
export class ApChangeDetectorClass<T> {

  // Change detector instance property name.
  private _cd?: string;
  get cd() {
    return this.find(this.component);
  }

  /**
   * Creates an instance of ApChangeDetectorClass.
   * @param {Type<T>} component
   * @memberof ApChangeDetectorClass
   */
  constructor(public component: Type<T>) {}

  /**
   * @param {Type<T>} component
   * @memberof ApChangeDetectorClass
   */
  detach(component: Type<T>): void {
    this.component = component;
    setTimeout(() => {
      if (this.cd) {
        component[this.cd].detach();
      }
    }, 0);
  }

  /**
   * Detect changes in component.
   * @param {Type<T>} component
   * @memberof ApChangeDetectorClass
   */
  detect(component: Type<T>): void {
    this.component = component;
    if (this.cd) {
      component[this.cd].detectChanges();
    }
  }

  /**
   * Reattach component to detection.
   * @param {Type<T>} component
   * @memberof ApChangeDetectorClass
   */
  reattach(component: Type<T>): void {
    this.component = component;
    setTimeout(() => {
      if (this.cd) {
        component[this.cd].reattach();
      }
    }, 0);
  }

  /**
   * Search for change detector instance in specified component and return its key.
   * @private
   * @param {Type<T>} component
   * @returns {string}
   * @memberof ApChangeDetectorClass
   */
  private find(component: Type<T>): string {
    if (this._cd === undefined) {
      _.each(component, (ChangeDetectorRefInstance: ChangeDetectorRef, key: string) => {
        if (component[key] instanceof Object) {
          if (instanceOf<ChangeDetectorRef>(component[key], 'detectChanges')) {
            if (component[key].detectChanges instanceof Function) {
              this._cd = key;
              return false;
            }
          }
        }
      });
      if (this._cd === undefined) {
        throw new Error(`
          ApChangeDetectorClass: couldn't find ChangeDetectorRef instance.
          Add to constructor "public changeDetectorRef: ChangeDetectorRef".
        `);
      }
    }
    return this._cd;
  }
}
