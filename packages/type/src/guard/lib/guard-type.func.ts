// Function.
import { isType } from '../../is/lib/is-type.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
import { Type } from '../../type/type.type';
import { Types } from '../../type/types.type';
/**
 * Guards the value to be a type of given `type`.
 * @param value The value of a generic type variable `T` constrained by the `Type`, by default of the type captured from itself, to guard.
 * @param type The value of `string` or `Constructor` type of the `Types` indicates against which type a given `value` is checked.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a type from a given `type`.
 * @angularpackage
 */
export const guardType = <T extends Type, Payload extends object = object>(
  value: T,
  type: Types<T>,
  callback?: ResultCallback<T, Payload>,
  payload?: Payload
): value is T => isType(value, type, callback, payload);
