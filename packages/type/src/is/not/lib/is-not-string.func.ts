// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { AnyString } from '../../../type/any-string.type';
import { Never } from '../../../type/never.type';
import { ResultCallback } from '../../../type/result-callback.type';
/**
 * Checks if the `value` is **not** the type obtained from its object class equal to `'string'`, **not** a `string` type and **not** an
 * instance of `String`.
 * @param value The `value` of a generic type variable `Type`, by default of the type captured from itself to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the generic type variable `Payload` with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is not a `string` and not an instance of `String`.
 * @angularpackage
 */
export const isNotString = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, Payload> = resultCallback,
  payload?: Payload
): value is Never<AnyString, Type> =>
  callback(
    typeOf(value) !== 'string' &&
      typeof value !== 'string' &&
      value instanceof String === false,
    value,
    payload
  );
