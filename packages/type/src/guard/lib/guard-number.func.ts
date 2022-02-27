// Function.
import { isNumber } from '../../is/lib/is-number.func';
// Type.
import { AnyNumber } from '../../type/any-number.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a `number` of any type.
 * @param value The value of generic type variable `Type` to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `number` type or an instance of `Number`.
 */
export const guardNumber = <
  Type extends AnyNumber,
  Payload extends object = object
>(
  value: Type,
  callback?: ResultCallback<Type, Payload>,
  payload?: Payload
): value is Type => isNumber(value, callback, payload);
