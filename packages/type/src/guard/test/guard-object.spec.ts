// Function.
import { guardObject } from '../lib/guard-object.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_CLASS,
  TESTING_DATE,
  TESTING_OBJECT,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.object.describe,
  tests.guard.object.it
);
/**
 * Tests.
 */
testing.describe(guardObject.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardObject).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    .it('callback', () => {
      guardObject(TESTING_OBJECT, (result, value, payload) => {
        expect(result).toBeTrue();
        if (payload) {
          expect(value).toEqual(TESTING_OBJECT);
        }
        return result;
      });
    })

    // ... objects.
    .describe('object', () => {
      testing
        .it(`CLASS`, () => expect(guardObject(TESTING_CLASS)).toBeTrue())
        .it(`OBJECT_ONE`, () => expect(guardObject(TESTING_OBJECT)).toBeTrue())
        .it(`TESTING_DATE`, () => expect(guardObject(TESTING_DATE)).toBeTrue());
    });
  });
});
