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
import { guardTrue } from '../lib/guard-true.func';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.true.describe,
  tests.guard.true.it
);
/**
 * Tests.
 */
testing.describe(guardTrue.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardTrue).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing.it('callback', () => {
      guardTrue(TESTING_TRUE, (result, value, payload) => {
        expect(result).toBe(TESTING_TRUE);
        if (payload) {
          expect(value).toBeTrue();
        }
        return result;
      });
    })

    // ... primitives.
    .describe(`primitive`, () =>
      testing
        .it(`${TESTING_TRUE}`, () => expect(guardTrue(TESTING_TRUE)).toBe(TESTING_TRUE))
        .it(`${TESTING_FALSE}`, () => expect(guardTrue(TESTING_FALSE as any)).toBe(TESTING_FALSE))
    )

    // ... object.
    .describe(`object`, () =>
      testing
        .it(`new Boolean(${TESTING_TRUE})`, () => expect(guardTrue(new Boolean(TESTING_TRUE) as any)).toBe(TESTING_TRUE))
        .it(`new Boolean(${TESTING_FALSE})`, () => expect(guardTrue(new Boolean(TESTING_FALSE) as any)).toBe(TESTING_FALSE))
    );
  });
});
