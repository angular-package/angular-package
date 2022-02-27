// Function.
import { isDate } from '../lib/is-date.func';
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
  tests.is.date.describe,
  tests.is.date.it)
;
/**
 * Tests.
 */
testing.describe(isDate.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isDate).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing.it('callback', () => {
        isDate(TESTING_DATE, (result: boolean) => {
          expect(result).toBeTrue();
          return result;
        });
      })
      // ... arrays.
      .describe(`array`, () => { })
      // ... Date.
      .describe(`date`, () => {
        testing
          .it(`TESTING_DATE`, () => expect(isDate(TESTING_DATE)).toBeTrue())
      })
      // ... function.
      .describe(`function`, () => {
        testing
          .it(`TESTING_FUNCTION`, () => expect(isDate(TESTING_FUNCTION)).toBeFalse())
          .it(`TestingClass`, () => expect(isDate(TestingClass)).toBeFalse());
      })
      // ... objects.
      .describe('object', () => {
        testing
          .it(`TESTING_CLASS`, () => expect(isDate(TESTING_CLASS)).toBeFalse())
          .it(`TESTING_OBJECT`, () => expect(isDate(TESTING_OBJECT)).toBeFalse())
          .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isDate(TESTING_OBJECT)).toBeFalse());
      })
      // ... primitives.
      .describe(`primitive`, () => {
        testing
          // bigint
          .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isDate(TESTING_BIGINT)).toBeFalse()))
          // boolean
          .describe(`boolean`, () => {
            testing
              .it(`${TESTING_TRUE}`, () => expect(isDate(TESTING_TRUE)).toBeFalse())
              .it(`${TESTING_FALSE}`, () => expect(isDate(TESTING_FALSE)).toBeFalse());
          })
          // null
          .it(`${TESTING_NULL}`, () => expect(isDate(TESTING_NULL)).toBeFalse())
          // number
          .describe(`number`, () => {
            testing
              .it(`${TESTING_NUMBER}`, () => expect(isDate(TESTING_NUMBER)).toBeFalse())
              .it(`Number(${TESTING_NUMBER})`, () => expect(isDate(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse());
          })
          // string
          .describe(`string`, () => {
            testing
              .it(`${TESTING_STRING}`, () => expect(isDate(TESTING_STRING)).toBeFalse())
              .it(`String(${TESTING_STRING})`, () => expect(isDate(TESTING_STRING_CONSTRUCTOR)).toBeFalse());
          })
          // symbol
          .describe(`symbol`, () => {
            testing
              .it(`Symbol(${TESTING_NUMBER})`, () => expect(isDate(TESTING_SYMBOL_NUMBER)).toBeFalse())
              .it(`Symbol(${TESTING_STRING})`, () => expect(isDate(TESTING_SYMBOL_STRING)).toBeFalse());
          })
          // undefined
          .it(`${TESTING_UNDEFINED}`, () => expect(isDate(TESTING_UNDEFINED)).toBeFalse())
          // ... object.
          .describe(`object`, () => {
            testing.
              // BigInt
              describe(`BigInt`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isDate(TESTING_BIGINT)).toBeFalse()))
              // Boolean
              .describe(`Boolean`, () => {
                testing
                  .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isDate(TESTING_TRUE_INSTANCE)).toBeFalse())
                  .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isDate(TESTING_FALSE_INSTANCE)).toBeFalse());
              })
              // Number
              .describe(`Number`, () =>
                testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isDate(TESTING_NUMBER_INSTANCE)).toBeFalse()))
              // String
              .describe(`String`, () =>
                testing.it(`new String(${TESTING_STRING})`, () => expect(isDate(TESTING_STRING_INSTANCE)).toBeFalse()));
          });
      });
    });
});
