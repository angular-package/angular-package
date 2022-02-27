// Function.
import { IsNot } from '../interface/is-not.interface';
import { isNotBoolean } from './is-not-boolean.func';
import { isNotDefined } from './is-not-defined.func';
import { isNotFunction } from './is-not-function.func';
import { isNotNull } from './is-not-null.func';
import { isNotNumber } from './is-not-number.func';
import { isNotString } from './is-not-string.func';
import { isNotUndefined } from './is-not-undefined.func';
/**
 * An `object` of `isNot` prefixed functions.
 */
export const isNot: IsNot = Object.freeze({
  // TODO array: isArray,
  // TODO bigInt: isBigInt,
  boolean: isNotBoolean,
  defined: isNotDefined,
  function: isNotFunction,
  null: isNotNull,
  number: isNotNumber,
  // TODO object: isObject,
  // TODO primitive: isPrimitive,
  string: isNotString,
  // TODO symbol: isSymbol,
  // TODO type: isType,
  undefined: isNotUndefined
});
