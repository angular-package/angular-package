
// Function to test.
import { areUndefined } from '../lib/are-undefined.func';
// Testing.
import {
  Testing,
  TestingToBeMatchers,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.are.undefined.describe,
  tests.are.undefined.it
);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(areUndefined.name, () => {
  const arr = [undefined, 1, 2, '3'];
  testing
    // Defined.
    .it('is DEFINED', () => expect(areUndefined).toBeDefined())
    .it(`every()`, () => {
      areUndefined(...arr).every(
        (result, value, payload) => {
          expect(value).toEqual(arr);
          toBe
            .false(result)
            .array(value)
            .undefined(payload);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areUndefined(...arr).forEach(
        (result, value, index, array, payload) => {
          expect(value).toEqual(array[index]);
          toBe
            .boolean(result)
            .number(index)
            .array(array)
            .object(payload);
          expect(payload?.age).toEqual(2);
        },
        { age: 2 }
      );
    })
    .it(`some()`, () => {
      areUndefined(...arr).some(
        (result, value, payload) => {
          expect(result).toBeTrue();
          expect(value).toEqual(arr);
          toBe
            .true(result)
            .array(value)
            .undefined(payload);
          return result;
        }
      );
    });
});
