// Function.
import { isSymbol } from '../lib/is-symbol.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
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
  tests.is.symbol.describe,
  tests.is.symbol.it
);
/**
 * Tests.
 */
testing.describe(isSymbol.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isSymbol).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isSymbol(TESTING_SYMBOL_NUMBER, (result: boolean) => {
            expect(result).toBeTrue();
            return result;
          });
        })

        // ... arrays.
        .describe(`array`, () => {})
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`TESTING_FUNCTION`, () => expect(isSymbol(TESTING_FUNCTION)).toBeFalse())
            .it(`TestingClass`, () => expect(isSymbol(TestingClass)).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`TESTING_CLASS`, () => expect(isSymbol(TESTING_CLASS)).toBeFalse())
            .it(`TESTING_OBJECT`, () => expect(isSymbol(TESTING_OBJECT)).toBeFalse())
            .it(`new Object(OBJECT_ONE_NEW})`, () => expect(isSymbol(TESTING_OBJECT)).toBeFalse());
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isSymbol(TESTING_BIGINT)).toBeFalse()))

            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isSymbol(TESTING_TRUE)).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isSymbol(TESTING_FALSE)).toBeFalse());
            })

            // null
            .it(`${TESTING_NULL}`, () => expect(isSymbol(TESTING_NULL)).toBeFalse())

            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () => expect(isSymbol(TESTING_NUMBER)).toBeFalse())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isSymbol(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => expect(isSymbol(TESTING_STRING)).toBeFalse())
                .it(`String(${TESTING_STRING})`, () => expect(isSymbol(TESTING_STRING_CONSTRUCTOR)).toBeFalse());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isSymbol(TESTING_SYMBOL_NUMBER)).toBeTrue())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isSymbol(TESTING_SYMBOL_STRING)).toBeTrue());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isSymbol(TESTING_UNDEFINED)).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isSymbol(TESTING_BIGINT)).toBeFalse()))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isSymbol(TESTING_TRUE_INSTANCE)).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isSymbol(TESTING_FALSE_INSTANCE)).toBeFalse());
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isSymbol(TESTING_NUMBER_INSTANCE)).toBeFalse()))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${TESTING_STRING})`, () => expect(isSymbol(TESTING_STRING_INSTANCE)).toBeFalse()));
            });
        });
    });
});
