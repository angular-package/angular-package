// external
import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';

// @angular-package
import { CycleHookType } from '@angular-package/core/type';
import { CycleHookInterface } from '@angular-package/core/interface';
import { StoreOriginalClass } from '@angular-package/core/store';

// internal
import { configureDetectorFunction, detectToSetterFunction } from './helper';
import { ApPropertiesInterface } from '.';

/**
 * Indicate component properties by name whether to detect or not changes on them.
 * @export
 * @template T
 * @param {ApPropertiesInterface} properties
 * @param {string} [propertiesStoreName='properties']
 * @returns {Function}
 */
export function ApChangeDetection<T>(properties: ApPropertiesInterface, propertiesStoreName: string = 'properties'): Function {
  return function (component: Function): void {
    const store = new StoreOriginalClass();
    configureDetectorFunction<T>(component, properties, propertiesStoreName);
    detectToSetterFunction<T>(store, component, properties, propertiesStoreName);
  };
}


