// Function.
import { isUndefined } from '../lib/is-undefined.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
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
  tests.is.undefined.describe,
  tests.is.undefined.it
);
/**
 * Tests.
 */
testing.describe(isUndefined.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isUndefined).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing.it('callback', () => {
        isUndefined(TESTING_STRING, (result: boolean) => {
          expect(result).toBeFalse();
          return result;
        });
      })

      // ... arrays.
      .describe(`array`, () => {})

      // ... function.
      .describe(`function`, () => {
        testing
          .it(`TESTING_FUNCTION`, () => expect(isUndefined(TESTING_FUNCTION)).toBeFalse())
          .it(`TestingClass`, () => expect(isUndefined(TestingClass)).toBeFalse());
      })

      // ... objects.
      .describe('object', () => {
        testing
          .it(`TESTING_CLASS`, () => expect(isUndefined(TESTING_CLASS)).toBeFalse())
          .it(`TESTING_OBJECT`, () => expect(isUndefined(TESTING_OBJECT)).toBeFalse());
      })

      // ... primitives.
      .describe(`primitive`, () => {
        testing
          // bigint
          .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isUndefined(TESTING_BIGINT)).toBeFalse()))
          // boolean
          .describe(`boolean`, () => {
            testing
              .it(`${TESTING_TRUE}`, () => expect(isUndefined(TESTING_TRUE)).toBeFalse())
              .it(`${TESTING_FALSE}`, () => expect(isUndefined(TESTING_FALSE)).toBeFalse());
          })
          // null
          .it(`${TESTING_NULL}`, () => expect(isUndefined(TESTING_NULL)).toBeFalse())
          // number
          .describe(`number`, () => {
            testing
              .it(`${TESTING_NUMBER}`, () => expect(isUndefined(TESTING_NUMBER)).toBeFalse())
              .it(`Number(${TESTING_NUMBER})`, () => expect(isUndefined(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse());
          })
          // string
          .describe(`string`, () => {
            testing
              .it(`${TESTING_STRING}`, () => expect(isUndefined(TESTING_STRING)).toBeFalse())
              .it(`String(${TESTING_STRING})`, () => expect(isUndefined(TESTING_STRING_CONSTRUCTOR)).toBeFalse());
          })
          // symbol
          .describe(`symbol`, () => {
            testing
              .it(`Symbol(${TESTING_NUMBER})`, () => expect(isUndefined(TESTING_SYMBOL_NUMBER)).toBeFalse())
              .it(`Symbol(${TESTING_STRING})`, () => expect(isUndefined(TESTING_SYMBOL_STRING)).toBeFalse());
          })
          // undefined
          .it(`${TESTING_UNDEFINED}`, () => expect(isUndefined(TESTING_UNDEFINED)).toBeTrue())
          // ... object.
          .describe(`object`, () => {
            testing
            // BigInt
            .describe(`BigInt`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isUndefined(TESTING_BIGINT)).toBeFalse()))
            // Boolean
            .describe(`Boolean`, () => {
              testing
                .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isUndefined(TESTING_TRUE_INSTANCE)).toBeFalse())
                .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isUndefined(TESTING_FALSE_INSTANCE)).toBeFalse());
            })
            // Number
            .describe(`Number`, () =>
              testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isUndefined(TESTING_NUMBER_INSTANCE)).toBeFalse()))
            // String
            .describe(`String`, () =>
              testing.it(`new String(${TESTING_STRING})`, () => expect(isUndefined(TESTING_STRING_INSTANCE)).toBeFalse()));
          });
      });
    });
});
