// Function.
import { areDeterminer } from './are-determiner.func';
import { isDate } from '../../is/lib/is-date.func';
/**
 * Checks whether the values are `Date` by using `every()`, `forEach()` and `some()` methods of the returned object.
 * @param values A rest parameter of `any` type to check its elements against `Date`.
 * @returns The return value is an `object` of `every()`, `some()` and `forEach()` as methods of checking supplied `values`.
 * @angularpackage
 */
export const areDate = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isDate, ...values);
