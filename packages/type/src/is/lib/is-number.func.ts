// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { AnyNumber } from '../../type/any-number.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `number` type, or the type obtained from its object class equal to `'number'` or an `object` type
 * and an instance of `Number`. The value is also checked by the `Number.isFinite()` method to determine whether it's finite and is
 * validated by the `Number.isNaN()` method.
 * @param value The value of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload` with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a finite number of a `number` type or an instance of
 * `Number`.
 * @angularpackage
 */
export const isNumber = <
  Type extends AnyNumber = number,
  Payload extends object = object
>(
  value: any,
  callback: ResultCallback<any, Payload> = resultCallback,
  payload?: Payload
): value is Type =>
  callback(
    (typeof value === 'number' ||
      ((typeOf(value) === 'number' || typeof value === 'object') &&
        value instanceof Number)) &&
      !Number.isNaN(value.valueOf()) &&
      Number.isFinite(value.valueOf()),
    value,
    payload
  );
