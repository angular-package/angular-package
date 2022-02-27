// Function.
import { guardFunction } from '../lib/guard-function.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_FUNCTION,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
// Function.
import { guardFalse } from '../lib/guard-false.func';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.function.describe,
  tests.guard.function.it
);
/**
 * Tests.
 */
testing.describe(guardFalse.name, () => {
  testing
  // TRUE
  .it('is DEFINED', () => expect(guardFunction).toBeDefined())
  .it('with callback and payload', () => {
    guardFunction(TESTING_FUNCTION, (result, value, payload) => {
      expect(result).toBeTrue();
      expect(value).toEqual(TESTING_FUNCTION);
      if (payload) {
        expect(payload.action).toEqual('action');
        expect(payload.name).toEqual('name');
        expect(payload.param).toEqual('param');
      }
      return result;
    }, { action: 'action', name: 'name', param: 'param' });
  })
  .it(`function | Function`, () => expect(guardFunction(TESTING_FUNCTION)).toBeTrue());
});
