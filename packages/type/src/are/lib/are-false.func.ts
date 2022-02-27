// Function.
import { areDeterminer } from './are-determiner.func';
import { isFalse } from '../../is/lib/is-false.func';
/**
 * Checks whether the values are a `boolean` type or an instance of `Boolean` equal to `false` by using `every()`, `forEach()` and `some()`
 * methods of the returned object.
 * @param values A rest parameter of `any` type to check its elements against a `boolean` type or an instance of `Boolean` equal to `false`.
 * @returns The return value is an `object` of `every()`, `some()` and `forEach()` as a methods of checking supplied `values`.
 * @angularpackage
 */
export const areFalse = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isFalse, ...values);
