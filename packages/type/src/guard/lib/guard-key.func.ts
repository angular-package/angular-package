// Function.
import { isKey } from '../../is/lib/is-key.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be one of `string`, `number`, or `symbol` type.
 * @param value The value of generic type variable `Key` to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `string`, `number`, or `symbol`.
 */
export const guardKey = <Key extends PropertyKey, Payload extends object>(
  value: Key,
  callback?: ResultCallback<Key, Payload>,
  payload?: Payload
): value is Key => isKey(value, callback, payload);
