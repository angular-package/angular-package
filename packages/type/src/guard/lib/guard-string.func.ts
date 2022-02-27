// Function.
import { isString } from '../../is/lib/is-string.func';
// Type.
import { AnyString } from '../../type/any-string.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be `string` of any type.
 * @param value The value of a generic type variable `Type` constrained by the `AnyString`, by default of the type captured from itself to
 * guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `string` type or an instance of `String`.
 */
export const guardString = <
  Type extends AnyString,
  Payload extends object = object
>(
  value: Type,
  callback?: ResultCallback<Type, Payload>,
  payload?: Payload
): value is Type => isString(value, callback, payload);
