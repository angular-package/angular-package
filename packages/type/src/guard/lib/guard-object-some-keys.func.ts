// Function.
import { isObjectSomeKeys } from '../../is/lib/is-object-some-keys.func';
// Type.
import { ResultCallback } from '../../type/result-callback.type';
/**
 * Guards the value to be an `object` of a generic type variable `Obj` with some of its `keys` or some groups of its `keys`.
 * @param value An object of a generic type variable `Obj`, by default of the type captured from itself that contains some or some of the
 * groups of the given `keys`, to guard.
 * @param keys An `Array` of property names or a two-dimensional array of property names to check if the given `value` contains some of
 * them.
 * @param callback An optional `ResultCallback` function to handle the result before returns.
 * @param payload Optional `object` of generic type variable `Payload` is assigned to the `payload` of the provided `callback` function.
 * @returns The return value is a `boolean` indicating whether the provided `value` is an `object` with some or some groups of the given
 * `keys`.
 * @angularpackage
 */
export const guardObjectSomeKeys = <
  Obj extends object,
  Payload extends object = object
>(
  value: Obj,
  keys: (keyof Obj | Array<keyof Obj>)[],
  callback?: ResultCallback<Obj, { keys: typeof keys } & Payload>,
  payload?: Payload
): value is Obj => isObjectSomeKeys(value, keys, callback, payload as any);
