// Function.
import { guardBoolean } from '../lib/guard-boolean.func';
// Object.
import { guard } from '../lib/guard.object';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.boolean.describe,
  tests.guard.boolean.it
);
/**
 * Tests.
 */
testing.describe(guardBoolean.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(guardBoolean).toBeDefined())
    // Checks ...
    .describe(`guards`, () => {
      testing
      .it('with callback and payload', () => {
        guardBoolean(TESTING_TRUE, (result, value, payload) => {
          expect(result).toBeTrue();
          expect(value).toEqual(TESTING_TRUE);
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
        // boolean
        testing.describe(`boolean`, () => {
          testing
            .it(`FALSE`, () => expect(guardBoolean(TESTING_FALSE)).toBeTrue())
            .it(`TRUE`, () => expect(guardBoolean(TESTING_TRUE)).toBeTrue())
            .it(`FALSE`, () => expect(guard.boolean(TESTING_FALSE)).toBeTrue())
            .it(`TRUE`, () => expect(guard.boolean(TESTING_TRUE)).toBeTrue());
        });
      })
      // ... instance.
      .describe(`instance`, () => {
        // boolean
        testing.describe(`boolean`, () => {
          testing
            .it(`${TESTING_TRUE_INSTANCE}`, () => expect(guardBoolean(TESTING_TRUE_INSTANCE)).toBeTrue())
            .it(`${TESTING_FALSE_INSTANCE}`, () => expect(guardBoolean(TESTING_FALSE_INSTANCE)).toBeTrue())
            .it(`${TESTING_FALSE_INSTANCE}`, () => expect(guard.boolean(TESTING_FALSE_INSTANCE)).toBeTrue())
            .it(`${TESTING_TRUE_INSTANCE}`, () => expect(guard.boolean(TESTING_TRUE_INSTANCE)).toBeTrue());
        });
      });
    });
});
