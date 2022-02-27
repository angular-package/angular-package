// Function.
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is an `object`(by using the `isObject()`) with its key of the `PropertyKey` type.
 * @param value The value of any type to check against an `object` that contains a key from a given `key`.
 * @param key A property key to check if a given `value` contains.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload`, with the provided `key` and optional properties from the provided
 * `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an `object` with its `key`.
 * @angularpackage
 */
export const isObjectKey = <
  Obj extends object,
  Payload extends object = object
>(
  value: any,
  key: PropertyKey,
  callback: ResultCallback<any, { key: typeof key } & Payload> = resultCallback,
  payload?: Payload
): value is Obj =>
  callback(
    isObject(value) ? {}.hasOwnProperty.call(value, key) : false,
    value,
    { ...payload, key } as any
  );
