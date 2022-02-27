
import { areBigInt } from '../lib/are-bigint.func';
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
  tests.are.bigint.describe,
  tests.are.bigint.it
);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(areBigInt.name, () => {
  testing
    // Defined.
    .it('is DEFINED', () => expect(areBigInt).toBeDefined())
    .it(`every()`, () => {
      areBigInt(1n, '2n', 3, 4n).every(
        (result, value, payload) => {
          expect(value).toEqual([1n, '2n', 3, 4n]);
          toBe
            .false(result)
            .array(value)
            .undefined(payload);
          return result;
        }
      );
    })
    .it(`forEach()`, () => {
      areBigInt(1n, '2n', 3, 4n).forEach(
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
      areBigInt(1n, '2n', 3, 4n).some(
        (result, value, payload) => {
          expect(value).toEqual([1n, '2n', 3, 4n]);
          toBe
            .true(result)
            .array(value)
            .undefined(payload);
          return result;
        }
      );
    });
});
