// Function.
import { isBigInt } from '../lib/is-big-int.func';
// Testing.
import {
  // Main.
  Testing,

  // Constants.
  TESTING_BIGINT,
  TESTING_CLASS,
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_FUNCTION,
  TESTING_NULL,
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
  TESTING_OBJECT,
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  TESTING_UNDEFINED,

  // Class.
  TestingClass,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.is.bigint.describe,
  tests.is.bigint.it
);
/**
 * Tests.
 */
testing.describe(isBigInt.name, () =>
  testing
    .toBeInstanceOfFunction(isBigInt)
    .it(`defined`, () => expect(isBigInt).toBeDefined())
    .it(`bigint`, () => (
      expect(isBigInt(TESTING_BIGINT)).toBeTrue(),
      isBigInt(TESTING_BIGINT, (result: boolean) => {
        expect(result).toBeTrue();
        return result;
      }),
      expect(isBigInt(1n)).toBeTrue()
    ))
    .it(`boolean | Boolean`, () => (
      expect(isBigInt(TESTING_FALSE)).toBeFalse(),
      expect(isBigInt(TESTING_TRUE)).toBeFalse(),
      expect(isBigInt(TESTING_FALSE_INSTANCE)).toBeFalse(),
      expect(isBigInt(TESTING_TRUE_INSTANCE)).toBeFalse(),
      isBigInt(TESTING_FALSE, (result: boolean) => {
        expect(result).toBeFalse();
        return result;
      })
    ))
    .it(`TestingClass | TESTING_CLASS`, () => (
      expect(isBigInt(TestingClass)).toBeFalse(),
      expect(isBigInt(TESTING_CLASS)).toBeFalse()
    ))
    .it(`function | Function`, () => expect(isBigInt(TESTING_FUNCTION)).toBeFalse())
    .it(`null | TESTING_NULL`, () => (
      expect(isBigInt(null)).toBeFalse(),
      expect(isBigInt(TESTING_NULL)).toBeFalse()
    ))
    .it(`'number' | Number`, () => (
      expect(isBigInt(TESTING_NUMBER)).toBeFalse(),
      expect(isBigInt(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse(),
      expect(isBigInt(TESTING_NUMBER_INSTANCE)).toBeFalse()
    ))
    .it(`'object' | Object`, () => expect(isBigInt(TESTING_OBJECT)).toBeFalse())
    .it(`'string' | String`, () => (
      expect(isBigInt(TESTING_STRING)).toBeFalse(),
      expect(isBigInt(TESTING_STRING_CONSTRUCTOR)).toBeFalse(),
      expect(isBigInt(TESTING_STRING_INSTANCE)).toBeFalse()
    ))
    .it(`'symbol'`, () => (
      expect(isBigInt(TESTING_SYMBOL_NUMBER)).toBeFalse(),
      expect(isBigInt(TESTING_SYMBOL_STRING)).toBeFalse()
    ))
    .it(`'undefined'`, () => expect(isBigInt(TESTING_UNDEFINED)).toBeFalse())
);
