// Function.
import { areBigInt } from '../lib/are-bigint.func';
import { areBoolean } from '../lib/are-boolean.func';
import { areDate } from './are-date.func';
import { areDefined } from './are-defined.func';
import { areFalse } from './are-false.func';
import { areNull } from '../lib/are-null.func';
import { areNumber } from '../lib/are-number.func';
import { areRegExp } from './are-regexp.func';
import { areString } from '../lib/are-string.func';
import { areSymbol } from '../lib/are-symbol.func';
import { areTrue } from './are-true.func';
import { areUndefined } from '../lib/are-undefined.func';
// Interface.
import { Are } from '../interface/are.interface';
/**
 * The `object` consists of `are` prefixed functions.
 */
export const are: Are = Object.freeze({
  bigint: areBigInt, // From the `5.0.0` version.
  boolean: areBoolean, // From the `5.0.0` version.
  date: areDate, // From the `5.0.0` version.
  defined: areDefined, // From the `5.0.0` version.
  false: areFalse, // From the `5.0.0` version.
  null: areNull, // From the `5.0.0` version.
  number: areNumber, // From the `5.0.0` version.
  regexp: areRegExp, // From the `5.0.0` version.
  string: areString,
  symbol: areSymbol, // From the `5.0.0` version.
  true: areTrue, // From the `5.0.0` version.
  undefined: areUndefined // From the `5.0.0` version.
});
