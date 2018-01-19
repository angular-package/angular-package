// internal
import { ApSubjectBehaviorInit } from './subject-behavior-init.func';
import { ApUnsubscribeOnDestroy } from '../../../unsubscribe/src/unsubscribe-ondestroy.func';
import { PropertiesInterface } from '../../src/properties.interface';

/**
 * ApSubjectBehavior
 * @export
 * @template T
 * @param {...properties: string[]} properties
 * @returns {Function}
 */
export function ApSubjectBehavior<T>(...properties: string[]): Function {
  return function (target: Function): void {
    ApSubjectBehaviorInit<T>(target, properties);
    ApUnsubscribeOnDestroy<T>(target, properties);
  };
}
