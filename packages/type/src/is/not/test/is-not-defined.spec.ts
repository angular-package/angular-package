// Function.
import { isNotDefined } from '../lib/is-not-defined.func';
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
  tests.is.not.defined.describe,
  tests.is.not.defined.it
);
/**
 * Tests.
 */
testing.describe(isNotDefined.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(isNotDefined).toBeDefined())

  // Checks ...
  .describe(`checks`, () => {
    testing
    .it('callback', () => {
      isNotDefined(TESTING_STRING, (result: boolean) => {
        expect(result).toBeFalse();
        return result;
      });
    })

    // ... arrays.
    .describe(`array`, () => {
    })
    // ... function.
    .describe(`function`, () => {
      testing
      .it(`FUNCTION`, () => expect(isNotDefined(TESTING_FUNCTION)).toBeFalse())
      .it(`Class`, () => expect(isNotDefined(TestingClass)).toBeFalse());
    })
    // ... objects.
    .describe('object', () => {
      testing
      .it(`CLASS`, () => expect(isNotDefined(TESTING_CLASS)).toBeFalse())
      .it(`OBJECT_ONE`, () => expect(isNotDefined(TESTING_OBJECT)).toBeFalse());
    })
    // ... primitives.
    .describe(`primitive`, () => {
      testing
      // bigint
      .describe(`bigint`, () => {
        testing.it(`${TESTING_BIGINT}`, () => expect(isNotDefined(TESTING_BIGINT)).toBeFalse());
      })

      // boolean
      .describe(`boolean`, () => {
        testing
        .it(`${TESTING_TRUE}`, () => expect(isNotDefined(TESTING_TRUE)).toBeFalse())
        .it(`${TESTING_FALSE}`, () => expect(isNotDefined(TESTING_FALSE)).toBeFalse())
        .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isNotDefined(TESTING_TRUE_INSTANCE)).toBeFalse())
        .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isNotDefined(TESTING_FALSE_INSTANCE)).toBeFalse());
      })

      // null
      .it(`${TESTING_NULL}`, () => expect(isNotDefined(TESTING_NULL)).toBeFalse())

      // number
      .describe(`number`, () => {
        testing
        .it(`${TESTING_NUMBER}`, () => expect(isNotDefined(TESTING_NUMBER)).toBeFalse())
        .it(`Number(${TESTING_NUMBER})`, () => expect(isNotDefined(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse())
        .it(`new Number(${TESTING_NUMBER})`, () => expect(isNotDefined(TESTING_NUMBER_INSTANCE)).toBeFalse());
      })
      // string
      .describe(`string`, () => {
        testing
        .it(`${TESTING_STRING}`, () => expect(isNotDefined(TESTING_STRING)).toBeFalse())
        .it(`String(${TESTING_STRING})`, () => expect(isNotDefined(TESTING_STRING_CONSTRUCTOR)).toBeFalse())
        .it(`new String(${TESTING_STRING})`, () => expect(isNotDefined(TESTING_STRING_INSTANCE)).toBeFalse());
      })
      // symbol
      .describe(`symbol`, () => {
        testing
        .it(`Symbol(${TESTING_NUMBER})`, () => expect(isNotDefined(TESTING_SYMBOL_NUMBER)).toBeFalse())
        .it(`Symbol(${TESTING_STRING})`, () => expect(isNotDefined(TESTING_SYMBOL_STRING)).toBeFalse());
      })
      // undefined
      .it(`${TESTING_UNDEFINED}`, () => expect(isNotDefined(TESTING_UNDEFINED)).toBeTrue());
    });
  });
});
