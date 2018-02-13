// external
import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';

// @angular-package
import { CycleHookType } from '@angular-package/core/src/type';
import { CycleHookInterface } from '@angular-package/core/src/interface';
import { OriginalStoreClass } from '@angular-package/core/target';

// internal
import { configureDetectorFunction, detectToSetterFunction } from './helper';
import { ApPropertiesInterface } from '.';

/**
 * Indicate component properties by name whether to detect or not changes on them.
 * @export
 * @template T
 * @param {ApPropertiesInterface} properties
 * @returns {Function}
 */
export function ApChangeDetection<T>(properties: ApPropertiesInterface): Function {
  return function (target: Function): void {
    const store = new OriginalStoreClass();
    configureDetectorFunction<T>(target, properties);
    detectToSetterFunction<T>(store, target, properties);
  };
}


