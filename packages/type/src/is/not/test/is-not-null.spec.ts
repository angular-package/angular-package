// Function.
import { isNotNull } from '../lib/is-not-null.func';
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
  tests.is.not.null.describe,
  tests.is.not.null.it
);
/**
 * Tests.
 */
testing.describe(isNotNull.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(isNotNull).toBeDefined())

  // Checks ...
  .describe(`checks`, () => {
    testing
    .it('callback', () => {
      isNotNull(TESTING_STRING, (result: boolean) => {
        expect(result).toBe(TESTING_TRUE);
        return result;
      });
    })

    // ... arrays.
    .describe(`array`, () => { })
    // ... function.
    .describe(`function`, () => {
      testing
      .it(`FUNCTION`, () => expect(isNotNull(TESTING_FUNCTION)).toBe(TESTING_TRUE))
      .it(`Class`, () => expect(isNotNull(TestingClass)).toBe(TESTING_TRUE));
    })
    // ... objects.
    .describe('object', () => {
      testing
      .it(`CLASS`, () => expect(isNotNull(TESTING_CLASS)).toBe(TESTING_TRUE))
      .it(`OBJECT_ONE`, () => expect(isNotNull(TESTING_OBJECT)).toBe(TESTING_TRUE));
    })
    // ... primitives.
    .describe(`primitive`, () => {
      testing
      // bigint
      .describe(`bigint`, () => {
        testing.it(`${TESTING_BIGINT}`, () => expect(isNotNull(TESTING_BIGINT)).toBe(TESTING_TRUE));
      })
      // boolean
      .describe(`boolean`, () => {
        testing
        .it(`${TESTING_TRUE}`, () => expect(isNotNull(TESTING_TRUE)).toBe(TESTING_TRUE))
        .it(`${TESTING_FALSE}`, () => expect(isNotNull(TESTING_FALSE)).toBe(TESTING_TRUE))
        .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isNotNull(TESTING_TRUE_INSTANCE)).toBe(TESTING_TRUE))
        .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isNotNull(TESTING_FALSE_INSTANCE)).toBe(TESTING_TRUE));
      })

      // null
      .it(`${TESTING_NULL}`, () => expect(isNotNull(TESTING_NULL)).toBe(TESTING_FALSE))

      // number
      .describe(`number`, () => {
        testing
        .it(`${TESTING_NUMBER}`, () => expect(isNotNull(TESTING_NUMBER)).toBe(TESTING_TRUE))
        .it(`Number(${TESTING_NUMBER})`, () => expect(isNotNull(TESTING_NUMBER_CONSTRUCTOR)).toBe(TESTING_TRUE))
        .it(`new Number(${TESTING_NUMBER})`, () => expect(isNotNull(TESTING_NUMBER_INSTANCE)).toBe(TESTING_TRUE));
      })
      // string
      .describe(`string`, () => {
        testing
        .it(`${TESTING_STRING}`, () => expect(isNotNull(TESTING_STRING)).toBe(TESTING_TRUE))
        .it(`String(${TESTING_STRING})`, () => expect(isNotNull(TESTING_STRING_CONSTRUCTOR)).toBe(TESTING_TRUE))
        .it(`new String(${TESTING_STRING})`, () => expect(isNotNull(TESTING_STRING_INSTANCE)).toBe(TESTING_TRUE));
      })
      // symbol
      .describe(`symbol`, () => {
        testing
        .it(`Symbol(${TESTING_NUMBER})`, () => expect(isNotNull(TESTING_SYMBOL_NUMBER)).toBe(TESTING_TRUE))
        .it(`Symbol(${TESTING_STRING})`, () => expect(isNotNull(TESTING_SYMBOL_STRING)).toBe(TESTING_TRUE));
      })
      // undefined
      .it(`${TESTING_UNDEFINED}`, () => expect(isNotNull(TESTING_UNDEFINED)).toBe(TESTING_TRUE));
    });
  });
});
