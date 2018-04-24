import { ApUnsubscribeOnDestroy } from './unsubscribe-ondestroy.func';
import { PropertiesInterface } from '../../subject/src/properties.interface';

/**
 * @export
 * @template T
 * @param {...string[]} properties
 * @returns {Function}
 */
export function ApUnsubscribe<T>(...properties: string[]): Function {
  return function (target: Function): void {
    ApUnsubscribeOnDestroy<T>(target, properties);
  };
}
