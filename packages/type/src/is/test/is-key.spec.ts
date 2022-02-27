// Function.
import { isKey } from '../lib/is-key.func';
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
  tests.is.key.describe,
  tests.is.key.it
);
/**
 * Tests.
 */
testing.describe(isKey.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isKey).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isKey('test', (result: boolean) => {
            expect(result).toBeTrue();
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => { })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`TESTING_FUNCTION`, () => expect(isKey(TESTING_FUNCTION)).toBeFalse())
            .it(`TestingClass`, () => expect(isKey(TestingClass)).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`TESTING_CLASS`, () => expect(isKey(TESTING_CLASS)).toBeFalse())
            .it(`TESTING_OBJECT`, () => expect(isKey(TESTING_OBJECT)).toBeFalse())
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isKey(TESTING_OBJECT)).toBeFalse());
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isKey(TESTING_BIGINT)).toBeFalse()))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isKey(TESTING_TRUE)).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isKey(TESTING_FALSE)).toBeFalse());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isKey(TESTING_NULL)).toBeFalse())
            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () => expect(isKey(TESTING_NUMBER)).toBeTrue())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isKey(TESTING_NUMBER_CONSTRUCTOR)).toBeTrue());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => expect(isKey(TESTING_STRING)).toBeTrue())
                .it(`String(${TESTING_STRING})`, () => expect(isKey(TESTING_STRING_CONSTRUCTOR)).toBeTrue());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isKey(TESTING_SYMBOL_NUMBER)).toBeTrue())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isKey(TESTING_SYMBOL_STRING)).toBeTrue());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isKey(TESTING_UNDEFINED)).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isKey(TESTING_BIGINT)).toBeFalse()))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isKey(TESTING_TRUE_INSTANCE)).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isKey(TESTING_FALSE_INSTANCE)).toBeFalse());
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isKey(TESTING_NUMBER_INSTANCE)).toBeFalse()))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${TESTING_STRING})`, () => expect(isKey(TESTING_STRING_INSTANCE)).toBeFalse()));
            });
        });
    });
});
