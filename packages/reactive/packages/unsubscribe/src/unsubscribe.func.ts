
import { ApUnsubscribeOnDestroy } from './unsubscribe-ondestroy.func';
import { PropertiesInterface } from '../../subject/src/properties.interface';

/**
 * @export
 * @template T
 * @param {PropertiesInterface} [properties]
 * @returns {Function}
 */
export function ApUnsubscribe<T>(properties?: PropertiesInterface<T>): Function {
  return function (target: Function): void {
    ApUnsubscribeOnDestroy<T>(target, properties);
  };
}
