// Function.
import { resultCallback } from '../../lib/result-callback.func';
import { isStringObject } from './is-string-object.func';
import { isStringType } from './is-string-type.func';
// Type.
import { AnyString } from '../../type/any-string.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `string` type by using the `isStringType()` function or an instance of `String` by using the `isStringObject()`
 * function.
 * @param value The value of any type to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload` with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `string` type or an instance of `String`.
 * @angularpackage
 */
export const isString = <
  Type extends AnyString = string,
  Payload extends object = object
>(
  value: any,
  callback: ResultCallback<any, Payload> = resultCallback,
  payload?: Payload
): value is Type =>
  callback(isStringType(value) || isStringObject(value), value, payload);
