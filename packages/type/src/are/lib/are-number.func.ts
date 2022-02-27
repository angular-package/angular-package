// Function.
import { areDeterminer } from './are-determiner.func';
import { isNumber } from '../../is/lib/is-number.func';
/**
 * Checks whether the values are a `number` type or an instance of `Number` by using `every()`, `forEach()` and `some()` methods of the
 * returned object.
 * @param values A rest parameter of `any` type to check its elements against a `number` type or an instance of `Number`.
 * @returns The return value is an `object` with `every()`, `some()` and `forEach()` as a methods of checking supplied values.
 * @angularpackage
 */
export const areNumber = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isNumber, ...values);
