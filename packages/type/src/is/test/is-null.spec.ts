// Function.
import { isNull } from '../lib/is-null.func';
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
  tests.is.null.describe,
  tests.is.null.it
);
/**
 * Tests.
 */
testing.describe(isNull.name, () => {
  testing
    // TRUE
    .it('is DEFINED', () => expect(isNull).toBeDefined())
    .it(`null | TESTING_NULL`, () => {
      expect(isNull(null)).toBeTrue();
      expect(isNull(TESTING_NULL)).toBeTrue();
      isNull(TESTING_NULL, (result: boolean) => {
        expect(result).toBeTrue();
        return result;
      });
    })
    // FALSE
    .it(`'bigint'`, () => {
      expect(isNull(TESTING_BIGINT)).toBeFalse();
      expect(isNull(TESTING_BIGINT)).toBeFalse();
    })
    .it(`'boolean' | Boolean`, () => {
      expect(isNull(TESTING_FALSE)).toBeFalse();
      expect(isNull(TESTING_TRUE)).toBeFalse();
      expect(isNull(TESTING_FALSE_INSTANCE)).toBeFalse();
      expect(isNull(TESTING_TRUE_INSTANCE)).toBeFalse();
      expect(isNull(Boolean(false))).toBeFalse();
      expect(isNull(Boolean(true))).toBeFalse();
    })
    .it(`TestingClass | TESTING_CLASS`, () => {
      expect(isNull(TestingClass)).toBeFalse();
      expect(isNull(TESTING_CLASS)).toBeFalse();
    })
    .it(`'function' | Function`, () => expect(isNull(TESTING_FUNCTION)).toBeFalse())
    .it(`'number' | Number`, () => {
      expect(isNull(TESTING_NUMBER)).toBeFalse();
      expect(isNull(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse();
      expect(isNull(TESTING_NUMBER_INSTANCE)).toBeFalse();
    })
    .it(`'object' | Object`, () => expect(isNull(TESTING_OBJECT)).toBeFalse())
    .it(`'string' | String`, () => {
      expect(isNull(TESTING_STRING)).toBeFalse();
      expect(isNull(TESTING_STRING_CONSTRUCTOR)).toBeFalse();
      expect(isNull(TESTING_STRING_INSTANCE)).toBeFalse();
    })
    .it(`'symbol'`, () => {
      expect(isNull(TESTING_SYMBOL_NUMBER)).toBeFalse();
      expect(isNull(TESTING_SYMBOL_STRING)).toBeFalse();
    })
    .it(`'undefined'`, () => {
      expect(isNull(TESTING_UNDEFINED)).toBeFalse();
    });
});
