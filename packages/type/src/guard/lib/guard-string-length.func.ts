// Function.
import { isStringLength } from '../../is';
// Type.
import { AnyString } from '../../type/any-string.type';
import { ResultCallback } from '../../type/result-callback.type';
import { StringOfLength } from '../../type/string-of-length.type';
/**
 * Guards the value to be `string` type or `String` instance of a specified length.
 * @param value The value of a generic type variable `Type` constrained by `AnyString`, by default of the type captured from itself to
 * guard.
 * @param length The **length** of generic type variable `Length` of a given `value`.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `string` type or an instance of `String` of a specified
 * `length`.
 * @angularpackage
 */
export const guardStringLength = <
  Type extends AnyString,
  Length extends number,
  Payload extends object = object
>(
  value: Type,
  length: Length,
  callback?: ResultCallback<Type, { length: Length } & Payload>,
  payload?: Payload
): value is StringOfLength<Length, Length, Type> =>
  isStringLength(value, length, callback, payload);

