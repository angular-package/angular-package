// Function.
import { isDefined } from '../lib/is-defined.func';
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
  tests.is.defined.describe,
  tests.is.defined.it
);
/**
 * Tests.
 */
testing.describe(isDefined.name, () => {
  // TRUE
  testing
    .it('is DEFINED', () => expect(isDefined).toBeDefined())
    .it(`'boolean' | Boolean`, () => {
      expect(isDefined(TESTING_FALSE)).toBeTrue();
      expect(isDefined(TESTING_TRUE)).toBeTrue();
      expect(isDefined(TESTING_FALSE_INSTANCE)).toBeTrue();
      expect(isDefined(TESTING_TRUE_INSTANCE)).toBeTrue();
      expect(isDefined(Boolean(false))).toBeTrue();
      expect(isDefined(Boolean(true))).toBeTrue();
      isDefined(TESTING_FALSE, (result: boolean) => {
        expect(result).toBeTrue();
        return result;
      });
    })
    .it(`'bigint'`, () => expect(isDefined(TESTING_BIGINT)).toBeTrue())
    .it(`TestingClass | TESTING_CLASS`, () => {
      expect(isDefined(TestingClass)).toBeTrue();
      expect(isDefined(TESTING_CLASS)).toBeTrue();
    })
    .it(`'function' | Function`, () => expect(isDefined(TESTING_FUNCTION)).toBeTrue())
    .it(`null | TESTING_NULL`, () => {
      expect(isDefined(null)).toBeTrue();
      expect(isDefined(TESTING_NULL)).toBeTrue();
    })
    .it(`'number' | Number`, () => {
      expect(isDefined(TESTING_NUMBER)).toBeTrue();
      expect(isDefined(TESTING_NUMBER_CONSTRUCTOR)).toBeTrue();
      expect(isDefined(TESTING_NUMBER_INSTANCE)).toBeTrue();
    })
    .it(`'object' | Object`, () => expect(isDefined(TESTING_OBJECT)).toBeTrue())
    .it(`'string' | String`, () => {
      expect(isDefined(TESTING_STRING)).toBeTrue();
      expect(isDefined(TESTING_STRING_CONSTRUCTOR)).toBeTrue();
      expect(isDefined(TESTING_STRING_INSTANCE)).toBeTrue();
    })
    .it(`'symbol'`, () => {
      expect(isDefined(TESTING_SYMBOL_NUMBER)).toBeTrue();
      expect(isDefined(TESTING_SYMBOL_STRING)).toBeTrue();
    })

    // FALSE
    .it(`'undefined'`, () => {
      expect(isDefined(TESTING_UNDEFINED)).toBeFalse();
      isDefined(TESTING_UNDEFINED, (result, value, payload) => {
        expect(result).toBeFalse();
        if (payload) {
          expect(value).toBeUndefined();
        }
        return result;
      });
    });
});
