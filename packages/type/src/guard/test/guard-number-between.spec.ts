// Function.
import { guardNumberBetween } from '../lib/guard-number-between.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_NUMBER,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.numberBetween.describe,
  tests.guard.numberBetween.it
);
/**
 * Tests.
 */
testing.describe(guardNumberBetween.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardNumberBetween).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    .it('with callback and payload', () => {
      guardNumberBetween(TESTING_NUMBER, 1, TESTING_NUMBER, (result, value, payload) => {
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
      .describe(`number`, () => {
        testing
        .it(`${TESTING_NUMBER}`, () => expect(guardNumberBetween(TESTING_NUMBER, 1, TESTING_NUMBER)).toBeTrue());
      });
    });
  });
});
