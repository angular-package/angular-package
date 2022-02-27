// Function.
import { areDeterminer } from './are-determiner.func';
import { isRegExp } from '../../is/lib/is-regexp.func';
/**
 * Checks whether the values are regular expressions of `RegExp` by using `every()`, `forEach()` and `some()` methods of the returned
 * object.
 * @param values A rest parameter of `any` type to check its elements against the regular expression of `RegExp`.
 * @returns The return value is an `object` with `every()`, `some()` and `forEach()` as a methods of checking supplied `values`.
 * @angularpackage
 */
export const areRegExp = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isRegExp, ...values);
