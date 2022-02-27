// Function.
import { isObjectKeys } from '../lib/is-object-keys.func';
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
  tests.is.objectKeys.describe,
  tests.is.objectKeys.it
);
/**
 * Tests.
 */
testing.describe(isObjectKeys.name , () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isObjectKeys).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        // ... instance.
        .describe(`instance`, () => testing
          .describe(`TESTING_CLASS`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectKeys(TESTING_CLASS, [1030405027])).toBeTrue();
              expect(isObjectKeys(TESTING_CLASS, [5])).toBeTrue();
              expect(isObjectKeys(TESTING_CLASS, [5, 1030405027])).toBeTrue();
            })
            // It doesn't find getter number
            .it('has not find getter number', () => expect(isObjectKeys(TESTING_CLASS, [TESTING_NUMBER])).toBeFalse())
            // string.
            .it('has string key', () => {
              expect(isObjectKeys(TESTING_CLASS, ['surname'])).toBeTrue();
              expect(isObjectKeys(TESTING_CLASS, ['firstName', 'surname'])).toBeTrue();
            })
            // symbol.
            .it('has not find getter symbol key', () => {
              // It does not find getter symbol key in class
              expect(isObjectKeys(TESTING_CLASS, [TESTING_SYMBOL_NUMBER])).toBeFalse();
              expect(isObjectKeys(TESTING_CLASS, [TESTING_SYMBOL_STRING])).toBeFalse();
              expect(isObjectKeys(TESTING_CLASS, [TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING])).toBeFalse();
            })
            // mixed.
            .it('has string and number key', () => expect(isObjectKeys(TESTING_CLASS, [1030405027, 'firstName', 'surname'])).toBeTrue())
          )
        )
        // ... function.
        .describe(`function`, () => testing
          .it(`TESTING_FUNCTION`, () => expect(isObjectKeys(TESTING_FUNCTION, ['function'])).toBeFalse())
          .it(`TESTING_CLASS`, () => expect(isObjectKeys(TestingClass, ['function'])).toBeFalse())
        )
        // ... objects.
        .describe('object', () => {
          describe(`TESTING_OBJECT`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectKeys(TESTING_OBJECT, [1030405027])).toBeTrue();
              expect(isObjectKeys(TESTING_OBJECT, [5])).toBeTrue();
              expect(isObjectKeys(TESTING_OBJECT, [TESTING_NUMBER])).toBeTrue(); // It doesn't find getter
              expect(isObjectKeys(TESTING_OBJECT, [5, 1030405027])).toBeTrue();
            })
            // string.
            .it('has string key', () => {
              expect(isObjectKeys(TESTING_OBJECT, ['key as string'])).toBeTrue();
              expect(isObjectKeys(TESTING_OBJECT, ['x'])).toBeTrue();
              expect(isObjectKeys(TESTING_OBJECT, [TESTING_STRING])).toBeTrue();
              expect(isObjectKeys(TESTING_OBJECT, ['key as string', 'x', TESTING_STRING])).toBeTrue();
            })
            // symbol.
            .it('has symbol key', () => {
              expect(isObjectKeys(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER])).toBeTrue();
              expect(isObjectKeys(TESTING_OBJECT, [TESTING_SYMBOL_STRING])).toBeTrue();
              expect(isObjectKeys(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING])).toBeTrue();
            })
            // mixed.
            .it('has mixed key', () => {
              expect(isObjectKeys(TESTING_OBJECT, [
                'key as string',
                'x',
                1030405027,
                5,
                TESTING_NUMBER,
                TESTING_STRING,
                TESTING_SYMBOL_NUMBER,
                TESTING_SYMBOL_STRING,
              ])).toBeTrue();
              // TRUE, TRUE
              expect(isObjectKeys(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING])).toBeTrue();
              // TRUE AND FALSE
              expect(isObjectKeys(TESTING_OBJECT, [TESTING_STRING, 'no property'])).toBeFalse();
              // FALSE AND FALSE
              expect(isObjectKeys(TESTING_OBJECT, ['no property one', 'no property two'])).toBeFalse();
            })
          );
        })
        // ... primitives.
        .describe(`primitive`, () => testing
          // bigint
          .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isObjectKeys(TESTING_BIGINT, ['bigint'])).toBeFalse()))
          // boolean
          .describe(`boolean`, () => testing
            .it(`${TESTING_TRUE}`, () => expect(isObjectKeys(TESTING_TRUE, ['boolean'])).toBeFalse())
            .it(`${TESTING_FALSE}`, () => expect(isObjectKeys(TESTING_FALSE, ['boolean'])).toBeFalse())
          )
          // null
          .it(`${TESTING_NULL}`, () => expect(isObjectKeys(TESTING_NULL, ['null'])).toBeFalse())
          // number
          .describe(`number`, () => testing
            .it(`${TESTING_NUMBER}`, () => expect(isObjectKeys(TESTING_NUMBER, ['number'])).toBeFalse())
            .it(`Number(${TESTING_NUMBER})`, () => expect(isObjectKeys(TESTING_NUMBER_INSTANCE, ['number'])).toBeFalse())
          )
          // string
          .describe(`string`, () => testing
            .it(`${TESTING_STRING}`, () => expect(isObjectKeys(TESTING_STRING, ['string'])).toBeFalse())
            .it(`String(${TESTING_STRING})`, () => expect(isObjectKeys(TESTING_STRING_INSTANCE, ['string'])).toBeFalse())
          )
          // symbol
          .describe(`symbol`, () => testing
            .it(`Symbol(${TESTING_NUMBER})`, () => expect(isObjectKeys(TESTING_SYMBOL_NUMBER, ['symbol'])).toBeFalse())
            .it(`Symbol(${TESTING_STRING})`, () => expect(isObjectKeys(TESTING_SYMBOL_STRING, ['symbol'])).toBeFalse())
          )
          // undefined
          .it(`${TESTING_UNDEFINED}`, () => expect(isObjectKeys(TESTING_UNDEFINED, ['undefined'])).toBeFalse())
          // ... object.
          .describe(`object`, () => testing
            // BigInt
            .describe(`BigInt`, () =>
              testing.it(`${TESTING_BIGINT}`, () => expect(isObjectKeys(TESTING_BIGINT, ['bigint'])).toBeFalse()))
            // Boolean
            .describe(`Boolean`, () => testing
              .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isObjectKeys(TESTING_TRUE_INSTANCE, ['boolean'])).toBeFalse())
              .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isObjectKeys(TESTING_FALSE_INSTANCE, ['boolean'])).toBeFalse())
            )
            // Number
            .describe(`Number`, () =>
              testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isObjectKeys(TESTING_NUMBER_INSTANCE, ['number'])).toBeFalse()))
            // String
            .describe(`String`, () =>
              testing.it(`new String(${TESTING_STRING})`, () => expect(isObjectKeys(TESTING_STRING_INSTANCE, ['string'])).toBeFalse()))
          )
        );
    });
});
