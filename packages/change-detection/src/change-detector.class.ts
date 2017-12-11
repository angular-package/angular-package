import { ChangeDetectorRef } from '@angular/core';
import * as _ from 'lodash-es';

// internal
import { instanceOf } from './instance-of.func';
import { PropertiesInterface } from './interface';

/**
 * @export
 * @class ChangeDetectorClass
 */
export class ChangeDetectorClass {
  // Change detector instance property name.
  private cd: string;

  /**
   * Creates an instance of ChangeDetectorClass.
   * @param {*} component
   * @memberof ChangeDetectorClass
   */
  constructor(public component: any) {
    this.find(component);
  }

  /**
   * Detach component.
   * @memberof ChangeDetectorClass
   */
  detach(): void {
    if (this.cd) {
      this.component[this.cd].detach();
    }
  }

  /**
   * Detect changes in component.
   * @memberof ChangeDetectorClass
   */
  detect(): void {
    if (this.cd) {
      this.component[this.cd].detectChanges();
    }
  }

  /**
   * Search for component changes again.
   * @memberof ChangeDetectorClass
   */
  reattach(): void {
    if (this.cd) {
      this.component[this.cd].reattach();
    }
  }

  /**
   * Search for change detector instance in specified component and return its key.
   * @private
   * @param {*} component
   * @returns {(string | void)}
   * @memberof ChangeDetectorClass
   */
  private find(component: any): string | void {
    let found: any;
    _.each(component, (ChangeDetectorRefInstance: ChangeDetectorRef, key: string) => {
      if (component[key] instanceof Object) {
        if (instanceOf<ChangeDetectorRef>(component[key], 'detectChanges')) {
          if (component[key].detectChanges instanceof Function) {
            found = key;
            return false;
          }
        }
      }
    });
    return this.cd = found;
  }
}
