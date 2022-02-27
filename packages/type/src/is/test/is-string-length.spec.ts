// Function.
import { isStringLength } from '../lib/is-string-length.func';
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
  tests.is.stringLength.describe,
  tests.is.stringLength.it
);
/**
 * Tests.
 */
testing.describe(isStringLength.name, () => {
  // Constant.
  const length = 13;
  const stringFirstName = 'my first name';
  const stringInstance = new String(stringFirstName);

  testing
    // Defined.
    .it('is DEFINED', () => expect(isStringLength).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isStringLength(TESTING_FALSE, length, (result: boolean) => {
            expect(result).toBeFalse();
            return result;
          });
        })
        // ... arrays.
        .describe(`array`, () => {
          testing
            .it(`TESTING_ARRAY_STRING`, () => expect(isStringLength(TESTING_ARRAY_STRING, length)).toBeFalse());
        })
        // ... Date.
        .describe(`date`, () => {
          testing
            .it(`TESTING_DATE`, () => expect(isStringLength(TESTING_DATE, length)).toBeFalse());
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`FUNCTION ${length}`, () => expect(isStringLength(TESTING_FUNCTION, length)).toBeFalse())
            .it(`TestingClass ${length}`, () => expect(isStringLength(TestingClass, length)).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`TESTING_CLASS`, () => expect(isStringLength(TESTING_CLASS, length)).toBeFalse())
            .it(`TESTING_OBJECT`, () => expect(isStringLength(TESTING_OBJECT, length)).toBeFalse());
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => it(`${TESTING_BIGINT}`, () => expect(isStringLength(TESTING_BIGINT, length)).toBeFalse()))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isStringLength(TESTING_TRUE, length)).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isStringLength(TESTING_FALSE, length)).toBeFalse());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isStringLength(TESTING_NULL, length)).toBeFalse())
            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () => expect(isStringLength(TESTING_NUMBER, length)).toBeFalse())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isStringLength(TESTING_NUMBER_INSTANCE, length)).toBeFalse());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => expect(isStringLength(TESTING_STRING, length)).toBeFalse())
                .it(`String(${TESTING_STRING})`, () => expect(isStringLength(TESTING_STRING_INSTANCE, length)).toBeFalse())
                .it(`${stringFirstName}`, () => expect(isStringLength(stringFirstName, length)).toBeTrue())
                .it(`${stringFirstName}`, () => expect(isStringLength(stringFirstName, 13)).toBeTrue())
                .it(`${stringFirstName}`, () => expect(isStringLength(stringFirstName, 14)).toBeFalse())
                .it(`${stringFirstName}`, () => expect(isStringLength(stringFirstName, 12)).toBeFalse());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isStringLength(TESTING_SYMBOL_NUMBER, length)).toBeFalse())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isStringLength(TESTING_SYMBOL_STRING, length)).toBeFalse());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isStringLength(TESTING_UNDEFINED, length)).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt constructor`, () =>
                  testing.it(`${TESTING_BIGINT}`, () => expect(isStringLength(BigInt(1n), length)).toBeFalse()))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isStringLength(TESTING_TRUE_INSTANCE, length)).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isStringLength(TESTING_FALSE_INSTANCE, length)).toBeFalse());
                })
                // Number
                .describe(`Number`, () => {
                  testing
                    .it(`new Number(${TESTING_NUMBER})`, () => expect(isStringLength(TESTING_NUMBER_INSTANCE, length)).toBeFalse())
                    .it(`new Number(${stringFirstName})`, () => expect(isStringLength(new Number(stringFirstName), length)).toBeFalse())
                    .it(`new Number(${stringFirstName})`, () => expect(isStringLength(new Number(1.15), length)).toBeFalse())
                    .it(`new Number(${stringFirstName})`, () => expect(isStringLength(new Number(13.15), length)).toBeFalse());
                })
                // String
                .describe(`String`, () => {
                  testing
                    .it(`new String(${TESTING_STRING})`, () => expect(isStringLength(TESTING_STRING_INSTANCE, length)).toBeFalse())
                    .it(`new String(${stringFirstName})`, () => expect(isStringLength(stringInstance, length)).toBeTrue())
                    .it(`new String(${stringFirstName})`, () => expect(isStringLength(stringInstance, 13)).toBeTrue())
                    .it(`new String(${stringFirstName})`, () => expect(isStringLength(stringInstance, 14)).toBeFalse())
                    .it(`new String(${stringFirstName})`, () => expect(isStringLength(stringInstance, 12)).toBeFalse());
                });
            });
        });
    });
});
