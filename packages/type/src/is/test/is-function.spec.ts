// Function.
import { isFunction } from '../lib/is-function.func';
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
  tests.is.function.describe,
  tests.is.function.it
);
/**
 * Tests.
 */
testing.describe(isFunction.name, () => {
  testing
    // TRUE
    .it('is DEFINED', () => expect(isFunction).toBeDefined())
    .it(`'function' | Function`, () => expect(isFunction(TESTING_FUNCTION)).toBeTrue())

    // FALSE.
    .it(`'boolean' | Boolean`, () => {
      expect(isFunction(TESTING_FALSE)).toBeFalse();
      expect(isFunction(TESTING_TRUE)).toBeFalse();
      expect(isFunction(TESTING_FALSE_INSTANCE)).toBeFalse();
      expect(isFunction(TESTING_TRUE_INSTANCE)).toBeFalse();
      expect(isFunction(Boolean(false))).toBeFalse();
      expect(isFunction(Boolean(true))).toBeFalse();
      isFunction(TESTING_TRUE, (result: boolean) => {
        expect(result).toBeFalse();
        return result;
      });
    })
    .it(`'bigint'`, () => {
      expect(isFunction(TESTING_BIGINT)).toBeFalse();
      expect(isFunction(TESTING_BIGINT)).toBeFalse();
    })
    .it(`TESTING_CLASS`, () => expect(isFunction(TESTING_CLASS)).toBeFalse())
    .it(`TestingClass`, () => expect(isFunction(TestingClass)).toBeFalse())
    .it(`null | TESTING_NULL`, () => {
      expect(isFunction(null)).toBeFalse();
      expect(isFunction(TESTING_NULL)).toBeFalse();
    })
    .it(`'number' | Number`, () => {
      expect(isFunction(TESTING_NUMBER)).toBeFalse();
      expect(isFunction(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse();
      expect(isFunction(TESTING_NUMBER_INSTANCE)).toBeFalse();
    })
    .it(`'object' | Object`, () => expect(isFunction(TESTING_OBJECT)).toBeFalse())
    .it(`'string' | String`, () => {
      expect(isFunction(TESTING_STRING)).toBeFalse();
      expect(isFunction(TESTING_STRING_CONSTRUCTOR)).toBeFalse();
      expect(isFunction(TESTING_STRING_INSTANCE)).toBeFalse();
    })
    .it(`'symbol'`, () => {
      expect(isFunction(TESTING_SYMBOL_NUMBER)).toBeFalse();
      expect(isFunction(TESTING_SYMBOL_STRING)).toBeFalse();
    })
    .it(`'undefined'`, () => expect(isFunction(TESTING_UNDEFINED)).toBeFalse());
});
