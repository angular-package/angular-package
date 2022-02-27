// Function.
import { guardRegExp } from '../lib/guard-regexp.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_TRUE,
  TESTING_REGEXP
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.regexp.describe,
  tests.guard.regexp.it
);
/**
 * Tests.
 */
testing.describe(guardRegExp.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(guardRegExp).toBeDefined())

    // Checks ...
    .describe(`guards`, () => {
      testing
      .it('with callback and payload', () => {
        guardRegExp(TESTING_REGEXP, (result, value, payload) => {
          expect(result).toBeTrue();
          expect(value).toEqual(TESTING_REGEXP);
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
          // bigint
          .describe(`RegExp`, () => it(`${TESTING_REGEXP}`, () => expect(guardRegExp(TESTING_REGEXP)).toBe(TESTING_TRUE)));
      });
    });
});
