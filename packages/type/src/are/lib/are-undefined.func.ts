// Function.
import { areDeterminer } from './are-determiner.func';
import { isUndefined } from '../../is/lib/is-undefined.func';
/**
 * Checks whether the values are `undefined` by using `every()`, `forEach()` and `some()` methods of the returned object.
 * @param values A rest parameter of `any` type to check its elements against `undefined`.
 * @returns The return value is an `object` with `every()`, `some()` and `forEach()` as a methods of checking supplied values.
 * @angularpackage
 */
export const areUndefined = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isUndefined, ...values);
