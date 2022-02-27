// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_NUMBER,
  TESTING_STRING,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
// Function.
import { guardSymbol } from '../lib/guard-symbol.func';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.symbol.describe,
  tests.guard.symbol.it
);
/**
 * Tests.
 */
testing.describe(guardSymbol.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(guardSymbol).toBeDefined())

    // Checks ...
    .describe(`guards`, () => {
      testing
      .it('with callback and payload', () => {
        guardSymbol(TESTING_SYMBOL_STRING, (result, value, payload) => {
          expect(result).toBeTrue();
          expect(value).toEqual(TESTING_SYMBOL_STRING);
          if (payload) {
            expect(payload.action).toEqual('action');
            expect(payload.name).toEqual('name');
            expect(payload.param).toEqual('param');
          }
          return result;
        }, { action: 'action', name: 'name', param: 'param' });
      })

      // ... primitives.
      .describe(`primitive`, () => {
        testing
          // symbol
          .describe(`symbol`, () => {
            testing
              .it(`Symbol(${TESTING_NUMBER})`, () => expect(guardSymbol(TESTING_SYMBOL_NUMBER)).toBe(TESTING_TRUE))
              .it(`Symbol(${TESTING_STRING})`, () => expect(guardSymbol(TESTING_SYMBOL_STRING)).toBe(TESTING_TRUE));
          });
      });
    });
});
