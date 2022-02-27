// Function.
import { isRegExp } from '../lib/is-regexp.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
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
  TESTING_REGEXP,
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
  tests.is.regexp.describe,
  tests.is.regexp.it
);
/**
 * Tests.
 */
testing.describe(isRegExp.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isRegExp).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing.
        it('callback', () => {
          isRegExp(TESTING_REGEXP, (result: boolean) => {
            expect(result).toBeTrue();
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => {})
        // ... Date.
        .describe(`date`, () => {
          testing
            .it(`TESTING_DATE`, () => expect(isRegExp(TESTING_DATE)).toBeFalse())
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`TESTING_FUNCTION`, () => expect(isRegExp(TESTING_FUNCTION)).toBeFalse())
            .it(`TestingClass`, () => expect(isRegExp(TestingClass)).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`TESTING_CLASS`, () => expect(isRegExp(TESTING_CLASS)).toBeFalse())
            .it(`TESTING_OBJECT`, () => expect(isRegExp(TESTING_OBJECT)).toBeFalse())
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isRegExp(TESTING_OBJECT)).toBeFalse())
            .it(`TESTING_REGEXP ${TESTING_REGEXP}`, () => expect(isRegExp(TESTING_REGEXP)).toBeTrue());
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isRegExp(TESTING_BIGINT)).toBeFalse()))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isRegExp(TESTING_TRUE)).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isRegExp(TESTING_FALSE)).toBeFalse());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isRegExp(TESTING_NULL)).toBeFalse())
            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () => expect(isRegExp(TESTING_NUMBER)).toBeFalse())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isRegExp(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => expect(isRegExp(TESTING_STRING)).toBeFalse())
                .it(`String(${TESTING_STRING})`, () => expect(isRegExp(TESTING_STRING_CONSTRUCTOR)).toBeFalse());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isRegExp(TESTING_SYMBOL_NUMBER)).toBeFalse())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isRegExp(TESTING_SYMBOL_STRING)).toBeFalse());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isRegExp(TESTING_UNDEFINED)).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isRegExp(TESTING_BIGINT)).toBeFalse()))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isRegExp(TESTING_TRUE_INSTANCE)).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isRegExp(TESTING_FALSE_INSTANCE)).toBeFalse());
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isRegExp(TESTING_NUMBER_INSTANCE)).toBeFalse()))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${TESTING_STRING})`, () => expect(isRegExp(TESTING_STRING_INSTANCE)).toBeFalse()));
            });
        });
    });
});
