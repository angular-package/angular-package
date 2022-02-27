// Function to test.
import { areTrue } from '../lib/are-true.func';
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
  tests.are.true.describe,
  tests.are.true.it
);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(areTrue.name, () => {
  const arr = [true, null, false, new Boolean(false)];
  testing
    // Defined.
    .it('is DEFINED', () => expect(areTrue).toBeDefined())
    .it(`every()`, () => {
      areTrue(...arr).every(
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
      areTrue(...arr).forEach(
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
      areTrue(...arr).some(
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
