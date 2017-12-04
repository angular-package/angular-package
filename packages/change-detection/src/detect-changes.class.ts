// external
import { Component, ChangeDetectorRef, Injectable } from '@angular/core';
import * as _ from 'lodash-es';

// internal
import { LookUpInterface, PropertiesInterface, PropertySettingsInterface } from './interface';
import { instanceOf } from './instance-of.func';

@Injectable()
export class DetectChangesClass {

  private cd: string | void;

  /**
   * Creates an instance of DetectChangesClass.
   * @memberof DetectChangesClass
   */
  constructor(public lookup: LookUpInterface, public target: any, properties: PropertiesInterface) {
    this.initializeConfigProperty(properties);
  }

  /**
   * @param {*} component 
   * @param {string} cd 
   * @memberof DetectChangesClass
   */
  detach(component: any, cd: string) { 
    if (component) {
      if (cd) {
        component[cd].detach();        
      }
    }
  }

  /**
   * 
   * 
   * @param {*} properties 
   * @memberof DetectChangesClass
   */
  initializeConfigProperty(properties: any) {
    // add property `detectChangesDecorator` to store all needed information
    this.target.prototype.detectChangesDecorator = {
      detach: true,
      properties
    };
  }

  /**
   * Replace in properties loop original setter and getter by adding detectChanges with found change detector instance.
   * @param {*} component 
   * @memberof DetectChangesClass
   */
  setterDetectChanges(component: any) {
    if (component.__proto__.detectChangesDecorator instanceof Object) {
      const lookup = this.lookup;
      const cd = this.cd = this.findChangeDetection(component);

      _.each(component.__proto__.detectChangesDecorator.properties, (propertySettings: PropertySettingsInterface, propertyName: string) => {
        const originalValue = component[propertyName];

        // Add to Setter/Getter to property.
        Object.defineProperty(component, propertyName, {
          set: function (value: any) {
            if (lookup.setter[propertyName] !== undefined) {
              lookup.setter[propertyName].apply(component, arguments);
            } else {
              component[`_${propertyName}`] = value;
            }
            if (propertySettings.changeDetection === true) {
              if (cd) {
                component[cd].detectChanges();
              }
            }
          },
          get: function (): any {
            if (lookup.getter[propertyName] === undefined) {
              return component[`_${propertyName}`];
            } else {
              return lookup.getter[propertyName].apply(component, arguments);
            }
          }
        });
        this[`_${propertyName}`] = originalValue;
      });
    }

  }

  /**
   * Search in properties loop for getter && setter to store in lookup.
   * @param {PropertiesInterface} properties 
   * @param {*} [target] 
   * @returns {LookUpInterface} 
   * @memberof DetectChangesClass
   */
  lookupProperties(properties: PropertiesInterface, target?: any): LookUpInterface {
    target = (!target) ? this.target : target;
    if (target && properties) {
      _.each(properties, (propertySettings: PropertySettingsInterface, propertyName: string) => {
        this.lookup.getter[propertyName] = target.prototype.__lookupGetter__(propertyName);
        this.lookup.setter[propertyName] = target.prototype.__lookupSetter__(propertyName);
      });
    }
    return this.lookup;
  }

  /**
   * Search for change detector instance in specified component.
   * @param {*} component 
   * @returns {(string | void)} 
   * @memberof DetectChangesClass
   */
  findChangeDetection(component: any): string | void {
    // search for changeDetection instance
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
    return found;
  }
}
