// Function.
import { areDeterminer } from './are-determiner.func';
import { isSymbol } from '../../is/lib/is-symbol.func';
/**
 * Checks whether the values are a `symbol` type by using `every()`, `forEach()` and `some()` methods of the returned object.
 * @param values A rest parameter of `any` type to check its elements against a `symbol` type.
 * @returns The return value is an `object` with `every()`, `some()` and `forEach()` as a methods of checking supplied values.
 * @angularpackage
 */
export const areSymbol = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isSymbol, ...values);
