// Function.
import { isNumberBetween } from '../lib/is-number-between.func';
// Testing.
import {
  TESTING_BIGINT,
  TESTING_CLASS,
  TESTING_DATE,
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_FUNCTION,
  TESTING_NULL,
  TESTING_NUMBER,
  TESTING_NUMBER_INSTANCE,
  TESTING_OBJECT,
  TESTING_STRING,
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
  tests.is.numberBetween.describe,
  tests.is.numberBetween.it
);
/**
 * Tests.
 */
testing.describe(isNumberBetween.name, () => {
  // Constant.
  const min = 0;
  const max = 13;
  const value = 13;

  testing
    // Defined.
    .it('is DEFINED', () => expect(isNumberBetween).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isNumberBetween(TESTING_FALSE,  min, max, (result: boolean) => {
            expect(result).toBeFalse();
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => { })
        // ... Date.
        .describe(`date`, () => {
          testing
          .it(`TESTING_DATE`, () => expect(isNumberBetween(TESTING_DATE,  min, max)).toBeFalse());
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`TESTING_FUNCTION`, () => expect(isNumberBetween(TESTING_FUNCTION,  min, max)).toBeFalse())
            .it(`TestingClass`, () => expect(isNumberBetween(TestingClass,  min, max)).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`TESTING_CLASS`, () => expect(isNumberBetween(TESTING_CLASS,  min, max)).toBeFalse())
            .it(`TESTING_OBJECT`, () => expect(isNumberBetween(TESTING_OBJECT,  min, max)).toBeFalse());
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () =>
              testing.it(`${TESTING_BIGINT}`, () => expect(isNumberBetween(TESTING_BIGINT,  min, max)).toBeFalse()))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isNumberBetween(TESTING_TRUE,  min, max)).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isNumberBetween(TESTING_FALSE,  min, max)).toBeFalse());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isNumberBetween(TESTING_NULL,  min, max)).toBeFalse())
            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () => expect(isNumberBetween(TESTING_NUMBER,  min, max)).toBeFalse())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isNumberBetween(TESTING_NUMBER_INSTANCE,  min, max)).toBeFalse())
                .it(`${TESTING_NUMBER}`, () => expect(isNumberBetween(value,  min, max)).toBeTrue());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => expect(isNumberBetween(TESTING_STRING,  min, max)).toBeFalse())
                .it(`String(${TESTING_STRING})`, () => expect(isNumberBetween(TESTING_STRING_INSTANCE,  min, max)).toBeFalse());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isNumberBetween(TESTING_SYMBOL_NUMBER,  min, max)).toBeFalse())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isNumberBetween(TESTING_SYMBOL_STRING,  min, max)).toBeFalse());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isNumberBetween(TESTING_UNDEFINED,  min, max)).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () =>
                  testing.it(`${TESTING_BIGINT}`, () => expect(isNumberBetween(TESTING_BIGINT,  min, max)).toBeFalse()))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isNumberBetween(TESTING_TRUE_INSTANCE,  min, max)).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isNumberBetween(TESTING_FALSE_INSTANCE,  min, max)).toBeFalse());
                })
                // Number
                .describe(`Number`, () => {
                  testing
                    .it(`new Number(${TESTING_NUMBER})`, () => expect(isNumberBetween(TESTING_NUMBER_INSTANCE,  min, max)).toBeFalse())
                    .it(`new Number(${value})`, () => expect(isNumberBetween(new Number(value),  min, max)).toBeTrue())
                    .it(`new Number(${value})`, () => expect(isNumberBetween(new Number(1.15),  min, max)).toBeTrue())
                    .it(`new Number(${value})`, () => expect(isNumberBetween(new Number(13.15),  min, max)).toBeFalse());
                })
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${TESTING_STRING})`, () =>
                    expect(isNumberBetween(TESTING_STRING_INSTANCE,  min, max)).toBeFalse()));
            });
        });
    });
});
