// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is of the type obtained from its object class equal to `'string'` or an `object` type, and an instance of `String`.
 * @param value The value of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload` with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an instance of `String`.
 * @angularpackage
 */
export const isStringObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, Payload> = resultCallback,
  payload?: Payload
): value is String =>
  callback(
    (typeOf(value) === 'string' || typeof value === 'object') &&
    value instanceof String,
    value,
    payload
  );
