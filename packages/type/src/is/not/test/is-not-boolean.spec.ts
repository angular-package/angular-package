// Function.
import { isNotBoolean } from '../lib/is-not-boolean.func';
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
import { tests } from '../../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.is.not.boolean.describe,
  tests.is.not.boolean.it
);
/**
 * Tests.
 */
testing.describe(isNotBoolean.name, () => {
  testing
    // TRUE
    .it('is DEFINED', () => expect(isNotBoolean).toBeDefined())
    // FALSE
    .it(`'bigint'`, () => expect(isNotBoolean(TESTING_BIGINT)).toBeTrue())
    .it(`Class | CLASS`, () => {
      expect(isNotBoolean(TestingClass)).toBeTrue();
      expect(isNotBoolean(TESTING_CLASS)).toBeTrue();
    })
    .it(`'function' | Function`, () => expect(isNotBoolean(TESTING_FUNCTION)).toBeTrue())
    .it(`null | NULL`, () => {
      expect(isNotBoolean(null)).toBeTrue();
      expect(isNotBoolean(TESTING_NULL)).toBeTrue();
    })
    .it(`'number' | Number`, () => {
      expect(isNotBoolean(TESTING_NUMBER)).toBeTrue();
      expect(isNotBoolean(TESTING_NUMBER_CONSTRUCTOR)).toBeTrue();
      expect(isNotBoolean(TESTING_NUMBER_INSTANCE)).toBeTrue();
    })
    .it(`'object' | Object`, () => expect(isNotBoolean(TESTING_OBJECT)).toBeTrue())
    .it(`'string' | String`, () => {
      expect(isNotBoolean(TESTING_STRING)).toBeTrue();
      expect(isNotBoolean(TESTING_STRING_CONSTRUCTOR)).toBeTrue();
      expect(isNotBoolean(TESTING_STRING_INSTANCE)).toBeTrue();
    })
    .it(`'symbol'`, () => {
      expect(isNotBoolean(TESTING_SYMBOL_NUMBER)).toBeTrue();
      expect(isNotBoolean(TESTING_SYMBOL_STRING)).toBeTrue();
    })
    .it(`'undefined'`, () => expect(isNotBoolean(TESTING_UNDEFINED)).toBeTrue())

    // FALSE
    .it(`'boolean' | Boolean`, () => {
      expect(isNotBoolean(TESTING_FALSE)).toBeFalse();
      expect(isNotBoolean(TESTING_TRUE)).toBeFalse();
      expect(isNotBoolean(TESTING_FALSE_INSTANCE)).toBeFalse();
      expect(isNotBoolean(TESTING_TRUE_INSTANCE)).toBeFalse();
      expect(isNotBoolean(Boolean(false))).toBeFalse();
      expect(isNotBoolean(Boolean(true))).toBeFalse();
    });
});
