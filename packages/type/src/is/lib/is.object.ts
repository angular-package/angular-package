// Function.
import { isArray } from './is-array.func';
import { isBigInt } from './is-big-int.func';
import { isBoolean } from './is-boolean.func';
import { isBooleanObject } from './is-boolean-object.func';
import { isBooleanType } from './is-boolean-type.func';
import { isClass } from './is-class.func';
import { isDate } from './is-date.func';
import { isDefined } from './is-defined.func';
import { isFalse } from './is-false.func';
import { isFunction } from './is-function.func';
import { isInstance } from './is-instance.func';
import { isKey } from './is-key.func';
import { isNull } from './is-null.func';
import { isNumber } from './is-number.func';
import { isNumberBetween } from './is-number-between.func';
import { isNumberObject } from './is-number-object.func';
import { isNumberType } from './is-number-type.func';
import { isObject } from './is-object.func';
import { isObjectKey } from './is-object-key.func';
import { isObjectKeyIn } from './is-object-key-in.func';
import { isObjectKeys } from './is-object-keys.func';
import { isObjectKeysIn } from './is-object-keys-in.func';
import { isObjectSomeKeys } from './is-object-some-keys.func';
import { isPrimitive } from './is-primitive.func';
import { isRegExp } from './is-regexp.func';
import { isString } from './is-string.func';
import { isStringIncludes } from './is-string-includes.func';
import { isStringIncludesSome } from './is-string-includes-some.func';
import { isStringLength } from './is-string-length.func';
import { isStringLengthBetween } from './is-string-length-between.func';
import { isStringObject } from './is-string-object.func';
import { isStringType } from './is-string-type.func';
import { isSymbol } from './is-symbol.func';
import { isTrue } from './is-true.func';
import { isType } from './is-type.func';
import { isUndefined } from './is-undefined.func';
// Object.
import { isNot } from '../not/lib/is-not.object';
// Interface.
import { Is } from '../interface/is.interface';
/**
 * The object contains prefixed with is functions and prefixed with isNot functions in property `not`.
 */
export const is: Is = Object.freeze({
  array: isArray,
  bigint: isBigInt,
  boolean: isBoolean,
  booleanObject: isBooleanObject,
  booleanType: isBooleanType,
  class: isClass,
  date: isDate, // From the `4.2.0` version.
  defined: isDefined,
  false: isFalse, // From the `4.2.0` version.
  function: isFunction,
  instance: isInstance,
  key: isKey,
  not: isNot,
  null: isNull,
  number: isNumber,
  numberBetween: isNumberBetween, // From the `4.2.0` version.
  numberObject: isNumberObject,
  numberType: isNumberType,
  object: isObject,
  objectKey: isObjectKey,
  objectKeyIn: isObjectKeyIn,
  objectKeys: isObjectKeys,
  objectKeysIn: isObjectKeysIn, // From the `5.0.0` version.
  objectSomeKeys: isObjectSomeKeys, // From the `5.0.0` version.
  primitive: isPrimitive,
  regexp: isRegExp, // From the `4.2.0` version.
  string: isString,
  stringIncludes: isStringIncludes, // From the `5.0.0` version.
  stringIncludesSome: isStringIncludesSome, // From the `5.0.0` version.
  stringLength: isStringLength, // From the `4.2.0` version.
  stringLengthBetween: isStringLengthBetween, // From the 5.0.0 version.
  stringObject: isStringObject,
  stringType: isStringType,
  symbol: isSymbol,
  true: isTrue, // From the `4.2.0` version.
  type: isType,
  undefined: isUndefined
});
