// Function.
import { isArray } from '../../is/lib/is-array.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be an `array` of a generic type variable `Type`.
 * @param value An `array` of generic type variable `Type` to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return `value` is a `boolean` indicating whether the `value` is an `array` of a generic type variable `Type`.
 */
export const guardArray = <Type, Payload extends object = object>(
  value: Array<Type>,
  callback?: ResultCallback<Array<Type>, Payload>,
  payload?: Payload
): value is Array<Type> => isArray(value, callback, payload);
