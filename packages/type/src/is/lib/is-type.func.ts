// Function.
import { isBigInt } from './is-big-int.func';
import { isBooleanType } from './is-boolean-type.func';
import { isFunction } from './is-function.func';
import { isInstance } from './is-instance.func';
import { isNotNull } from '../not/lib/is-not-null.func';
import { isNull } from './is-null.func';
import { isNumberType } from './is-number-type.func';
import { isObject } from './is-object.func';
import { isStringType } from './is-string-type.func';
import { isSymbol } from './is-symbol.func';
import { isUndefined } from './is-undefined.func';
import { resultCallback } from '../../lib/result-callback.func';
// Type.
import { Primitives } from '../../type/primitives.type';
import { ResultCallback } from '../../type/result-callback.type';
import { Type } from '../../type/type.type';
import { Types } from '../../type/types.type';
/**
 * Checks if any value is the type from a given `type` of the generic type `Types`.
 * @param value The value of any type to check against the type of given `type`.
 * @param type A value of the generic type `Types` indicates against which type the provided `value` is checked.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of generic type variable `Payload` with the provided `type` and optional properties from the provided
 * `payload`, to handle them before the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is a type from a given `type`.
 * @angularpackage
 */
export const isType = <T extends Type, Payload extends object = object>(
  value: any,
  type: Types<T>,
  callback: ResultCallback<any, Payload> = resultCallback,
  payload?: Payload
): value is T =>
  isStringType(type)
    ? {
        bigint: isBigInt,
        boolean: isBooleanType,
        function: isFunction,
        number: isNumberType,
        object: isObject,
        null: isNull,
        string: isStringType,
        symbol: isSymbol,
        undefined: isUndefined,
      }[type as Primitives](value, callback, payload)
    : isNotNull(type)
    ? isInstance(value, type, callback, payload)
    : false;
