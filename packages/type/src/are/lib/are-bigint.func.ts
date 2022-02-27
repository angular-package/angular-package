// Function.
import { areDeterminer } from './are-determiner.func';
import { isBigInt } from '../../is/lib/is-big-int.func';
/**
 * Checks whether the values are a `bigint` type by using `every()`, `forEach()` and `some()` methods of the returned object.
 * @param values A rest parameter of `any` type to check its elements against a `bigint` type.
 * @returns The return value is an `object` of `every()`, `some()` and `forEach()` as methods of checking supplied `values`.
 * @angularpackage
 */
export const areBigInt = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isBigInt, ...values);
