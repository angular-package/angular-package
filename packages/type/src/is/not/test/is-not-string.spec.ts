// Function.
import { isNotString } from '../lib/is-not-string.func';
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
  tests.is.not.string.describe,
  tests.is.not.string.it
);
/**
 * Tests.
 */
testing.describe(isNotString.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(isNotString).toBeDefined())

  // Checks ...
  .describe(`checks`, () => {
    testing
    .it('callback', () => {
      isNotString(TESTING_STRING, (result: boolean) => {
        expect(result).toBe(TESTING_FALSE);
        return result;
      });
    })

    // ... arrays.
    .describe(`array`, () => {})
    // ... function.
    .describe(`function`, () => {
      testing
      .it(`FUNCTION`, () => expect(isNotString(TESTING_FUNCTION)).toBe(TESTING_TRUE))
      .it(`Class`, () => expect(isNotString(TestingClass)).toBe(TESTING_TRUE));
    })
    // ... objects.
    .describe('object', () => {
      testing
      .it(`CLASS`, () => expect(isNotString(TESTING_CLASS)).toBe(TESTING_TRUE))
      .it(`OBJECT_ONE`, () => expect(isNotString(TESTING_OBJECT)).toBe(TESTING_TRUE));
    })
    // ... primitives.
    .describe(`primitive`, () => {
      testing
      // bigint
      .describe(`bigint`, () => it(`${TESTING_BIGINT}`, () => expect(isNotString(TESTING_BIGINT)).toBe(TESTING_TRUE)))

      // boolean
      .describe(`boolean`, () => {
        testing
        .it(`${TESTING_TRUE}`, () => expect(isNotString(TESTING_TRUE)).toBe(TESTING_TRUE))
        .it(`${TESTING_FALSE}`, () => expect(isNotString(TESTING_FALSE)).toBe(TESTING_TRUE))
        .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isNotString(TESTING_TRUE_INSTANCE)).toBe(TESTING_TRUE))
        .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isNotString(TESTING_FALSE_INSTANCE)).toBe(TESTING_TRUE));
      })

      // null
      .it(`${TESTING_NULL}`, () => expect(isNotString(TESTING_NULL)).toBe(TESTING_TRUE))

      // number
      .describe(`number`, () => {
        testing
        .it(`${TESTING_NUMBER}`, () => expect(isNotString(TESTING_NUMBER)).toBe(TESTING_TRUE))
        .it(`Number(${TESTING_NUMBER})`, () => expect(isNotString(TESTING_NUMBER_CONSTRUCTOR)).toBe(TESTING_TRUE))
        .it(`new Number(${TESTING_NUMBER})`, () => expect(isNotString(TESTING_NUMBER_INSTANCE)).toBe(TESTING_TRUE));
      })
      // string
      .describe(`string`, () => {
        testing
        .it(`${TESTING_STRING}`, () => expect(isNotString(TESTING_STRING)).toBe(TESTING_FALSE))
        .it(`String(${TESTING_STRING})`, () => expect(isNotString(TESTING_STRING_CONSTRUCTOR)).toBe(TESTING_FALSE))
        .it(`new String(${TESTING_STRING})`, () => expect(isNotString(TESTING_STRING_INSTANCE)).toBe(TESTING_FALSE));
      })
      // symbol
      .describe(`symbol`, () => {
        testing
        .it(`Symbol(${TESTING_NUMBER})`, () => expect(isNotString(TESTING_SYMBOL_NUMBER)).toBe(TESTING_TRUE))
        .it(`Symbol(${TESTING_STRING})`, () => expect(isNotString(TESTING_SYMBOL_STRING)).toBe(TESTING_TRUE));
      })
      // undefined
      .it(`${TESTING_UNDEFINED}`, () => expect(isNotString(TESTING_UNDEFINED)).toBe(TESTING_TRUE));
    });
  });
});
