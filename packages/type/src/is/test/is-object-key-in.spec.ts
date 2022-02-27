// Function.
import { isObjectKeyIn } from '../lib/is-object-key-in.func';
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
  tests.is.objectKeyIn.describe,
  tests.is.objectKeyIn.it
);
/**
 * Tests.
 */
testing.describe(isObjectKeyIn.name , () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isObjectKeyIn).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isObjectKeyIn(TESTING_CLASS, 'firstName', (result, value, payload) => {
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
              expect(isObjectKeyIn(TESTING_CLASS, 1030405027)).toBeTrue();
              expect(isObjectKeyIn(TESTING_CLASS, 5)).toBeTrue();
              expect(isObjectKeyIn(TESTING_CLASS, TESTING_NUMBER)).toBeTrue(); // It does find getter number
            })
            // string.
            .it('has string key', () => {
              expect(isObjectKeyIn(TESTING_CLASS, 'surname')).toBeTrue();
            })
            // symbol.
            .it('has getter symbol key', () => {
              // It does find getter symbol key
              expect(isObjectKeyIn(TESTING_CLASS, TESTING_SYMBOL_NUMBER)).toBeTrue();
              expect(isObjectKeyIn(TESTING_CLASS, TESTING_SYMBOL_STRING)).toBeTrue();
            })
          )
        )
        // ... function.
        .describe(`function`, () => testing
          .it(`TESTING_FUNCTION`, () => expect(isObjectKeyIn(TESTING_FUNCTION, 'function')).toBeFalse())
          .it(`TESTING_CLASS`, () => expect(isObjectKeyIn(TestingClass, 'function')).toBeFalse())
        )
        // ... objects.
        .describe('object', () => testing
          .describe(`TESTING_OBJECT`, () => testing
            // number.
            .it('has number key', () => {
              expect(isObjectKeyIn(TESTING_OBJECT, 1030405027)).toBeTrue();
              expect(isObjectKeyIn(TESTING_OBJECT, 5)).toBeTrue();
              expect(isObjectKeyIn(TESTING_OBJECT, TESTING_NUMBER)).toBeTrue(); // It doesn't find getter
            })
            // string.
            .it('has string key', () => {
              expect(isObjectKeyIn(TESTING_OBJECT, 'key as string')).toBeTrue();
              expect(isObjectKeyIn(TESTING_OBJECT, 'x')).toBeTrue();
              expect(isObjectKeyIn(TESTING_OBJECT, TESTING_STRING)).toBeTrue();
            })
            // symbol.
            .it('has symbol key', () => {
              expect(isObjectKeyIn(TESTING_OBJECT, TESTING_SYMBOL_NUMBER)).toBeTrue();
              expect(isObjectKeyIn(TESTING_OBJECT, TESTING_SYMBOL_STRING)).toBeTrue();
            })
          )
        )
        // ... primitives.
        .describe(`primitive`, () => testing
          // bigint
          .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isObjectKeyIn(TESTING_BIGINT, 'bigint')).toBeFalse()))
          // boolean
          .describe(`boolean`, () => testing
            .it(`${TESTING_TRUE}`, () => expect(isObjectKeyIn(TESTING_TRUE, 'boolean')).toBeFalse())
            .it(`${TESTING_FALSE}`, () => expect(isObjectKeyIn(TESTING_FALSE, 'boolean')).toBeFalse())
          )
          // null
          .it(`${TESTING_NULL}`, () => expect(isObjectKeyIn(TESTING_NULL, 'null')).toBeFalse())
          // number
          .describe(`number`, () => testing
            .it(`${TESTING_NUMBER}`, () => expect(isObjectKeyIn(TESTING_NUMBER, 'number')).toBeFalse())
            .it(`Number(${TESTING_NUMBER})`, () => expect(isObjectKeyIn(TESTING_NUMBER_INSTANCE, 'number')).toBeFalse())
          )
          // string
          .describe(`string`, () => testing
            .it(`${TESTING_STRING}`, () => expect(isObjectKeyIn(TESTING_STRING, 'string')).toBeFalse())
            .it(`String(${TESTING_STRING})`, () => expect(isObjectKeyIn(TESTING_STRING_INSTANCE, 'string')).toBeFalse())
          )
          // symbol
          .describe(`symbol`, () => testing
            .it(`Symbol(${TESTING_NUMBER})`, () => expect(isObjectKeyIn(TESTING_SYMBOL_NUMBER, 'symbol')).toBeFalse())
            .it(`Symbol(${TESTING_STRING})`, () => expect(isObjectKeyIn(TESTING_SYMBOL_STRING, 'symbol')).toBeFalse())
          )
          // undefined
          .it(`${TESTING_UNDEFINED}`, () => expect(isObjectKeyIn(TESTING_UNDEFINED, 'undefined')).toBeFalse())
          // ... object.
          .describe(`object`, () => testing
            // BigInt
            .describe(`BigInt`, () =>
              testing.it(`${TESTING_BIGINT}`, () => expect(isObjectKeyIn(TESTING_BIGINT, 'bigint')).toBeFalse()))
            // Boolean
            .describe(`Boolean`, () => testing
              .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isObjectKeyIn(TESTING_TRUE_INSTANCE, 'boolean')).toBeFalse())
              .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isObjectKeyIn(TESTING_FALSE_INSTANCE, 'boolean')).toBeFalse())
            )
            // Number
            .describe(`Number`, () =>
              testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isObjectKeyIn(TESTING_NUMBER_INSTANCE, 'number')).toBeFalse()))
            // String
            .describe(`String`, () =>
              testing.it(`new String(${TESTING_STRING})`, () => expect(isObjectKeyIn(TESTING_STRING_INSTANCE, 'string')).toBeFalse()))
          )
        );
    });
});
