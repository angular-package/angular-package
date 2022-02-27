// Function.
import { isObjectKeysIn } from '../../is/lib/is-object-keys-in.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be an `object` of a generic type variable `Obj` with specified keys in it(or its prototype chain).
 * @param value An object of a generic type variable `Obj`, by default of the type captured from itself that contains(or its prototype
 * chain) the given `keys` to guard.
 * @param keys An `Array` of property keys to check whether the given `value` contains(or its prototype chain).
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the `value` is an `object` with specified `keys` in it(or its prototype
 * chain).
 */
export const guardObjectKeysIn = <
  Obj extends object,
  Key extends keyof Obj,
  Payload extends object = object
>(
  value: Obj,
  keys: Key[],
  callback?: ResultCallback<Obj, { keys: typeof keys } & Payload>,
  payload?: Payload
): value is Obj => isObjectKeysIn(value, keys, callback, payload as any);
