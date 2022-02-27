// Function.
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { Defined } from '../../type/defined.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is not an `undefined` type and is **not** equal to `undefined`.
 * @param value The value of generic type variable `Type` by default of type captured from itself, to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload` with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is defined, not `undefined`.
 * @angularpackage
 */
export const isDefined = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, Payload> = resultCallback,
  payload?: Payload
): value is Defined<Type> =>
  callback(typeof value !== 'undefined' && value !== undefined, value, payload);
