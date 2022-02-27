// Function.
import { isNumber } from './is-number.func';
import { isNumberType } from './is-number-type.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { AnyNumber } from '../../type/any-number.type';
import { NumberBetween } from '../../type/number-between.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `number` type or an instance of `Number`(by using `isNumber()`) between a specified range.
 * @param value The value of any type to check.
 * @param min The **minimum** range of generic type variable `Min` for a given `value`.
 * @param max The **maximum** range of generic type variable `Max` for a given `value`.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload`, with the minimum and maximum `range` and optional properties from the
 * provided `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a finite number of a `number` type or an instance
 * of `Number` between a specified range.
 * @angularpackage
 */
export const isNumberBetween = <
  Type extends AnyNumber = number,
  Min extends number = number,
  Max extends number = number,
  Payload extends object = object
>(
  value: any,
  min: Min,
  max: Max,
  callback: ResultCallback<
    any,
    { min: Min; max: Max } & Payload
  > = resultCallback,
  payload?: Payload
): value is NumberBetween<Min, Max, Type> =>
  callback(
    isNumber(value)
      ? (isNumberType(min) ? value.valueOf() >= min : false) &&
          (isNumberType(max) ? value.valueOf() <= max : false)
      : false,
    value,
    { ...payload, min, max } as any
  );
