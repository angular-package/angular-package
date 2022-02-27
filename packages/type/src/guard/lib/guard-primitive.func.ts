// Function.
import { isPrimitive } from '../../is/lib/is-primitive.func';
// Type.
import { Primitive } from '../../type/primitive.type';
import { Primitives } from '../../type/primitives.type';
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be the `Primitive` type or the given `type` of the `Primitives`.
 * @param value The value of a generic type variable `Type` constrained by the `Primitive`, by default of the type captured from itself to
 * guard.
 * @param type An optional specific type of `Primitives` to check the given value.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is the `Primitive` type or the given `type`.
 */
export const guardPrimitive = <
  Type extends Primitive,
  Payload extends object = object
>(
  value: Type,
  type?: Primitives,
  callback?: ResultCallback<Type, Payload>,
  payload?: Payload
): value is Type => isPrimitive(value, type, callback, payload);
