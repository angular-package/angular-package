// Function.
import { isNumberObject } from '../lib/is-number-object.func';
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
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.is.numberObject.describe,
  tests.is.numberObject.it
);
/**
 * Checks
 * ✓ typeof === 'object' && instanceof Number === true && instanceof Object === true
 */
testing.describe(isNumberObject.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isNumberObject).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isNumberObject(TESTING_NUMBER_INSTANCE, (result: boolean) => {
            expect(result).toBeTrue();
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => { })
        // ... function.
        .describe(`function`, () => testing
          .it(`TESTING_FUNCTION`, () => expect(isNumberObject(TESTING_FUNCTION)).toBeFalse())
          .it(`TestingClass`, () => expect(isNumberObject(TestingClass)).toBeFalse())
        )
        // ... objects.
        .describe('object', () => testing
          .it(`TESTING_CLASS`, () => expect(isNumberObject(TESTING_CLASS)).toBeFalse())
          .it(`TESTING_OBJECT`, () => expect(isNumberObject(TESTING_OBJECT)).toBeFalse())
          .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isNumberObject(TESTING_OBJECT)).toBeFalse())
        )
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isNumberObject(TESTING_BIGINT)).toBeFalse()))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isNumberObject(TESTING_TRUE)).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isNumberObject(TESTING_FALSE)).toBeFalse());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isNumberObject(TESTING_NULL)).toBeFalse())
            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () => expect(isNumberObject(TESTING_NUMBER)).toBeFalse())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isNumberObject(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => expect(isNumberObject(TESTING_STRING)).toBeFalse())
                .it(`String(${TESTING_STRING})`, () => expect(isNumberObject(TESTING_STRING_CONSTRUCTOR)).toBeFalse());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isNumberObject(TESTING_SYMBOL_NUMBER)).toBeFalse())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isNumberObject(TESTING_SYMBOL_STRING)).toBeFalse());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isNumberObject(TESTING_UNDEFINED)).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isNumberObject(TESTING_BIGINT)).toBeFalse()))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isNumberObject(TESTING_TRUE_INSTANCE)).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isNumberObject(TESTING_FALSE_INSTANCE)).toBeFalse());
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isNumberObject(TESTING_NUMBER_INSTANCE)).toBeTrue()))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${TESTING_STRING})`, () => expect(isNumberObject(TESTING_STRING_INSTANCE)).toBeFalse()));
            });
        });
    });
});
