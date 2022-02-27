// Function.
import { guardPrimitive } from '../lib/guard-primitive.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_BIGINT,
  TESTING_FALSE,
  TESTING_NULL,
  TESTING_NUMBER,
  TESTING_STRING,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
  TESTING_UNDEFINED,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.primitive.describe,
  tests.guard.primitive.it
);
/**
 * Tests.
 */
testing.describe(guardPrimitive.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardPrimitive).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    .it('callback', () => {
      guardPrimitive<string>(TESTING_STRING, 'string' , (result, value, payload) => {
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
      .describe(`bigint`, () => it(`${TESTING_BIGINT}`, () => expect(guardPrimitive(TESTING_BIGINT, 'bigint')).toBeTrue()))

      // boolean
      .describe(`boolean`, () => {
        testing
        .it(`${TESTING_TRUE}`, () => expect(guardPrimitive(TESTING_TRUE, 'boolean')).toBeTrue())
        .it(`${TESTING_FALSE}`, () => expect(guardPrimitive(TESTING_FALSE, 'boolean')).toBeTrue());
      })

      // null
      .it(`${TESTING_NULL}`, () => expect(guardPrimitive(TESTING_NULL, 'null')).toBeTrue())

      // number
      .describe(`number`, () => {
        testing
        .it(`${TESTING_NUMBER}`, () => expect(guardPrimitive(TESTING_NUMBER, 'number')).toBeTrue());
      })

      // string
      .describe(`string`, () => {
        testing
        .it(`${TESTING_STRING}`, () => expect(guardPrimitive(TESTING_STRING, 'string')).toBeTrue());
      })

      // symbol
      .describe(`symbol`, () => {
        testing
        .it(`Symbol(${TESTING_NUMBER})`, () => expect(guardPrimitive(TESTING_SYMBOL_NUMBER, 'symbol')).toBeTrue())
        .it(`Symbol(${TESTING_STRING})`, () => expect(guardPrimitive(TESTING_SYMBOL_STRING, 'symbol')).toBeTrue());
      })

      // undefined
      .it(`${TESTING_UNDEFINED}`, () => expect(guardPrimitive(TESTING_UNDEFINED, 'undefined')).toBeTrue());
    });
  });
});
