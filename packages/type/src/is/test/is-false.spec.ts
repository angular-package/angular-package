// Function.
import { isFalse } from '../lib/is-false.func';
// Testing.
import {
  // Main.
  Testing,

  // Constants.
  TESTING_BIGINT,
  TESTING_CLASS,
  TESTING_DATE,
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
  tests.is.false.describe,
  tests.is.false.it
);
/**
 * Tests.
 */
testing.describe(isFalse.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isFalse).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isFalse(TESTING_FALSE, (result: boolean) => {
            expect(result).toBeTrue();
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => { })
        // ... Date.
        .describe(`date`, () => {
          testing
            .it(`TESTING_DATE`, () => expect(isFalse(TESTING_DATE)).toBeFalse())
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`TESTING_FUNCTION`, () => expect(isFalse(TESTING_FUNCTION)).toBeFalse())
            .it(`TestingClass`, () => expect(isFalse(TestingClass)).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`TESTING_CLASS`, () => expect(isFalse(TESTING_CLASS)).toBeFalse())
            .it(`TESTING_OBJECT`, () => expect(isFalse(TESTING_OBJECT)).toBeFalse())
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isFalse(TESTING_OBJECT)).toBeFalse());
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isFalse(TESTING_BIGINT)).toBeFalse()))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isFalse(TESTING_TRUE)).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isFalse(TESTING_FALSE)).toBeTrue());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isFalse(TESTING_NULL)).toBeFalse())
            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () => expect(isFalse(TESTING_NUMBER)).toBeFalse())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isFalse(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => expect(isFalse(TESTING_STRING)).toBeFalse())
                .it(`String(${TESTING_STRING})`, () => expect(isFalse(TESTING_STRING_CONSTRUCTOR)).toBeFalse());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isFalse(TESTING_SYMBOL_NUMBER)).toBeFalse())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isFalse(TESTING_SYMBOL_STRING)).toBeFalse());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isFalse(TESTING_UNDEFINED)).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => it(`${TESTING_BIGINT}`, () => expect(isFalse(TESTING_BIGINT)).toBeFalse()))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isFalse(TESTING_TRUE_INSTANCE)).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isFalse(TESTING_FALSE_INSTANCE)).toBeTrue());
                })
                // Number
                .describe(`Number`, () => it(`new Number(${TESTING_NUMBER})`, () => expect(isFalse(TESTING_NUMBER_INSTANCE)).toBeFalse()))
                // String
                .describe(`String`, () => it(`new String(${TESTING_STRING})`, () => expect(isFalse(TESTING_STRING_INSTANCE)).toBeFalse()));
            });
        });
    });
});
