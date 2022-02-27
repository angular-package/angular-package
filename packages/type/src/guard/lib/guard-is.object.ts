// Function.
import { guardArray } from './guard-array.func';
import { guardBigInt } from './guard-big-int.func';
import { guardBoolean } from './guard-boolean.func';
import { guardClass } from './guard-class.func';
import { guardDate } from './guard-date.func';
import { guardDefined } from './guard-defined.func';
import { guardFalse } from './guard-false.func';
import { guardFunction } from './guard-function.func';
import { guardInstance } from './guard-instance.func';
import { guardKey } from './guard-key.func';
import { guardNull } from './guard-null.func';
import { guardNumber } from './guard-number.func';
import { guardNumberBetween } from './guard-number-between.func';
import { guardObject } from './guard-object.func';
import { guardObjectKey } from './guard-object-key.func';
import { guardObjectKeyIn } from './guard-object-key-in.func';
import { guardObjectKeys } from './guard-object-keys.func';
import { guardObjectKeysIn } from './guard-object-keys-in.func';
import { guardObjectSomeKeys } from './guard-object-some-keys.func';
import { guardPrimitive } from './guard-primitive.func';
import { guardRegExp } from './guard-regexp.func';
import { guardString } from './guard-string.func';
import { guardStringIncludes } from './guard-string-includes.func';
import { guardStringIncludesSome } from './guard-string-includes-some.func';
import { guardStringLength } from './guard-string-length.func';
import { guardStringLengthBetween } from './guard-string-length-between.func';
import { guardSymbol } from './guard-symbol.func';
import { guardTrue } from './guard-true.func';
import { guardType } from './guard-type.func';
import { guardUndefined } from './guard-undefined.func';
// Interface.
import { GuardIs } from '../interface/guard-is.interface';
// `guardIs`.
export const guardIs: GuardIs = Object.freeze({
  array: guardArray,
  bigint: guardBigInt,
  boolean: guardBoolean,
  class: guardClass,
  date: guardDate,
  defined: guardDefined,
  false: guardFalse,
  function: guardFunction,
  instance: guardInstance,
  key: guardKey,
  null: guardNull,
  number: guardNumber,
  numberBetween: guardNumberBetween,
  object: guardObject,
  objectKey: guardObjectKey,
  objectKeyIn: guardObjectKeyIn,
  objectKeys: guardObjectKeys,
  objectKeysIn: guardObjectKeysIn,
  objectSomeKeys: guardObjectSomeKeys,
  primitive: guardPrimitive,
  regexp: guardRegExp,
  string: guardString,
  stringIncludes: guardStringIncludes,
  stringIncludesSome: guardStringIncludesSome,
  stringLength: guardStringLength,
  stringLengthBetween: guardStringLengthBetween,
  symbol: guardSymbol,
  true: guardTrue,
  type: guardType,
  undefined: guardUndefined
});
