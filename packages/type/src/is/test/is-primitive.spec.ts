// Function.
import { isPrimitive } from '../lib/is-primitive.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_BIGINT,
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_NULL,
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  TESTING_UNDEFINED,

} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.is.primitive.describe,
  tests.is.primitive.it
);
/**
 * Tests.
 */
testing.describe(isPrimitive.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(isPrimitive).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isPrimitive<string>(TESTING_STRING, 'string' , (result, value, payload) => {
            expect(result).toBeTrue();
            if (payload) {
              expect(value).toEqual(TESTING_STRING);
            }
            return result;
          });
        })

        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () => testing.it(`${TESTING_BIGINT}`, () => expect(isPrimitive(TESTING_BIGINT, 'bigint')).toBeTrue()))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isPrimitive(TESTING_TRUE, 'boolean')).toBeTrue())
                .it(`${TESTING_FALSE}`, () => expect(isPrimitive(TESTING_FALSE, 'boolean')).toBeTrue());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isPrimitive(TESTING_NULL, 'null')).toBeTrue())
            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () => expect(isPrimitive(TESTING_NUMBER, 'number')).toBeTrue())
                .it(`Number(${TESTING_NUMBER})`, () => expect(isPrimitive(TESTING_NUMBER_CONSTRUCTOR, 'number')).toBeTrue());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => expect(isPrimitive(TESTING_STRING, 'string')).toBeTrue())
                .it(`String(${TESTING_STRING})`, () => expect(isPrimitive(TESTING_STRING_CONSTRUCTOR, 'string')).toBeTrue());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isPrimitive(TESTING_SYMBOL_NUMBER, 'symbol')).toBeTrue())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isPrimitive(TESTING_SYMBOL_STRING, 'symbol')).toBeTrue());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () => expect(isPrimitive(TESTING_UNDEFINED, 'undefined')).toBeTrue())
            // ... object.
            .describe(`object`, () => {
              testing
                // BigInt
                .describe(`BigInt`, () =>
                  testing.it(`${TESTING_BIGINT}`, () => expect(isPrimitive(TESTING_BIGINT, 'bigint')).toBeTrue()))
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () => expect(isPrimitive(TESTING_TRUE_INSTANCE, 'boolean')).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () => expect(isPrimitive(TESTING_FALSE_INSTANCE, 'boolean')).toBeFalse());
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${TESTING_NUMBER})`, () => expect(isPrimitive(TESTING_NUMBER_INSTANCE, 'number')).toBeFalse()))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${TESTING_STRING})`, () => expect(isPrimitive(TESTING_STRING_INSTANCE, 'string')).toBeFalse()));
            });

        });
    });
});
