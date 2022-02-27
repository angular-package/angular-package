// Function.
import { isObjectKeysIn } from '../lib/is-object-keys-in.func';
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
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.is.objectKeysIn.describe,
  tests.is.objectKeysIn.it
);
/**
 * Tests.
 */
testing.describe(isObjectKeysIn.name , () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isObjectKeysIn).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isObjectKeysIn(TESTING_CLASS, ['firstName', 'surname'], (result, value, payload) => {
            expect(result).toBeTrue();
            if (payload) {
              expect(value).toEqual(TESTING_CLASS);
            }
            return result;
          });
        })
        // ... instance.
        .describe(`instance`, () => testing
          .describe(`TESTING_CLASS`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectKeysIn(TESTING_CLASS, [1030405027])).toBeTrue();
              expect(isObjectKeysIn(TESTING_CLASS, [5])).toBeTrue();
              expect(isObjectKeysIn(TESTING_CLASS, [TESTING_NUMBER])).toBeTrue(); // It does find getter number
              expect(isObjectKeysIn(TESTING_CLASS, [5, 1030405027])).toBeTrue();
            })
            // string.
            .it('has string key', () => {
              expect(isObjectKeysIn(TESTING_CLASS, ['surname'])).toBeTrue();
              expect(isObjectKeysIn(TESTING_CLASS, ['firstName', 'surname'])).toBeTrue();
            })
            // symbol.
            .it('has getter symbol key', () => {
              // It does find getter symbol key
              expect(isObjectKeysIn(TESTING_CLASS, [TESTING_SYMBOL_NUMBER])).toBeTrue();
              expect(isObjectKeysIn(TESTING_CLASS, [TESTING_SYMBOL_STRING])).toBeTrue();
              expect(isObjectKeysIn(TESTING_CLASS, [TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING])).toBeTrue();
            })
            // mixed.
            .it('has string and number key', () => expect(isObjectKeysIn(TESTING_CLASS, [1030405027, 'firstName', 'surname'])).toBeTrue())
          )
        )
        // ... function.
        .describe(`function`, () => testing
          .it(`TESTING_FUNCTION`, () => expect(isObjectKeysIn(TESTING_FUNCTION, ['function'])).toBeFalse())
          .it(`TESTING_CLASS`, () => expect(isObjectKeysIn(TestingClass, ['function'])).toBeFalse())
        )
        // ... objects.
        .describe('object', () => testing
          .describe(`TESTING_OBJECT`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectKeysIn(TESTING_OBJECT, [1030405027])).toBeTrue();
              expect(isObjectKeysIn(TESTING_OBJECT, [5])).toBeTrue();
              expect(isObjectKeysIn(TESTING_OBJECT, [TESTING_NUMBER])).toBeTrue(); // It doesn't find getter
              expect(isObjectKeysIn(TESTING_OBJECT, [5, 1030405027])).toBeTrue();
            })
            // string.
            .it('has string key', () => {
              expect(isObjectKeysIn(TESTING_OBJECT, ['key as string'])).toBeTrue();
              expect(isObjectKeysIn(TESTING_OBJECT, ['x'])).toBeTrue();
              expect(isObjectKeysIn(TESTING_OBJECT, [TESTING_STRING])).toBeTrue();
              expect(isObjectKeysIn(TESTING_OBJECT, ['key as string', 'x', TESTING_STRING])).toBeTrue();
            })
            // symbol.
            .it('has symbol key', () => {
              expect(isObjectKeysIn(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER])).toBeTrue();
              expect(isObjectKeysIn(TESTING_OBJECT, [TESTING_SYMBOL_STRING])).toBeTrue();
              expect(isObjectKeysIn(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING])).toBeTrue();
            })
            // mixed.
            .it('has mixed key', () => {
              expect(isObjectKeysIn(TESTING_OBJECT, [
                'key as string',
                'x',
                1030405027,
                5,
                TESTING_NUMBER,
                TESTING_STRING,
                TESTING_SYMBOL_NUMBER,
                TESTING_SYMBOL_STRING,
              ])).toBeTrue();
            })
          )
        )
        // ... primitives.
        .describe(`primitive`, () => testing
          // bigint
          .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isObjectKeysIn(TESTING_BIGINT, ['bigint'])).toBeFalse()))
          // boolean
          .describe(`boolean`, () => testing
            .it(`${TESTING_TRUE}`, () => expect(isObjectKeysIn(TESTING_TRUE, ['boolean'])).toBeFalse())
            .it(`${TESTING_FALSE}`, () => expect(isObjectKeysIn(TESTING_FALSE, ['boolean'])).toBeFalse())
          )
          // null
          .it(`${TESTING_NULL}`, () => expect(isObjectKeysIn(TESTING_NULL, ['null'])).toBeFalse())
          // number
          .describe(`number`, () => testing
            .it(`${TESTING_NUMBER}`, () => expect(isObjectKeysIn(TESTING_NUMBER, ['number'])).toBeFalse())
            .it(`Number(${TESTING_NUMBER})`, () => expect(isObjectKeysIn(TESTING_NUMBER_INSTANCE, ['number'])).toBeFalse())
          )
          // string
          .describe(`string`, () => testing
            .it(`${TESTING_STRING}`, () => expect(isObjectKeysIn(TESTING_STRING, ['string'])).toBeFalse())
            .it(`String(${TESTING_STRING})`, () => expect(isObjectKeysIn(TESTING_STRING_INSTANCE, ['string'])).toBeFalse())
          )
          // symbol
          .describe(`symbol`, () => testing
            .it(`Symbol(${TESTING_NUMBER})`, () => expect(isObjectKeysIn(TESTING_SYMBOL_NUMBER, ['symbol'])).toBeFalse())
            .it(`Symbol(${TESTING_STRING})`, () => expect(isObjectKeysIn(TESTING_SYMBOL_STRING, ['symbol'])).toBeFalse())
          )
          // undefined
          .it(`${TESTING_UNDEFINED}`, () => expect(isObjectKeysIn(TESTING_UNDEFINED, ['undefined'])).toBeFalse())
          // ... object.
          .describe(`object`, () => testing
            // BigInt
            .describe(`BigInt`, () =>
              testing.it(`${TESTING_BIGINT}`, () => expect(isObjectKeysIn(TESTING_BIGINT, ['bigint'])).toBeFalse()))
            // Boolean
            .describe(`Boolean`, () => testing
              .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isObjectKeysIn(TESTING_TRUE_INSTANCE, ['boolean'])).toBeFalse())
              .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isObjectKeysIn(TESTING_FALSE_INSTANCE, ['boolean'])).toBeFalse())
            )
            // Number
            .describe(`Number`, () =>
              testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isObjectKeysIn(TESTING_NUMBER_INSTANCE, ['number'])).toBeFalse()))
            // String
            .describe(`String`, () =>
              testing.it(`new String(${TESTING_STRING})`, () => expect(isObjectKeysIn(TESTING_STRING_INSTANCE, ['string'])).toBeFalse()))
          )
        );
    });
});
