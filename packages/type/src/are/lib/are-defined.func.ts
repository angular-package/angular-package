// Function.
import { areDeterminer } from './are-determiner.func';
import { isDefined } from '../../is/lib/is-defined.func';
/**
 * Checks whether the values are defined by using `every()`, `forEach()` and `some()` methods of the returned object.
 * @param values A rest parameter of `any` type to check whether its elements are defined.
 * @returns The return value is an `object` of `every()`, `some()` and `forEach()` as a methods of checking supplied `values`.
 * @angularpackage
 */
export const areDefined = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isDefined, ...values);
