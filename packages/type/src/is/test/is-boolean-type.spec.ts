// Function.
import { isBooleanType } from '../lib/is-boolean-type.func';
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
  tests.is.booleanType.describe,
  tests.is.booleanType.it
);
/**
 * Tests.
 */
testing.describe(isBooleanType.name, () => {
  // TRUE
  testing
    .it('is DEFINED', () => expect(isBooleanType).toBeDefined())
    .it(`boolean`, () => {
      expect(isBooleanType(TESTING_FALSE)).toBeTrue();
      expect(isBooleanType(TESTING_TRUE)).toBeTrue();
      expect(isBooleanType(Boolean(false))).toBeTrue();
      expect(isBooleanType(Boolean(true))).toBeTrue();
    })

    // FALSE
    .it(`Boolean`, () => {
      expect(isBooleanType(TESTING_FALSE_INSTANCE)).toBeFalse();
      expect(isBooleanType(TESTING_TRUE_INSTANCE)).toBeFalse();
    })
    .it(`'bigint'`, () => {
      expect(isBooleanType(TESTING_BIGINT)).toBeFalse();
      expect(isBooleanType(TESTING_BIGINT)).toBeFalse();
    })
    .it(`TestingClass | TESTING_CLASS`, () => {
      expect(isBooleanType(TestingClass)).toBeFalse();
      expect(isBooleanType(TESTING_CLASS)).toBeFalse();
    })
    .it(`'function' | Function`, () => expect(isBooleanType(TESTING_FUNCTION)).toBeFalse())
    .it(`null | TESTING_NULL`, () => {
      expect(isBooleanType(null)).toBeFalse();
      expect(isBooleanType(TESTING_NULL)).toBeFalse();
    })
    .it(`'number' | Number`, () => {
      expect(isBooleanType(TESTING_NUMBER)).toBeFalse();
      expect(isBooleanType(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse();
      expect(isBooleanType(TESTING_NUMBER_INSTANCE)).toBeFalse();
    })
    .it(`'object' | Object`, () => expect(isBooleanType(TESTING_OBJECT)).toBeFalse())
    .it(`'string' | String`, () => {
      expect(isBooleanType(TESTING_STRING)).toBeFalse();
      expect(isBooleanType(TESTING_STRING_CONSTRUCTOR)).toBeFalse();
      expect(isBooleanType(TESTING_STRING_INSTANCE)).toBeFalse();
    })
    .it(`'symbol'`, () => {
      expect(isBooleanType(TESTING_SYMBOL_NUMBER)).toBeFalse();
      expect(isBooleanType(TESTING_SYMBOL_STRING)).toBeFalse();
    })
    .it(`'undefined'`, () => expect(isBooleanType(TESTING_UNDEFINED)).toBeFalse());
});
