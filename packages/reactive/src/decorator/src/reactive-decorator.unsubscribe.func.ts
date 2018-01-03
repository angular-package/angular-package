
import { ObservablesInterface } from './reactive-decorator.interface';
import { unsubscribeOnDestroy } from './unsubscribe-on-destroy.func';

/**
 * @export
 * @template T
 * @param {ObservablesInterface} [observables]
 * @returns {Function}
 */
export function Unsubscribe<T>(observables?: ObservablesInterface): Function {
  return function (target: any) {
    unsubscribeOnDestroy(target, observables);
  }
};
