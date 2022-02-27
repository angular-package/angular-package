// Function.
import { isFalse } from '../../is/lib/is-false.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the provided value to be `false`.
 * @param value The value of `false` type to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `boolean` type or an instance of `Boolean` equal to `false`.
 */
export const guardFalse = <Payload extends object>(
  value: false,
  callback?: ResultCallback<false, Payload>,
  payload?: Payload
): value is false => isFalse(value, callback, payload);
