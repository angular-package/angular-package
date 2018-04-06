import { ChangeDetectorRef, Type } from '@angular/core';
import * as _ from 'lodash-es';

// internal
import { instanceOf } from '../../src/instance-of.func';
import { ApChangeDetectionProperties } from '../../interface';

/**
 * Find `ChangeDetectorRef` component instance and simply use it.
 * @export
 * @class ApChangeDetectorClass
 * @template T
 */
export class ApChangeDetectorClass<T> {

  // Change detector instance property name.
  private cd?: string;
  public detection = false;
  public properties?: ApChangeDetectionProperties;

  /**
   * Creates an instance of ApChangeDetectorClass.
   * @param {Type<T>} component
   * @memberof ApChangeDetectorClass
   */
  constructor(component: Type<T>) {
    this.find(component);
  }

  /**
   * Detach component from detection tree.
   * @param {Type<T>} component
   * @memberof ApChangeDetectorClass
   */
  public detach(component: Type<T>): void {
    setTimeout(() => {
      if (this.cd) {
        component[this.cd].detach();
      }
    }, 0);
  }

  /**
   * Detect changes in specified component, and when provided property is true in properties.
   * @param {Type<T>} component
   * @param {string} [property]
   * @memberof ApChangeDetectorClass
   */
  public detect(component: Type<T>, property?: string): void {
    if (this.cd) {
      if (property) {
        if (this.properties && this.properties[property] === true) {
          component[this.cd].detectChanges();
        }
      } else {
        component[this.cd].detectChanges();
      }
    }
  }

  /**
   * Reattach component to detection.
   * @param {Type<T>} component
   * @memberof ApChangeDetectorClass
   */
  public reattach(component: Type<T>): void {
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
    if (this.cd === undefined) {
      _.each(component, (ChangeDetectorRefInstance: ChangeDetectorRef, key: string) => {
        if (component[key] instanceof Object) {
          if (instanceOf<ChangeDetectorRef>(component[key], 'detectChanges')) {
            if (component[key].detectChanges instanceof Function) {
              this.cd = key;
              return false;
            }
          }
        }
      });
      if (this.cd === undefined) {
        throw new Error(`
          ApChangeDetectorClass: couldn't find ChangeDetectorRef instance.
          Add to constructor "public changeDetectorRef: ChangeDetectorRef".
        `);
      }
    }
    return this.cd;
  }
}
