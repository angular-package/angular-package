import { areFalse } from '../lib/are-false.func';
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
  tests.are.false.describe,
  tests.are.false.it
);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(areFalse.name, () => {
  const arr = [true, null, false, new Boolean(false)];
  testing
    // Defined.
    .it('is DEFINED', () => expect(areFalse).toBeDefined())
    .it(`every()`, () => {
      areFalse(...arr).every(
        (result, value, payload) => {
          expect(result).toBeFalse();
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
      areFalse(true, null, false, new Boolean(false)).forEach(
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
      areFalse(...arr).some(
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
