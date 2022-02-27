// Function.
import { areDeterminer } from './are-determiner.func';
import { isBoolean } from '../../is/lib/is-boolean.func';
/**
 * Checks whether the values are a `boolean` type or an instance of `Boolean` by using `every()`, `forEach()` and `some()` methods of the
 * returned object.
 * @param values A rest parameter of `any` type to check its elements against a `boolean` type or an instance of `Boolean`.
 * @returns The return value is an `object` of `every()`, `some()` and `forEach()` as methods of checking supplied `values`.
 * @angularpackage
 */
export const areBoolean = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isBoolean, ...values);
