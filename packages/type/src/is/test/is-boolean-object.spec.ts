// Function.
import { isBooleanObject } from '../lib/is-boolean-object.func';
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
  tests.is.booleanObject.describe,
  tests.is.booleanObject.it
);
/**
 * Tests.
 */
testing.describe(isBooleanObject.name, () => {
  testing
    // TRUE
    .it('is DEFINED', () => expect(isBooleanObject).toBeDefined())
    .it(`Boolean`, () => {
      expect(isBooleanObject(TESTING_FALSE_INSTANCE)).toBeTrue();
      expect(isBooleanObject(TESTING_TRUE_INSTANCE)).toBeTrue();
    })

    // FALSE
    .it(`boolean`, () => {
      expect(isBooleanObject(TESTING_FALSE)).toBeFalse();
      expect(isBooleanObject(TESTING_TRUE)).toBeFalse();
      expect(isBooleanObject(Boolean(false))).toBeFalse();
      expect(isBooleanObject(Boolean(true))).toBeFalse();
    })
    .it(`'bigint'`, () => {
      expect(isBooleanObject(TESTING_BIGINT)).toBeFalse();
      expect(isBooleanObject(TESTING_BIGINT)).toBeFalse();
    })
    .it(`TestingClass | TESTING_CLASS`, () => {
      expect(isBooleanObject(TestingClass)).toBeFalse();
      expect(isBooleanObject(TESTING_CLASS)).toBeFalse();
    })
    .it(`'function' | Function`, () => expect(isBooleanObject(TESTING_FUNCTION)).toBeFalse())
    .it(`null | TESTING_NULL`, () => {
      expect(isBooleanObject(null)).toBeFalse();
      expect(isBooleanObject(TESTING_NULL)).toBeFalse();
    })
    .it(`'number' | Number`, () => {
      expect(isBooleanObject(TESTING_NUMBER)).toBeFalse();
      expect(isBooleanObject(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse();
      expect(isBooleanObject(TESTING_NUMBER_INSTANCE)).toBeFalse();
    })
    .it(`'object' | Object`, () => expect(isBooleanObject(TESTING_OBJECT)).toBeFalse())
    .it(`'string' | String`, () => {
      expect(isBooleanObject(TESTING_STRING)).toBeFalse();
      expect(isBooleanObject(TESTING_STRING_CONSTRUCTOR)).toBeFalse();
      expect(isBooleanObject(TESTING_STRING_INSTANCE)).toBeFalse();
    })
    .it(`'symbol'`, () => {
      expect(isBooleanObject(TESTING_SYMBOL_NUMBER)).toBeFalse();
      expect(isBooleanObject(TESTING_SYMBOL_STRING)).toBeFalse();
    })
    .it(`'undefined'`, () => expect(isBooleanObject(TESTING_UNDEFINED)).toBeFalse());
});
