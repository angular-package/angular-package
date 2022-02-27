// Function.
import { isClass } from '../../is/lib/is-class.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a `class` of generic type variable `Class`.
 * @param value The `class` of a generic type variable `Class` to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `class` of a generic type variable `Class`.
 */
export const guardClass = <
  Class extends Function,
  Payload extends object = object
>(
  value: Class,
  callback?: ResultCallback<Class, Payload>,
  payload?: Payload
): value is Class => isClass(value, callback, payload);
