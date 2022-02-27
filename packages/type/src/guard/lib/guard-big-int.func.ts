// Function.
import { isBigInt } from '../../is/lib/is-big-int.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be a `bigint`.
 * @param value A `bigint` type value to guard.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return `value` is a `boolean` indicating whether the `value` is a `bigint`.
 */
export const guardBigInt = <
  BigInt extends bigint,
  Payload extends object = object
>(
  value: BigInt,
  callback?: ResultCallback<BigInt, Payload>,
  payload?: Payload
): value is BigInt => isBigInt(value, callback, payload);
