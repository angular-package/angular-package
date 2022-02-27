// Function.
import { guardUndefined } from '../lib/guard-undefined.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_UNDEFINED,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.undefined.describe,
  tests.guard.undefined.it
);
/**
 * Tests.
 */
testing.describe(guardUndefined.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(guardUndefined).toBeDefined())

    // Checks ...
    .describe(`guards`, () => {
      testing
        .it('with callback and payload', () => {
          guardUndefined(TESTING_UNDEFINED, (result, value, payload) => {
            expect(result).toBeTrue();
            expect(value).toEqual(TESTING_UNDEFINED);
            if (payload) {
              expect(payload.action).toEqual('action');
              expect(payload.name).toEqual('name');
              expect(payload.param).toEqual('param');
            }
            return result;
          }, { action: 'action', name: 'name', param: 'param' });
        })
        // ... primitives.
        .describe(`primitive`, () =>
          testing.it(`${TESTING_UNDEFINED}`, () =>
            expect(guardUndefined(TESTING_UNDEFINED)).toBeTrue()
          )
        );
    });
});
