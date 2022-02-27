import { areRegExp } from '../lib/are-regexp.func';
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
  tests.are.regexp.describe,
  tests.are.regexp.it
);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(areRegExp.name, () => {
  const arr = [/^[]/, /^[]/, /^[]/, 3];
  testing
    // Defined.
    .it('is DEFINED', () => expect(areRegExp).toBeDefined())
    .it(`every()`, () => {
      areRegExp(...arr).every(
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
      areRegExp(...arr).forEach(
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
      areRegExp(...arr).some(
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
