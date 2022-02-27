// Function.
import { isObjectSomeKeys } from '../lib/is-object-some-keys.func';
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
  tests.is.objectSomeKeys.describe,
  tests.is.objectSomeKeys.it
);
/**
 * Tests.
 */
testing.describe(isObjectSomeKeys.name , () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isObjectSomeKeys).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        // ... instance.
        .describe(`instance`, () => testing
          .describe(`TESTING_CLASS`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectSomeKeys(TESTING_CLASS, [1030405027])).toBeTrue();
              expect(isObjectSomeKeys(TESTING_CLASS, [5])).toBeTrue();
              expect(isObjectSomeKeys(TESTING_CLASS, [5, 1030405027])).toBeTrue();
            })
            // It doesn't find getter number
            .it('has not find getter number', () => expect(isObjectSomeKeys(TESTING_CLASS, [TESTING_NUMBER])).toBeFalse())
            // string.
            .it('has string key', () => {
              expect(isObjectSomeKeys(TESTING_CLASS, ['surname'])).toBeTrue();
              expect(isObjectSomeKeys(TESTING_CLASS, ['firstName', 'surname'])).toBeTrue();
            })
            // symbol.
            .it('has not find getter symbol key', () => {
              // It does not find getter symbol key in class
              expect(isObjectSomeKeys(TESTING_CLASS, [TESTING_SYMBOL_NUMBER])).toBeFalse();
              expect(isObjectSomeKeys(TESTING_CLASS, [TESTING_SYMBOL_STRING])).toBeFalse();
              expect(isObjectSomeKeys(TESTING_CLASS, [TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING])).toBeFalse();
            })
            // mixed.
            .it('has string and number key', () => expect(isObjectSomeKeys(TESTING_CLASS, [1030405027, 'firstName', 'surname'])).toBeTrue())
          )
        )
        // ... function.
        .describe(`function`, () => testing
          .it(`TESTING_FUNCTION`, () => expect(isObjectSomeKeys(TESTING_FUNCTION, ['function'])).toBeFalse())
          .it(`TESTING_CLASS`, () => expect(isObjectSomeKeys(TestingClass, ['function'])).toBeFalse())
        )
        // ... objects.
        .describe('object', () => {
          describe(`TESTING_OBJECT`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectSomeKeys(TESTING_OBJECT, [1030405027])).toBeTrue();
              expect(isObjectSomeKeys(TESTING_OBJECT, [5])).toBeTrue();
              expect(isObjectSomeKeys(TESTING_OBJECT, [TESTING_NUMBER])).toBeTrue(); // It doesn't find getter
              expect(isObjectSomeKeys(TESTING_OBJECT, [5, 1030405027])).toBeTrue();
            })
            // string.
            .it('has string key', () => {
              expect(isObjectSomeKeys(TESTING_OBJECT, ['key as string'])).toBeTrue();
              expect(isObjectSomeKeys(TESTING_OBJECT, ['x'])).toBeTrue();
              expect(isObjectSomeKeys(TESTING_OBJECT, [TESTING_STRING])).toBeTrue();
              expect(isObjectSomeKeys(TESTING_OBJECT, ['key as string', 'x', TESTING_STRING])).toBeTrue();
            })
            // symbol.
            .it('has symbol key', () => {
              expect(isObjectSomeKeys(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER])).toBeTrue();
              expect(isObjectSomeKeys(TESTING_OBJECT, [TESTING_SYMBOL_STRING])).toBeTrue();
              expect(isObjectSomeKeys(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING])).toBeTrue();
            })
            // mixed.
            .it('has mixed key', () => {
              expect(isObjectSomeKeys(TESTING_OBJECT, [
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
              expect(isObjectSomeKeys(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING])).toBeTrue();
              // [TRUE, TRUE] OR [TRUE, TRUE]
              expect(isObjectSomeKeys(TESTING_OBJECT,
                  [[TESTING_SYMBOL_NUMBER, TESTING_STRING], [TESTING_SYMBOL_STRING, TESTING_NUMBER]])).toBeTrue();
              // TRUE OR FALSE
              expect(isObjectSomeKeys(TESTING_OBJECT, [TESTING_STRING, 'no property'])).toBeTrue();
              // FALSE OR TRUE
              expect(isObjectSomeKeys(TESTING_OBJECT, ['no property', TESTING_NUMBER])).toBeTrue();
              // [FALSE] OR [FALSE]
              expect(isObjectSomeKeys(TESTING_OBJECT, [['no property'], ['no property']])).toBeFalse();
              // FALSE OR FALSE
              expect(isObjectSomeKeys(TESTING_OBJECT, ['no property one', 'no property two'])).toBeFalse();
              // [FALSE] OR FALSE
              expect(isObjectSomeKeys(TESTING_OBJECT, [['no property one'], 'no property two'])).toBeFalse();
              // FALSE OR [FALSE]
              expect(isObjectSomeKeys(TESTING_OBJECT, ['no property one', ['no property two']])).toBeFalse();
              // FALSE OR [FALSE, TRUE]
              expect(isObjectSomeKeys(TESTING_OBJECT, ['no property one', ['no property two', TESTING_STRING]])).toBeFalse();
              // [FALSE, TRUE] OR FALSE
              expect(isObjectSomeKeys(TESTING_OBJECT, [['no property one', TESTING_STRING], 'no property two'])).toBeFalse();
              // TRUE OR [FALSE, TRUE]
              expect(isObjectSomeKeys(TESTING_OBJECT, [TESTING_NUMBER, ['no property two', TESTING_STRING]])).toBeTrue();
              // [FALSE, TRUE] OR TRUE
              expect(isObjectSomeKeys(TESTING_OBJECT, [['no property one', TESTING_STRING], TESTING_NUMBER])).toBeTrue();
            })
          );
        })
        // ... primitives.
        .describe(`primitive`, () => testing
          // bigint
          .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isObjectSomeKeys(TESTING_BIGINT, ['bigint'])).toBeFalse()))
          // boolean
          .describe(`boolean`, () => testing
            .it(`${TESTING_TRUE}`, () => expect(isObjectSomeKeys(TESTING_TRUE, ['boolean'])).toBeFalse())
            .it(`${TESTING_FALSE}`, () => expect(isObjectSomeKeys(TESTING_FALSE, ['boolean'])).toBeFalse())
          )
          // null
          .it(`${TESTING_NULL}`, () => expect(isObjectSomeKeys(TESTING_NULL, ['null'])).toBeFalse())
          // number
          .describe(`number`, () => testing
            .it(`${TESTING_NUMBER}`, () => expect(isObjectSomeKeys(TESTING_NUMBER, ['number'])).toBeFalse())
            .it(`Number(${TESTING_NUMBER})`, () => expect(isObjectSomeKeys(TESTING_NUMBER_INSTANCE, ['number'])).toBeFalse())
          )
          // string
          .describe(`string`, () => testing
            .it(`${TESTING_STRING}`, () => expect(isObjectSomeKeys(TESTING_STRING, ['string'])).toBeFalse())
            .it(`String(${TESTING_STRING})`, () => expect(isObjectSomeKeys(TESTING_STRING_INSTANCE, ['string'])).toBeFalse())
          )
          // symbol
          .describe(`symbol`, () => testing
            .it(`Symbol(${TESTING_NUMBER})`, () => expect(isObjectSomeKeys(TESTING_SYMBOL_NUMBER, ['symbol'])).toBeFalse())
            .it(`Symbol(${TESTING_STRING})`, () => expect(isObjectSomeKeys(TESTING_SYMBOL_STRING, ['symbol'])).toBeFalse())
          )
          // undefined
          .it(`${TESTING_UNDEFINED}`, () => expect(isObjectSomeKeys(TESTING_UNDEFINED, ['undefined'])).toBeFalse())
          // ... object.
          .describe(`object`, () => testing
            // BigInt
            .describe(`BigInt`, () =>
              testing.it(`${TESTING_BIGINT}`, () => expect(isObjectSomeKeys(TESTING_BIGINT, ['bigint'])).toBeFalse()))
            // Boolean
            .describe(`Boolean`, () => testing
              .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isObjectSomeKeys(TESTING_TRUE_INSTANCE, ['boolean'])).toBeFalse())
              .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isObjectSomeKeys(TESTING_FALSE_INSTANCE, ['boolean'])).toBeFalse())
            )
            // Number
            .describe(`Number`, () =>
              testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isObjectSomeKeys(TESTING_NUMBER_INSTANCE, ['number'])).toBeFalse()))
            // String
            .describe(`String`, () =>
              testing.it(`new String(${TESTING_STRING})`, () => expect(isObjectSomeKeys(TESTING_STRING_INSTANCE, ['string'])).toBeFalse()))
          )
        );
    });
});
