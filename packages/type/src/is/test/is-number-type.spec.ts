// Function.
import { isNumberType } from '../lib/is-number-type.func';
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
  tests.is.numberType.describe,
  tests.is.numberType.it
);
/**
 * Checks
 * ✓ typeof === 'number' && instanceof Number === false && instanceof Object === false
 * ✓ value === true
 * ✓ value === false
 */
testing.describe(isNumberType.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isNumberType).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isNumberType(TESTING_NUMBER, (result: boolean) => {
            expect(result).toBeTrue();
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => { })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`TESTING_FUNCTION`, () => expect(isNumberType(TESTING_FUNCTION)).toBeFalse())
            .it(`TestingClass`, () => expect(isNumberType(TestingClass)).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`TESTING_CLASS`, () => expect(isNumberType(TESTING_CLASS)).toBeFalse())
            .it(`TESTING_OBJECT`, () => expect(isNumberType(TESTING_OBJECT)).toBeFalse())
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isNumberType(TESTING_OBJECT)).toBeFalse())
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isNumberType(TESTING_BIGINT)).toBeFalse()))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isNumberType(TESTING_TRUE)).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isNumberType(TESTING_FALSE)).toBeFalse());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isNumberType(TESTING_NULL)).toBeFalse())
            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () => expect(isNumberType(TESTING_NUMBER)).toBeTrue())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isNumberType(TESTING_NUMBER_CONSTRUCTOR)).toBeTrue());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => expect(isNumberType(TESTING_STRING)).toBeFalse())
                .it(`String(${TESTING_STRING})`, () => expect(isNumberType(TESTING_STRING_CONSTRUCTOR)).toBeFalse());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isNumberType(TESTING_SYMBOL_NUMBER)).toBeFalse())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isNumberType(TESTING_SYMBOL_STRING)).toBeFalse());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isNumberType(TESTING_UNDEFINED)).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isNumberType(TESTING_BIGINT)).toBeFalse()))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isNumberType(TESTING_TRUE_INSTANCE)).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isNumberType(TESTING_FALSE_INSTANCE)).toBeFalse());
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isNumberType(TESTING_NUMBER_INSTANCE)).toBeFalse()))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${TESTING_STRING})`, () => expect(isNumberType(TESTING_STRING_INSTANCE)).toBeFalse()));
            });
        });
    });
});
