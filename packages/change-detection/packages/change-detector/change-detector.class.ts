import { ChangeDetectorRef } from '@angular/core';
import * as _ from 'lodash-es';

// @angular-package
import { ComponentType } from '@angular-package/core';

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
   * @param {ComponentType<T>} component
   * @memberof ApChangeDetectorClass
   */
  constructor(public component: ComponentType<T>) {}

  /**
   * @param {ComponentType<T>} component
   * @memberof ApChangeDetectorClass
   */
  detach(component: ComponentType<T>): void {
    this.component = component;
    setTimeout(() => {
      if (this.cd) {
        component[this.cd].detach();
      }
    }, 0);
  }

  /**
   * Detect changes in component.
   * @param {ComponentType<T>} component
   * @memberof ApChangeDetectorClass
   */
  detect(component: ComponentType<T>): void {
    this.component = component;
    if (this.cd) {
      component[this.cd].detectChanges();
    }
  }

  /**
   * Reattach component to detection.
   * @param {ComponentType<T>} component
   * @memberof ApChangeDetectorClass
   */
  reattach(component: ComponentType<T>): void {
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
   * @param {ComponentType<T>} component
   * @returns {string}
   * @memberof ApChangeDetectorClass
   */
  private find(component: ComponentType<T>): string {
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
