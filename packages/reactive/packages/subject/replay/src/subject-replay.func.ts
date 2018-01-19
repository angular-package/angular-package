// internal
import { ApSubjectReplayInit } from './subject-replay-init.func';
import { ApUnsubscribeOnDestroy } from '../../../unsubscribe/src/unsubscribe-ondestroy.func';
import { PropertiesInterface } from '../../src/properties.interface';

/**
 * @export
 * @template T
 * @param {number} buffer
 * @param {number} windowTime
 * @param {...string[]} properties
 * @returns {Function}
 */
export function ApSubjectReplay<T>(buffer: number, windowTime: number, ...properties: string[]): Function {
  return function (target: Function): void {
    ApSubjectReplayInit<T>(target, properties, buffer, windowTime);
    ApUnsubscribeOnDestroy<T>(target, properties);
  };
}
