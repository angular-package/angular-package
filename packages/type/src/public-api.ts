/*
 * Public API Surface of type.
 */
/*
 * Main.
 */
export {
  // Object.
  type, // From the 5.0.0 version

  // Function.
  typeOf
} from './lib';

/*
 * Recognize.
 */
export {
  recognizeValue // From the 5.0.0 version
} from './recognize';

/*
 * Are.
 */
export {
  // Object.
  are,

  // Function.
  areBigInt,
  areBoolean,
  areDate,
  areDefined,
  areFalse,
  areNull,
  areNumber,
  areRegExp,
  areString,
  areSymbol,
  areTrue,
  areUndefined,
} from './are';

/*
 * Is.
 */
export {
  // Object.
  is,

  // Function.
  isArray,
  isBigInt,
  isBoolean,
  isBooleanObject,
  isBooleanType,
  isClass,
  isDate, // From the 4.2.0 version.
  isDefined,
  isFalse, // From the 4.2.0 version.
  isFunction,
  isInstance,
  isKey,
  isNull,
  isNumber,
  isNumberBetween, // From the 4.2.0 version.
  isNumberObject,
  isNumberType,
  isObject,
  isObjectKey,
  isObjectKeyIn,
  isObjectKeys,
  isObjectKeysIn, // From the 5.0.0 version
  isObjectSomeKeys, // From the 5.0.0 version
  isParam,
  isPrimitive,
  isRegExp, // From the 4.2.0 version.
  isString,
  isStringIncludes, // From the 5.0.0 version
  isStringIncludesSome, // From the 5.0.0 version
  isStringLength, // From the 4.2.0 version.
  isStringLengthBetween, // From the 5.0.0 version
  isStringObject,
  isStringType,
  isSymbol,
  isTrue, // From the 4.2.0 version.
  isType,
  isUndefined,
} from './is';

/*
 * isNot.
 */
export {
  // Object.
  isNot,

  // Function.
  isNotBoolean,
  isNotDefined,
  isNotFunction,
  isNotNull,
  isNotNumber,
  isNotString,
  isNotUndefined,
} from './is/not';

/*
 * Guard.
 */
export {
  // Object.
  guard,

  // Function.
  guardArray,
  guardBigInt,
  guardBoolean,
  guardClass,
  guardDate, // From the 5.0.0 version
  guardDefined,
  guardFalse, // From the 5.0.0 version
  guardFunction,
  guardInstance,
  guardKey,
  guardNull,
  guardNumber,
  guardNumberBetween, // From the 5.0.0 version
  guardObject,
  guardObjectKey,
  guardObjectKeyIn, // From the 5.0.0 version
  guardObjectKeys,
  guardObjectKeysIn, // From the 5.0.0 version
  guardObjectSomeKeys, // From the 5.0.0 version
  guardPrimitive,
  guardRegExp, // From the 5.0.0 version
  guardString,
  guardStringIncludes, // From the 5.0.0 version
  guardStringIncludesSome, // From the 5.0.0 version
  guardStringLength, // From the 5.0.0 version
  guardStringLengthBetween, // From the 5.0.0 version
  guardSymbol,
  guardTrue, // From the 5.0.0 version
  guardType,
  guardUndefined,
} from './guard';

/*
 * Interface.
 */
export {
  MinMax  // From the 5.0.0 version
} from './interface';

/*
 * Type.
 */
export { AnyBoolean } from './type/any-boolean.type';
export { AnyNumber } from './type/any-number.type';
export { AnyString } from './type/any-string.type';
export { CallbackPayload } from './type/callback-payload.type';
export { Constructor } from './type/constructor.type';
export { Defined } from './type/defined.type';
export { ForEachCallback } from './type/foreach-callback.type';
export { GenericObject } from './type/generic-object.type';
export { Never } from './type/never.type';
export { NotUndefined } from './type/not-undefined.type';
export { NumberBetween } from './type/number-between.type';
export { Primitive } from './type/primitive.type';
export { Primitives } from './type/primitives.type';
export { ResultCallback } from './type/result-callback.type';
export { StringOfLength } from './type/string-of-length.type';
export { Type } from './type/type.type';
export { Types } from './type/types.type';
export { Undefined } from './type/undefined.type';
