// Function.
import { isNotBoolean } from '../lib/is-not-boolean.func';
import { isNotDefined } from '../lib/is-not-defined.func';
import { isNotFunction } from '../lib/is-not-function.func';
import { isNotNull } from '../lib/is-not-null.func';
import { isNotNumber } from '../lib/is-not-number.func';
import { isNotString } from '../lib/is-not-string.func';
import { isNotUndefined } from '../lib/is-not-undefined.func';
/**
 * A shape of an object with all prefixed with `isNot` functions.
 */
export interface IsNot {
  // array: IsArray;
  // bigInt: IsBigInt;
  boolean: typeof isNotBoolean;
  defined: typeof isNotDefined;
  function: typeof isNotFunction;
  null: typeof isNotNull;
  number: typeof isNotNumber;
  // object: IsObject;
  // primitive: IsPrimitive;
  string: typeof isNotString;
  // symbol: IsSymbol;
  // type: IsType;
  undefined: typeof isNotUndefined;
}
