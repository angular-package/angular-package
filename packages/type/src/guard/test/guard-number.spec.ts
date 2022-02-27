// Function.
import { guardNumber } from '../lib/guard-number.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.number.describe,
  tests.guard.number.it
);
/**
 * Tests.
 */
testing.describe(guardNumber.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardNumber).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    .it('with callback and payload', () => {
      guardNumber(TESTING_NUMBER, (result, value, payload) => {
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
      .describe(`number`, () =>
        testing
          .it(`${TESTING_NUMBER}`, () => expect(guardNumber(TESTING_NUMBER)).toBeTrue())
          .it(`${TESTING_NUMBER_CONSTRUCTOR}`, () => expect(guardNumber(TESTING_NUMBER_CONSTRUCTOR)).toBeTrue()))
      // number object
      .describe(`number object`, () =>
        testing.it(`${TESTING_NUMBER_INSTANCE}`, () => expect(guardNumber(TESTING_NUMBER_INSTANCE)).toBeTrue()));
    });
  });
});
