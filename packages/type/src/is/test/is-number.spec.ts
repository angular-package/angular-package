// Function.
import { isNumber } from '../lib/is-number.func';
// Testing.
import {
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

  Testing,
  TestingClass,
} from '@angular-package/testing';
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.is.number.describe,
  tests.is.number.it
);
/**
 * Checks
 * ✓ typeof === 'number'
 * ✓ instanceof Number
 *
 * ✓ typeof === 'object'
 * ✓ instanceof Object
 */
testing.describe(isNumber.name, () => {
  testing
    // TRUE
    .it('is DEFINED', () => expect(isNumber).toBeDefined())
    .it(`'number' | Number`, () => {
      expect(isNumber(TESTING_NUMBER)).toBeTrue();
      expect(isNumber(TESTING_NUMBER_CONSTRUCTOR)).toBeTrue();
      expect(isNumber(TESTING_NUMBER_INSTANCE)).toBeTrue();
      isNumber(TESTING_NUMBER_INSTANCE, (result: boolean) => {
        expect(result).toBeTrue();
        return result;
      });
    })

    // FALSE
    .it(`'bigint'`, () => {
      expect(isNumber(TESTING_BIGINT)).toBeFalse();
      expect(isNumber(TESTING_BIGINT)).toBeFalse();
    })
    .it(`'boolean' | Boolean`, () => {
      expect(isNumber(TESTING_FALSE)).toBeFalse();
      expect(isNumber(TESTING_TRUE)).toBeFalse();
      expect(isNumber(TESTING_FALSE_INSTANCE)).toBeFalse();
      expect(isNumber(TESTING_TRUE_INSTANCE)).toBeFalse();
    })
    .it(`TestingClass | TESTING_CLASS`, () => {
      expect(isNumber(TestingClass)).toBeFalse();
      expect(isNumber(TESTING_CLASS)).toBeFalse();
    })
    .it(`'function' | Function`, () => expect(isNumber(TESTING_FUNCTION)).toBeFalse())
    .it(`null | TESTING_NULL`, () => {
      expect(isNumber(null)).toBeFalse();
      expect(isNumber(TESTING_NULL)).toBeFalse();
    })
    .it(`'object' | Object`, () => expect(isNumber(TESTING_OBJECT)).toBeFalse())
    .it(`'string' | String`, () => {
      expect(isNumber(TESTING_STRING)).toBeFalse();
      expect(isNumber(TESTING_STRING_CONSTRUCTOR)).toBeFalse();
      expect(isNumber(TESTING_STRING_INSTANCE)).toBeFalse();
    })
    .it(`'symbol'`, () => {
      expect(isNumber(TESTING_SYMBOL_NUMBER)).toBeFalse();
      expect(isNumber(TESTING_SYMBOL_STRING)).toBeFalse();
    })
    .it(`'undefined'`, () => expect(isNumber(TESTING_UNDEFINED)).toBeFalse());
});
