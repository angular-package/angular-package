// Function.
import { isFunction } from '../../is/lib/is-function.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a `Function`.
 * @param value The `function` of a generic type variable `Type` to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `Function`.
 */
export const guardFunction = <Type extends Function, Payload extends object>(
  value: Type,
  callback?: ResultCallback<Type, Payload>,
  payload?: Payload
): value is Type => isFunction(value, callback, payload);
