// Function.
import { isStringLengthBetween } from '../lib/is-string-length-between.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_ARRAY_STRING,
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

  // Class.
  TestingClass,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.is.stringLengthBetween.describe,
  tests.is.stringLengthBetween.it
);
/**
 * Tests.
 */
testing.describe(`isStringLengthBetween()`, () => {
  // Constant.
  const min = 0;
  const max = 13;
  const stringFirstName = 'my first name';
  const stringInstance = new String(stringFirstName);

  testing
    // Defined.
    .it('is DEFINED', () => expect(isStringLengthBetween).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isStringLengthBetween(TESTING_FALSE, min, max, (result: boolean) => {
            expect(result).toBeFalse();
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => {
          testing
            .it(`TESTING_ARRAY_STRING`, () => expect(isStringLengthBetween(TESTING_ARRAY_STRING, min, max)).toBeFalse());
        })
        // ... Date.
        .describe(`date`, () => {
          testing
            .it(`TESTING_DATE`, () => expect(isStringLengthBetween(TESTING_DATE, min, max)).toBeFalse())
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`FUNCTION ${min} ${max}`, () => expect(isStringLengthBetween(TESTING_FUNCTION, min, max)).toBeFalse())
            .it(`TestingClass ${min} ${max}`, () => expect(isStringLengthBetween(TestingClass, min, max)).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`TESTING_CLASS`, () => expect(isStringLengthBetween(TESTING_CLASS, min, max)).toBeFalse())
            .it(`TESTING_OBJECT`, () => expect(isStringLengthBetween(TESTING_OBJECT, min, max)).toBeFalse());
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => it(`${TESTING_BIGINT}`, () => expect(isStringLengthBetween(TESTING_BIGINT, min, max)).toBeFalse()))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isStringLengthBetween(TESTING_TRUE, min, max)).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isStringLengthBetween(TESTING_FALSE, min, max)).toBeFalse());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isStringLengthBetween(TESTING_NULL, min, max)).toBeFalse())
            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () => expect(isStringLengthBetween(TESTING_NUMBER, min, max)).toBeFalse())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isStringLengthBetween(TESTING_NUMBER_INSTANCE, min, max)).toBeFalse());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => expect(isStringLengthBetween(TESTING_STRING, min, max)).toBeFalse())
                .it(`String(${TESTING_STRING})`, () => expect(isStringLengthBetween(TESTING_STRING_INSTANCE, min, max)).toBeFalse())
                .it(`${stringFirstName}`, () => expect(isStringLengthBetween(stringFirstName, min, max)).toBeTrue())
                .it(`${stringFirstName}`, () => expect(isStringLengthBetween(stringFirstName, 13, max)).toBeTrue())
                .it(`${stringFirstName}`, () => expect(isStringLengthBetween(stringFirstName, 14, max)).toBeFalse())
                .it(`${stringFirstName}`, () => expect(isStringLengthBetween(stringFirstName, min, 12)).toBeFalse());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isStringLengthBetween(TESTING_SYMBOL_NUMBER, min, max)).toBeFalse())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isStringLengthBetween(TESTING_SYMBOL_STRING, min, max)).toBeFalse());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isStringLengthBetween(TESTING_UNDEFINED, min, max)).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt constructor`, () =>
                  testing.it(`${TESTING_BIGINT}`, () => expect(isStringLengthBetween(BigInt(1n), min, max)).toBeFalse()))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isStringLengthBetween(TESTING_TRUE_INSTANCE, min, max)).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isStringLengthBetween(TESTING_FALSE_INSTANCE, min, max)).toBeFalse());
                })
                // Number
                .describe(`Number`, () => {
                  testing
                    .it(`new Number(${TESTING_NUMBER})`, () => expect(isStringLengthBetween(TESTING_NUMBER_INSTANCE, min, max)).toBeFalse())
                    .it(`new Number(${stringFirstName})`, () => expect(isStringLengthBetween(new Number(stringFirstName), min, max)).toBeFalse())
                    .it(`new Number(${stringFirstName})`, () => expect(isStringLengthBetween(new Number(1.15), min, max)).toBeFalse())
                    .it(`new Number(${stringFirstName})`, () => expect(isStringLengthBetween(new Number(13.15), min, max)).toBeFalse());
                })
                // String
                .describe(`String`, () => {
                  testing
                    .it(`new String(${TESTING_STRING})`, () => expect(isStringLengthBetween(TESTING_STRING_INSTANCE, min, max)).toBeFalse())
                    .it(`new String(${stringFirstName})`, () => expect(isStringLengthBetween(stringInstance, min, max)).toBeTrue())
                    .it(`new String(${stringFirstName})`, () => expect(isStringLengthBetween(stringInstance, 13, max)).toBeTrue())
                    .it(`new String(${stringFirstName})`, () => expect(isStringLengthBetween(stringInstance, 14, max)).toBeFalse())
                    .it(`new String(${stringFirstName})`, () => expect(isStringLengthBetween(stringInstance, min, 12)).toBeFalse());
                });
            });
        });
    });
});
