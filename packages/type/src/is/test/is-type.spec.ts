// Function.
import { isType } from '../lib/is-type.func';
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
  tests.is.type.describe,
  tests.is.type.it
);
/**
 * Tests.
 */
testing.describe(isType.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isType).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isType(TESTING_STRING, 'string', (result, value, payload) => {
            expect(result).toBeTrue();
            if (payload) {
              expect(value).toEqual(TESTING_STRING);
            }
            return result;
          });
          isType(TESTING_NUMBER, 'number', (result, value, payload) => {
            expect(result).toBeTrue();
            if (payload) {
              expect(value).toEqual(TESTING_NUMBER);
            }
            return result;
          });
        })
        // ... instance.
        .describe(`instance`, () => testing.it(`TestingClass`, () => expect(isType<TestingClass>(TESTING_CLASS, TestingClass)).toBeTrue()))
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`${TESTING_FUNCTION}`, () => expect(isType(TESTING_FUNCTION, 'function')).toBeTrue())
            .it(`${TESTING_CLASS}`, () => expect(isType(TestingClass, 'function')).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`TESTING_CLASS`, () => expect(isType(TESTING_CLASS, 'object')).toBeTrue())
            .it(`TESTING_OBJECT`, () => expect(isType(TESTING_OBJECT, 'object')).toBeTrue());
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isType(TESTING_BIGINT, 'bigint')).toBeTrue()))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isType(TESTING_TRUE, 'boolean')).toBeTrue())
                .it(`${TESTING_FALSE}`, () => expect(isType(TESTING_FALSE, 'boolean')).toBeTrue());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isType(TESTING_NULL, 'null')).toBeTrue())
            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () => expect(isType(TESTING_NUMBER, 'number')).toBeTrue())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isType(TESTING_NUMBER_CONSTRUCTOR, 'number')).toBeTrue());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => expect(isType(TESTING_STRING, 'string')).toBeTrue())
                .it(`String(${TESTING_STRING})`, () => expect(isType(TESTING_STRING_CONSTRUCTOR, 'string')).toBeTrue());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isType(TESTING_SYMBOL_NUMBER, 'symbol')).toBeTrue())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isType(TESTING_SYMBOL_STRING, 'symbol')).toBeTrue());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isType(TESTING_UNDEFINED, 'undefined')).toBeTrue())
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isType(TESTING_BIGINT, 'bigint')).toBeTrue()))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isType(TESTING_TRUE_INSTANCE, 'boolean')).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isType(TESTING_FALSE_INSTANCE, 'boolean')).toBeFalse());
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isType(TESTING_NUMBER_INSTANCE, 'number')).toBeFalse()))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${TESTING_STRING})`, () => expect(isType(TESTING_STRING_INSTANCE, 'string')).toBeFalse()));
            });
        });
    });
});
