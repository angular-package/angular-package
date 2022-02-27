// Function.
import { isDate } from '../../is/lib/is-date.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a date.
 * @param value The value of `Date` type to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the value is a date.
 */
export const guardDate = <Payload extends object>(
  value: Date,
  callback?: ResultCallback<Date, Payload>,
  payload?: Payload
): value is Date => isDate(value, callback, payload);
