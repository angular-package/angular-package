// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_TRUE,
  TESTING_FALSE
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
// Function.
import { guardFalse } from '../lib/guard-false.func';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.false.describe,
  tests.guard.false.it
);
/**
 * Tests.
 */
testing.describe(guardFalse.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardFalse).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    .it('with callback and payload', () => {
      guardFalse(TESTING_FALSE, (result, value, payload) => {
        expect(result).toBe(TESTING_TRUE);
        expect(value).toBeFalse();
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
      testing
        .it(`${TESTING_FALSE}`, () => expect(guardFalse(TESTING_FALSE)).toBeTrue())
        .it(`${TESTING_TRUE}`, () => expect(guardFalse(TESTING_TRUE as any)).toBeFalse())
    )

    // ... object.
    .describe(`object`, () =>
      testing
        .it(`new Boolean(${TESTING_TRUE})`, () => expect(guardFalse(new Boolean(TESTING_TRUE) as any)).toBeFalse())
        .it(`new Boolean(${TESTING_FALSE})`, () => expect(guardFalse(new Boolean(TESTING_FALSE) as any)).toBeTrue())
    );
  });
});
