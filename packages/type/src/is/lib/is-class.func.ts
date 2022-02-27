// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `function` type or the type obtained from its object class equal to `'function'` and an instance of
 * `Function`. It also confirms it's a `class` by checking whether the function converted with `Function.prototype.toString()` to string
 * contains the word `class` at the beginning.
 * @param value The value of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload` with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `class`.
 * @angularpackage
 */
export const isClass = <Class = Function, Payload extends object = object>(
  value: any,
  callback: ResultCallback<any, Payload> = resultCallback,
  payload?: Payload
): value is Class =>
  callback(
    typeof value === 'function' ||
    (typeOf(value) === 'function' && value instanceof Function)
    ? /class/.test(Function.prototype.toString.call(value).slice(0, 5))
    : false,
    value,
    payload
  );
