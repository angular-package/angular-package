// Function.
import { isSymbol } from '../../is/lib/is-symbol.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a `symbol`.
 * @param value A `symbol` type value to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is a `symbol`.
 */
export const guardSymbol = <Payload extends object>(
  value: symbol,
  callback?: ResultCallback<symbol, Payload>,
  payload?: Payload
): value is symbol => isSymbol(value, callback, payload);
