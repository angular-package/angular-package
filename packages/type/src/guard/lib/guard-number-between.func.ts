// Function.
import { isNumberBetween } from '../../is/lib/is-number-between.func';
// Type.
import { AnyNumber } from '../../type/any-number.type';
import { NumberBetween } from '../../type/number-between.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be `number` type or instance of `Number` between the specified range.
 * @param value The value of a generic type variable `Type` to guard.
 * @param min The **minimum** range of generic type variable `Min` for a given `value`.
 * @param max The **maximum** range of generic type variable `Max` for a given `value`.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `number` type or an instance of `Number` between the
 * specified range.
 */
export const guardNumberBetween = <
  Type extends AnyNumber,
  Min extends number,
  Max extends number,
  Payload extends object = object
>(
  value: Type,
  min: Min,
  max: Max,
  callback?: ResultCallback<Type, { min: Min; max: Max } & Payload>,
  payload?: Payload
): value is NumberBetween<Min, Max, Type> =>
  isNumberBetween(value, min, max, callback, payload);
