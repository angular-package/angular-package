// Function.
import { isArray } from './is-array.func';
import { isString } from './is-string.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { AnyString } from '../../type/any-string.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Checks if any value is a `string` type or an instance of `String`(by using `isString()`) that includes all of the specified
 * words/sentences.
 * @param value The value of any type to check against the `string` that contains words/sentences from a given `includes`.
 * @param includes An `Array` of `string` as words/sentences to be case-sensitive searched for within the given `value`.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload`, with the `includes` and optional properties from the provided `payload`,
 * to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a `string` type or an instance of `String` that
 * includes all of the specified words/sentences.
 * @angularpackage
 */
export const isStringIncludes = <
  Type extends AnyString = string,
  Payload extends object = object
>(
  value: any,
  includes: string[],
  callback: ResultCallback<
    any,
    { includes: typeof includes } & Payload
  > = resultCallback,
  payload?: Payload
): value is Type =>
  callback(
    isString(value)
      ? isArray(includes)
        ? includes.every((include) => value.valueOf().includes(include))
        : false
      : false,
    value,
    { ...payload, includes } as any
  );
