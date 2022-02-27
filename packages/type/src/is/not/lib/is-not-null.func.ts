// Function.
import { resultCallback } from '../../../lib/result-callback.func';
import { typeOf } from '../../../lib/type-of.func';
// Type.
import { ResultCallback } from '../../../type/result-callback.type';
import { Never } from '../../../type/never.type';
/**
 * Checks if the `value` is **not** the type obtained from its object class equal to `'null'` and **not** equal to `null`.
 * @param value The `value` of a generic `Type`, by default of type captured from itself to check.
 * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of this
 * check, and `payload` of the generic type variable `Payload` with optional properties from the provided `payload`, to handle them before
 * the `result` return. By default, it uses `resultCallback()` function.
 * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is not `null`.
 * @angularpackage
 */
export const isNotNull = <Type, Payload extends object = object>(
  value: Type,
  callback: ResultCallback<Type, Payload> = resultCallback,
  payload?: Payload
): value is Never<null, Type> =>
  callback(typeOf(value) !== 'null' && value !== null, value, payload);
