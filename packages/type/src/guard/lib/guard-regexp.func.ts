// Function.
import { isRegExp } from '../../is/lib/is-regexp.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a `RegExp`.
 * @param value Regular expression of generic type variable `Type` constrained by `RegExp` to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return `value` is a `boolean` indicating whether the `value` is a `RegExp`.
 */
export const guardRegExp = <Type extends RegExp, Payload extends object>(
  value: Type,
  callback?: ResultCallback<Type, Payload>,
  payload?: Payload
): value is Type => isRegExp(value, callback, payload);
