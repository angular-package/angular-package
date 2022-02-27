// Function.
import { areDeterminer } from './are-determiner.func';
import { isNull } from '../../is/lib/is-null.func';
/**
 * Checks whether the values are `null` by using `every()`, `forEach()` and `some()` methods of the returned object.
 * @param values A rest parameter of `any` type to check its elements against `null`.
 * @returns The return value is an `object` with `every()`, `some()` and `forEach()` as a methods of checking supplied `values`.
 * @angularpackage
 */
export const areNull = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isNull, ...values);
