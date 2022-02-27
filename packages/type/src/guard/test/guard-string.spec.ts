// Function.
import { guardString } from '../lib/guard-string.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_STRING,
  TESTING_STRING_INSTANCE,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.string.describe,
  tests.guard.string.it
);
/**
 * Tests.
 */
testing.describe(guardString.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(guardString).toBeDefined())

    // Checks ...
    .describe(`guards`, () => {
      testing
        .it('with callback and payload', () => {
          guardString(TESTING_STRING, (result, value, payload) => {
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
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            .describe(`string`, () =>
              testing.it(`${TESTING_STRING}`, () =>
                expect(guardString(TESTING_STRING)).toBeTrue()
              )
            )
            .describe(`object`, () =>
              testing.describe(`String`, () =>
                testing.it(`new String(${TESTING_STRING})`, () =>
                  expect(guardString(TESTING_STRING_INSTANCE)).toBeTrue()
                )
              )
            );
        });
    });
});
