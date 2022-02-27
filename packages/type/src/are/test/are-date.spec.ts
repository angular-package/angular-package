import { areDate } from '../lib/are-date.func';
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
  tests.are.date.describe,
  tests.are.date.it
);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(areDate.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areDate).toBeDefined())
    .it(`every()`, () => {
      const arr = [new Date(), new Date('invalid date')];
      areDate(...arr).every(
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
      areDate(new Date(), new Date('invalid date')).forEach(
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
      const arr = [new Date(), new Date('invalid date')];
      areDate(...arr).some(
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
