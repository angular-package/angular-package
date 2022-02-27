// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { typeOf } from '../../lib/type-of.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is of the type obtained from its object class equal to `'number'`, or an `object` type and an instance of `Number`
 * and **finite** by using the `Number.isFinite()` method and is **valid** by using the `Number.isNaN()` method.
 * @param value The value of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload` with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an instance of `Number`.
 * @angularpackage
 */
export const isNumberObject = <Payload extends object>(
  value: any,
  callback: ResultCallback<any, Payload> = resultCallback,
  payload?: Payload
): value is Number =>
  callback(
    (typeOf(value) === 'number' || typeof value === 'object') &&
      value instanceof Number &&
      !Number.isNaN(value.valueOf()) &&
      Number.isFinite(value.valueOf()),
    value,
    payload
  );
