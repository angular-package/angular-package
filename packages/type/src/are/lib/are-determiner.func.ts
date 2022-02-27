// Function,
import { isArray } from '../../is/lib/is-array.func';
import { isFunction } from '../../is/lib/is-function.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { ForEachCallback } from '../../type/foreach-callback.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * The function returns the object of `every()`, `forEach()` and `some()` methods to check given values with the test implemented
 * by the given `checkFn` function.
 * @var CommonPayload The `CommonPayload` generic type variable constrained by the object constrains the generic type variable
 * `Payload` of each returned method.
 * @param checkFn Function to test given `values`.
 * @param values A rest parameter of `any` type to check its elements against test given in the `checkFn` function.
 * @returns The return value is an `object` of `every()`, `some()` and `forEach()` as methods of checking supplied `values`.
 */
export const areDeterminer = <CommonPayload extends object>(
  checkFn: Function,
  ...values: any[]
) => {
  return {
    /**
     * Checks whether every of the provided `values` pass the test implemented by the given `checkFn` function.
     * @var Payload The `Payload` generic type variable constrained by the generic type variable `CommonPayload` indicates the type of
     * optional parameter `payload` of the supplied `callback` function and `payload` optional parameter of the `areDeterminer().every()`
     * method from which it captures its value.
     * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of
     * this check, and `payload` of generic type variable `Payload` with optional properties from the provided `payload`, to handle
     * them before the `result` return. By default, it uses `resultCallback()` function.
     * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback`
     * function.
     * @returns The return value is a `boolean` indicating whether the provided `values` passed the test implemented by the given `checkFn`
     * function.
     * @angularpackage
     */
    every: <Payload extends CommonPayload>(
      callback: ResultCallback<any, Payload> = resultCallback,
      payload?: Payload
    ): boolean =>
      callback(
        values.every((value) => checkFn(value)),
        values,
        payload
      ),

    /**
     * The `forEach()` method executes a provided callback function once for each element of the supplied `values`.
     * @param forEachCallback A callback `function` of `ForEachCallback` type with parameters, the `value` that has been checked, the
     * `result` of this check, `index` of each element, the provided `values` and `payload` of generic type variable `Payload` with
     * optional properties from the provided `payload`, to handle.
     * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback`
     * function.
     * @angularpackage
     */
    forEach: <Payload extends CommonPayload>(
      forEachCallback: ForEachCallback<any, Payload>,
      payload?: Payload
    ) => {
      isArray(values) &&
        isFunction(forEachCallback) &&
        values.forEach((value, index) =>
          forEachCallback(checkFn(value), value, index, values, payload)
        );
    },

    /**
     * Checks whether some of the provided `values` pass the test implemented by the given `checkFn`.
     * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of
     * this check, and `payload` of generic type variable `Payload` with optional properties from the provided `payload`, to handle
     * them before the `result` return. By default, it uses `resultCallback()` function.
     * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback`
     * function.
     * @returns The return value is a `boolean` indicating whether some of the provided `values` passed the test of the given `checkFn`.
     * @angularpackage
     */
    some: <Payload extends CommonPayload>(
      callback: ResultCallback<any, Payload> = resultCallback,
      payload?: Payload
    ): boolean =>
      callback(
        isArray(values) ? values.some((value) => checkFn(value)) : false,
        values,
        payload
      ),
  };
};
