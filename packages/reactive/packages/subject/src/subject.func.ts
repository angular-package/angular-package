// internal
import { PropertiesInterface } from './properties.interface';
import { ApSubjectInit } from './subject-init.func';
import { ApUnsubscribeOnDestroy } from '../../unsubscribe';

/**
 * ApSubject
 * @export
 * @template T
 * @param {string[]} properties
 * @returns {Function}
 */
export function ApSubject<T>(...properties: string[]): Function {
  return function (target: Function): void {
    ApSubjectInit<T>(target, properties);
    ApUnsubscribeOnDestroy<T>(target, properties);
  };
}
