// Function.
import { isUndefined } from '../../is/lib/is-undefined.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be `undefined`.
 * @param value The value of an `undefined` type to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is `undefined`.
 * @angularpackage
 */
export const guardUndefined = <Payload extends object>(
  value: undefined,
  callback?: ResultCallback<undefined, Payload>,
  payload?: Payload
): value is undefined => isUndefined(value, callback, payload);
