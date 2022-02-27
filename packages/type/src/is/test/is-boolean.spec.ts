// Function.
import { isBoolean } from '../lib/is-boolean.func';
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
  tests.is.boolean.describe,
  tests.is.boolean.it
);
/**
 * Tests.
 */
testing.describe(isBoolean.name, () =>
  testing
    // TRUE
    .it('is DEFINED', () => expect(isBoolean).toBeDefined())
    .it(`'boolean' | Boolean`, () => {
      expect(isBoolean(TESTING_FALSE)).toBeTrue();
      expect(isBoolean(TESTING_TRUE)).toBeTrue();
      expect(isBoolean(TESTING_FALSE_INSTANCE)).toBeTrue();
      expect(isBoolean(TESTING_TRUE_INSTANCE)).toBeTrue();
      expect(isBoolean(Boolean(false))).toBeTrue();
      expect(isBoolean(Boolean(true))).toBeTrue();
      isBoolean(TESTING_FALSE, (result: boolean) => {
        expect(result).toBeTrue();
        return result;
      });
    })

    // FALSE
    .it(`'bigint'`, () => {
      expect(isBoolean(TESTING_BIGINT)).toBeFalse();
      expect(isBoolean(TESTING_BIGINT)).toBeFalse();
      isBoolean(TESTING_BIGINT, (result: boolean) => {
        expect(result).toBeFalse();
        return result;
      });
    })
    .it(`TestingClass | TESTING_CLASS`, () => {
      expect(isBoolean(TestingClass)).toBeFalse();
      expect(isBoolean(TESTING_CLASS)).toBeFalse();
    })
    .it(`'function' | Function`, () => expect(isBoolean(TESTING_FUNCTION)).toBeFalse())
    .it(`null | TESTING_NULL`, () => {
      expect(isBoolean(null)).toBeFalse();
      expect(isBoolean(TESTING_NULL)).toBeFalse();
    })
    .it(`'number' | Number`, () => {
      expect(isBoolean(TESTING_NUMBER)).toBeFalse();
      expect(isBoolean(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse();
      expect(isBoolean(TESTING_NUMBER_INSTANCE)).toBeFalse();
    })
    .it(`'object' | Object`, () => expect(isBoolean(TESTING_OBJECT)).toBeFalse())
    .it(`'string' | String`, () => {
      expect(isBoolean(TESTING_STRING)).toBeFalse();
      expect(isBoolean(TESTING_STRING_CONSTRUCTOR)).toBeFalse();
      expect(isBoolean(TESTING_STRING_INSTANCE)).toBeFalse();
    })
    .it(`'symbol'`, () => {
      expect(isBoolean(TESTING_SYMBOL_NUMBER)).toBeFalse();
      expect(isBoolean(TESTING_SYMBOL_STRING)).toBeFalse();
    })
    .it(`'undefined'`, () => expect(isBoolean(TESTING_UNDEFINED)).toBeFalse())
);
