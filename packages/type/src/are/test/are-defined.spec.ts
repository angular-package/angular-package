import { areDefined } from '../lib/are-defined.func';
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
  tests.are.defined.describe,
  tests.are.defined.it
);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(areDefined.name, () => {
  let age: any;
  const arr = ['1', 2, null, undefined, age];
  testing
    // Defined.
    .it('is DEFINED', () => expect(areDefined).toBeDefined())
    .it(`every()`, () => {
      areDefined(...arr).every(
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
      areDefined('1', 2, null, undefined, age).forEach(
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
      areDefined(...arr).some(
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
