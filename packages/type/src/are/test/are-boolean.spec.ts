import { areBoolean } from '../lib/are-boolean.func';
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
  tests.are.boolean.describe,
  tests.are.boolean.it
);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(areBoolean.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areBoolean).toBeDefined())
    .it(`every()`, () => {
      areBoolean(1, true, null, new Boolean(3)).every(
        (result, value, payload) => {
          expect(result).toBeFalse();
          expect(value).toEqual([1, true, null, new Boolean(3)]);
          toBe
            .false(result)
            .array(value)
            .undefined(payload);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areBoolean(1, true, null, new Boolean(3)).forEach(
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
      areBoolean(1, true, null, new Boolean(3)).some(
        (result, value, payload) => {
          expect(result).toBeTrue();
          expect(value).toEqual([1, true, null, new Boolean(3)]);
          toBe
            .true(result)
            .array(value)
            .undefined(payload);
          return result;
        }
      );
    });
});
