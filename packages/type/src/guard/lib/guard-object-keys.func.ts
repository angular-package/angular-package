// Function.
import { isObjectKeys } from '../../is/lib/is-object-keys.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be an `object` of a generic type variable `Obj` with its specified `keys`.
 * @param value An object of a generic type variable `Obj`, by default of the type captured from itself that contains the given `keys` to
 * guard.
 * @param keys An `Array` of property keys to check whether the given `value` contains.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is an `object` with its specified `keys`.
 */
export const guardObjectKeys = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  keys: Key[],
  callback?: ResultCallback<Obj, { keys: typeof keys } & Payload>,
  payload?: Payload
): value is Obj => isObjectKeys(value, keys, callback, payload as any);
