// Function.
import { isNumberType } from './is-number-type.func';
import { isString } from './is-string.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { AnyString } from '../../type/any-string.type';
import { ResultCallback } from '../../type/result-callback.type';
import { StringOfLength } from '../../type/string-of-length.type';
/**
 * Checks if any value is a `string` type or an instance of `String` by using `isString()` of length within the specified range.
 * @param value The value of any type to check.
 * @param min The **minimum** length of generic type variable `Min` of a given `value`.
 * @param max The **maximum** length of generic type variable `Max` of a given `value`.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload`, with the minimum and maximum `length` and optional properties from the
 * provided `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `string` type or an instance of `String` of length
 * within the specified range.
 * @angularpackage
 */
export const isStringLengthBetween = <
  Type extends AnyString = string,
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
): value is StringOfLength<Min, Max, Type> =>
  callback(
    isString(value)
      ? (isNumberType(min) && min >= 0
          ? value.valueOf().length >= min
          : false) &&
          (isNumberType(max) && max >= 0
            ? value.valueOf().length <= max
            : false)
      : false,
    value,
    { ...payload, min, max } as any
  );
