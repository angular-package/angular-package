// Function.
import { guardKey } from '../lib/guard-key.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_NUMBER,
  TESTING_STRING,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.key.describe,
  tests.guard.key.it
);
/**
 * Tests.
 */
testing.describe(guardKey.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardKey).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    .it('with callback and payload', () => {
      guardKey(TESTING_NUMBER, (result, value, payload) => {
        expect(result).toBeTrue();
        expect(value).toEqual(TESTING_NUMBER);
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
      // number
      .describe(`number`, () => it(`${TESTING_NUMBER}`, () => expect(guardKey(TESTING_NUMBER)).toBeTrue()))
      // string
      .describe(`string`, () => it(`${TESTING_STRING}`, () => expect(guardKey(TESTING_STRING)).toBeTrue()))
      // symbol
      .describe(`symbol`, () => {
        it(`Symbol(${TESTING_NUMBER})`, () => expect(guardKey(TESTING_SYMBOL_NUMBER)).toBeTrue());
        it(`Symbol(${TESTING_STRING})`, () => expect(guardKey(TESTING_SYMBOL_STRING)).toBeTrue());
      });
    });
  });
});
