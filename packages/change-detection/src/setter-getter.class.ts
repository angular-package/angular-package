/// <reference path="./typings/index.d.ts" />

import _ from '_lodash';
import { LookupInterface } from './interface';
import { PropertiesInterface } from './interface';
import { ErrorMessages } from './error-messages.func';

/**
 * Manage component properties setters and getters.
 * @export
 * @class SetterGetterClass
 */
export class SetterGetterClass {
  private lookup: LookupInterface = { getter: {}, setter: {} };

  constructor(public target?: any) {
    return this;
  }

  /**
   * Get and store getter by property name.
   * @param {string} property
   * @returns {*}
   * @memberof SetterGetterClass
   */
  getter(property: string): any {
    if (this.target) {
      return this.lookup.getter[property] = this.target.prototype.__lookupGetter__(property);
    }
  }

  /**
   * Get and store setter by property name.
   * @param {string} property
   * @returns {*}
   * @memberof SetterGetterClass
   */
  setter(property: string): any {
    if (this.target) {
      return this.lookup.setter[property] = this.target.prototype.__lookupSetter__(property);
    }
  }

  /**
   * Return specified by property name getter function directly from __proto__ component or stored lookup.
   * @param {string} property
   * @param {*} [component]
   * @returns {*}
   * @memberof SetterGetterClass
   */
  lookupGetter(property: string, component?: any): any {
    if (component) {
      return component.__proto__.__lookupGetter__(property);
    } else if (this.target) {
      return this.lookup.getter[property];
    }
  }

  /**
   * Return specified by property name setter function directly from __proto__ component or stored lookup.
   * @param {string} property
   * @param {*} [component]
   * @returns {*}
   * @memberof SetterGetterClass
   */
  lookupSetter(property: string, component?: any): any {
    if (component) {
      return component.__proto__.__lookupSetter__(property);
    } else if (this.target) {
      return this.lookup.setter[property];
    }
  }

  /**
   *
   *
   * @param {*} component
   * @memberof SetterGetterClass
   */
  replaceAll(component: any): void {
    if (component) {
      _.each(component.changeDetection.properties, (value: any, property: string) => {
        this.replace(component, property);
      });
    }
  }

  /**
   * Replace setter and getter in provided component and with specific property name to have original setter and getter and detection
   * changes.
   * @param {*} component
   * @param {string} property
   * @memberof SetterGetterClass
   */
  replace(component: any, property: string, originalName?: string): void {
    const originalValue = component[property];
    const getter = this.lookupGetter(property, component);
    const setter = this.lookupSetter(property, component);
    Object.defineProperty(component, property, {
      set: function (value: any) {
        if (setter !== undefined) {
          setter.apply(this, arguments);
        } else {
          this[`_${property}`] = value;
        }
        if (this.hasOwnProperty('changeDetection')) {
          if (this['changeDetection'].properties[property] === true) {
            this['__detect']();
          }
        }
      },
      get: function () {
        if (getter) {
          return getter.apply(this, arguments);
        } else {
          return this[`_${property}`];
        }
      }
    });
    component[property] = originalValue;
  }

  /**
   *
   *
   * @param {PropertiesInterface} properties
   * @returns {this}
   * @memberof SetterGetterClass
   */
  store(properties: PropertiesInterface): this {
    if (_.each !== undefined) {
      _.each(properties, (value: any, property: string) => {
        this.getter(property);
        this.setter(property);
      });
    } else {
      throw new Error(ErrorMessages('lodash imported as _').undefined);
    }
    return this;
  }
}
