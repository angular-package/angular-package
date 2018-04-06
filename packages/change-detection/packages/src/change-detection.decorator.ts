// external
import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';

// @angular-package
import { CycleHookType } from '@angular-package/core/type';
import { CycleHookInterface } from '@angular-package/core/interface';
import { StoreOriginalClass } from '@angular-package/core/store';

// internal
import { configureDetector, detectToSetter } from './core';
import { ApChangeDetectionConfig, ApChangeDetectionProperties } from '../interface';

/**
 * Indicate component properties by name whether to detect or not changes on them.
 * @export
 * @template T
 * @param {ApChangeDetectionProperties} properties
 * @param {ApChangeDetectionConfig} [config]
 * @returns {Function}
 */
export function ApChangeDetection<T>(properties: ApChangeDetectionProperties, config?: ApChangeDetectionConfig): Function {
  return function (component: Function): void {
    const store = new StoreOriginalClass();
    configureDetector<T>(component, properties, config);
    detectToSetter<T>(store, component, properties);
  };
}


