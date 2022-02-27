// Function.
import { guardDefined } from '../lib/guard-defined.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_STRING,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.defined.describe,
  tests.guard.defined.it
);
/**
 * Tests.
 */
testing.describe(guardDefined.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardDefined).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    .it('with callback and payload', () => {
      guardDefined(TESTING_STRING, (result, value, payload) => {
        expect(result).toBeTrue();
        expect(value).toEqual(TESTING_STRING);
        if (payload) {
          expect(payload.action).toEqual('action');
          expect(payload.name).toEqual('name');
          expect(payload.param).toEqual('param');
        }
        return result;
      }, { action: 'action', name: 'name', param: 'param' });
    })
    .it('undefined', () => expect(guardDefined(undefined as any)).toBeFalse());
  });
});
