
import { areString } from '../lib/are-string.func';
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
  tests.are.string.describe,
  tests.are.string.it
);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(areString.name, () => {
  const arr = [1, '2', '3'];
  testing
    // Defined.
    .it('is DEFINED', () => expect(areString).toBeDefined())
    .it(`every()`, () => {
      areString(...arr).every(
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
      areString(...arr).forEach(
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
      areString(...arr).some(
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
