// Function.
import { isArray } from './is-array.func';
import { isObject } from './is-object.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is an `object`(by using the `isObject()`) with some of its keys or some groups of its keys of the `PropertyKey` type.
 * @param value The value of any type to check against an `object` that contains some of its keys or some groups of its keys from
 * a given `keys`.
 * @param keys An `Array` of property names or a two-dimensional `array` of property names to check if the given `value` contains some of
 * them or some groups of them.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload`, with the provided `keys` and optional properties from the provided
 * `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an `object` with some of its keys or some groups of
 * its keys from a given `keys`.
 * @angularpackage
 */
export const isObjectSomeKeys = <
  Obj extends object,
  Payload extends object = object
>(
  value: any,
  keys: (PropertyKey | PropertyKey[])[],
  callback: ResultCallback<
    any,
    { keys: typeof keys } & Payload
  > = resultCallback,
  payload?: Payload
): value is Obj =>
  callback(
    isObject(value) && isArray(keys)
      ? keys.some((someKey) =>
          isArray(someKey)
            ? someKey.every((everyKey) =>
                ({}.hasOwnProperty.call(value, everyKey))
              )
            : {}.hasOwnProperty.call(value, someKey) === true
        )
      : false,
    value,
    { ...payload, keys } as any
  );
