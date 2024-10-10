// internal
import { ApSubjectAsyncInit } from './subject-async-init.func';
import { ApUnsubscribeOnDestroy } from '../../../unsubscribe/src/unsubscribe-ondestroy.func';
import { PropertiesInterface } from '../../src/properties.interface';

/**
 * ApSubjectAsync
 * @export
 * @template T
 * @param {...string[]} properties
 * @returns {Function}
 */
export function ApSubjectAsync<T>(...properties: string[]): Function {
  return function (target: Function): void {
    ApSubjectAsyncInit<T>(target, properties);
    ApUnsubscribeOnDestroy<T>(target, properties);
  };
}
