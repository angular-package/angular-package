// external
import { ChangeDetectorRef, } from '@angular/core';
import { each } from 'lodash-es';
import { StoreOriginalClass } from '@angular-package/core/store';

// internal
import { instanceOf } from '../../src/instance-of.func';
import { ApChangeDetectionProperties } from '../../interface';
import { PropertyWrapperClass } from '@angular-package/core/property-wrapper';

/**
 * Find `ChangeDetectorRef` component instance and simply use it.
 * @export
 * @class ApChangeDetectorClass
 * @template T
 */
export class ApChangeDetectorClass<T> {

  /**
   * Property name of found `ChangeDetectorRef` instance.
   * @type {string}
   * @memberof ApChangeDetectorClass
   */
  public cd?: string;

  /**
   * Whether detection is on or off.
   * @type {boolean}
   * @memberof ApChangeDetectorClass
   */
  public detection?: boolean;

  /**
   * Add `detect()` method to all properties.
   * @type {PropertyWrapperClass}
   * @memberof ApChangeDetectorClass
   */
  public propertyWrapper: PropertyWrapperClass = new PropertyWrapperClass();

  /**
   * Creates an instance of ApChangeDetectorClass.
   * @param {T} component It is used to find `ChangeDetectorRef` instance.
   * @param {ApChangeDetectionProperties} [properties] Detect changes when specified property is true.
   * @memberof ApChangeDetectorClass
   */
  constructor(component: T, public properties?: ApChangeDetectionProperties) {
    this
      .find(component)
      .setDetection(component);

    return this;
  }

  /**
   * Detaches component change detector from the change detector tree.
   * The detached change detector will not be checked until it is reattached.
   * This method sets property `detection` to `false`, and also invoke method `detectToSetter()`.
   * @param {T} component Used to invoke `ChangeDetectorRef` methods by using `cd` property, in this case `detach()`.
   * @returns {this} ApChangeDetectorClass.
   * @memberof ApChangeDetectorClass
   */
  public detach(component: T): this {
    setTimeout(() => {
      if (this.cd) {
        component[this.cd].detach();
      }
    }, 0);
    this.detectToSetter(component);
    this.detection = false;
    return this;
  }

  /**
   * Detect changes in specified component, and also conditionally by providing property name.
   * @param {T} component Object to invoke `ChangeDetectorRef` methods by using `cd` property, in this case `detectChanges()`.
   * @param {string} [property] Name of property found in `properties` as true to invoke `detectChanges()`.
   * @returns {this} ApChangeDetectorClass.
   * @memberof ApChangeDetectorClass
   */
  public detect(component: T, property?: string): this {
    if (this.cd) {
      if (property) {
        if (this.properties && this.properties[property] === true) {
          component[this.cd].detectChanges();
        }
      } else {
        component[this.cd].detectChanges();
      }
    }
    return this;
  }

  /**
   * All indicated properties will have added method `detect()` to setter.
   * @param {T} component Object where properties are gonna be wrapped.
   * @returns {this}
   * @memberof ApChangeDetectorClass
   */
  public detectToSetter(component: T): this {
    if (instanceOf<ApChangeDetectionProperties>(this, 'properties') && this.properties) {
      this.propertyWrapper.wrap<T>(
        component,
        Object.keys(this.properties),
        (property: string, sourcePropertyName: string, source?: T): void => {
          if (source) {
            source['changeDetector'].detect(component, property);
          }
        },
        property => undefined
      );
    }
    return this;
  }

  /**
   * Reattach component change detector to the change detector tree and sets property `detection` to `true`.
   * @param {T} component Used to invoke `ChangeDetectorRef` methods by using `cd` property, in this case `reattach()`.
   * @returns {this} ApChangeDetectorClass.
   * @memberof ApChangeDetectorClass
   */
  public reattach(component: T): this {
    setTimeout(() => {
      if (this.cd) {
        component[this.cd].reattach();
      }
    }, 0);
    this.detection = true;
    return this;
  }

  /**
   * Detach or reattach component depends on `detection` property.
   * @param {T} component Component in which change detector tree will be modified.
   * @returns {this}
   * @memberof ApChangeDetectorClass
   */
  public setDetection(component: T): this {
    if (component) {
      if (this.detection === true) {
        this.reattach(component);
      } else if (this.detection === false) {
        this.detach(component);
      }
    }
    return this;
  }

  /**
   * Search for change detector instance in specified component and return its key.
   * @private
   * @param {T} component To find `ChangeDetectorRef` instance.
   * @returns {this}
   * @memberof ApChangeDetectorClass
   */
  private find(component: T): this {
    if (this.cd === undefined) {
      each(component, (ChangeDetectorRefInstance: ChangeDetectorRef, key: string) => {
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
    return this;
  }
}
