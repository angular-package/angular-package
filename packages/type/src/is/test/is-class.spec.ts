// Function.
import { isClass } from '../lib/is-class.func';
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
  tests.is.class.describe,
  tests.is.class.it
);
/**
 * Tests.
 */
testing.describe(isClass.name, () => {
  // Defined.
  testing.it('is DEFINED', () => expect(isClass).toBeDefined())

  // Checks ...
  .describe(`checks`, () => {
    testing.it('callback', () => {
      isClass(TestingClass, (result, value, payload) => {
        expect(result).toBeTrue();
        if (payload) {
          expect(value).toEqual(TestingClass);
        }
        return result;
      });
    })
    // ... arrays.
    .describe(`array`, () => { })
    // ... function.
    .describe(`function`, () => {
      testing
        .it(`TESTING_FUNCTION`, () => expect(isClass(TESTING_FUNCTION)).toBeFalse())
        .it(`TestingClass`, () => expect(isClass(TestingClass)).toBeTrue());
    })
    // ... objects.
    .describe('object', () => {
      testing
        .it(`TESTING_CLASS`, () => expect(isClass(TESTING_CLASS)).toBeFalse())
        .it(`TESTING_OBJECT`, () => expect(isClass(TESTING_OBJECT)).toBeFalse())
        .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isClass(TESTING_OBJECT)).toBeFalse());
    })
    // ... primitives.
    .describe(`primitive`, () => {
      testing
        // bigint
        .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isClass(TESTING_BIGINT)).toBeFalse()))
        // boolean
        .describe(`boolean`, () => {
          testing
            .it(`${TESTING_TRUE}`, () => expect(isClass(TESTING_TRUE)).toBeFalse())
            .it(`${TESTING_FALSE}`, () => expect(isClass(TESTING_FALSE)).toBeFalse());
        })
        // null
        .it(`${TESTING_NULL}`, () => expect(isClass(TESTING_NULL)).toBeFalse())
        // number
        .describe(`number`, () => {
          testing
            .it(`${TESTING_NUMBER}`, () => expect(isClass(TESTING_NUMBER)).toBeFalse())
            .it(`Number(${TESTING_NUMBER})`, () => expect(isClass(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse());
        })
        // string
        .describe(`string`, () => {
          testing
            .it(`${TESTING_STRING}`, () => expect(isClass(TESTING_STRING)).toBeFalse())
            .it(`String(${TESTING_STRING})`, () => expect(isClass(TESTING_STRING_CONSTRUCTOR)).toBeFalse());
        })
        // symbol
        .describe(`symbol`, () => {
          testing
            .it(`Symbol(${TESTING_NUMBER})`, () => expect(isClass(TESTING_SYMBOL_NUMBER)).toBeFalse())
            .it(`Symbol(${TESTING_STRING})`, () => expect(isClass(TESTING_SYMBOL_STRING)).toBeFalse());
        })
        // undefined
        .it(`${TESTING_UNDEFINED}`, () => expect(isClass(TESTING_UNDEFINED)).toBeFalse())
        // ... object.
        .describe(`object`, () => {
          testing
            // BigInt
            .describe(`BigInt`, () => it(`${TESTING_BIGINT}`, () => expect(isClass(TESTING_BIGINT)).toBeFalse()))
            // Boolean
            .describe(`Boolean`, () => {
              it(`${TESTING_TRUE_INSTANCE}`, () => expect(isClass(TESTING_TRUE_INSTANCE)).toBeFalse());
              it(`${TESTING_FALSE_INSTANCE}`, () => expect(isClass(TESTING_FALSE_INSTANCE)).toBeFalse());
            })
            // Number
            .describe(`Number`, () => it(`new Number(${TESTING_NUMBER})`, () => expect(isClass(TESTING_NUMBER_INSTANCE)).toBeFalse()))
            // String
            .describe(`String`, () => it(`new String(${TESTING_STRING})`, () => expect(isClass(TESTING_STRING_INSTANCE)).toBeFalse()));
        });
    });
  });
});
