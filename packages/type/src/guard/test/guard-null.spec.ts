// Function.
import { guardNull } from '../lib/guard-null.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_NULL,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.null.describe,
  tests.guard.null.it
);
/**
 * Tests.
 */
testing.describe(guardNull.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(guardNull).toBeDefined())

    // Checks ...
    .describe(`guards`, () => {

      testing
      .it('with callback and payload', () => {
        guardNull(TESTING_NULL, (result, value, payload) => {
          expect(result).toBeTrue();
          expect(value).toEqual(TESTING_NULL);
          if (payload) {
            expect(payload.action).toEqual('action');
            expect(payload.name).toEqual('name');
            expect(payload.param).toEqual('param');
          }
          return result;
        }, { action: 'action', name: 'name', param: 'param' });
      })

      // ... primitives.
      .describe(`primitive`, () => testing.it(`${TESTING_NULL}`, () => expect(guardNull(TESTING_NULL)).toBeTrue()));
    });
});
