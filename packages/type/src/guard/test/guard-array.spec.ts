// Function.
import { guardArray } from '../lib/guard-array.func';
// Testing.
import {
  // Main.
  Testing,

  // Constants.
  TESTING_ARRAY_BIGINT,
  TESTING_ARRAY_BOOLEAN,
  TESTING_ARRAY_CLASS,
  TESTING_ARRAY_FUNCTION,
  TESTING_ARRAY_NULL,
  TESTING_ARRAY_NUMBER,
  TESTING_ARRAY_OBJECT_ONE,
  TESTING_ARRAY_STRING,
  TESTING_ARRAY_SYMBOL_NUMBER,
  TESTING_ARRAY_SYMBOL_STRING,
  TESTING_ARRAY_UNDEFINED,

  // Class.
  TestingClass,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.array.describe,
  tests.guard.array.it
);
/**
 * Tests.
 */
testing.describe(guardArray.name, () => {
  testing
    // TRUE
    .it('is DEFINED', () => expect(guardArray).toBeDefined())
    .it('Array<bigint>', () => expect(guardArray<bigint>(TESTING_ARRAY_BIGINT)).toBeTruthy())
    .it('Array<boolean>', () => expect(guardArray<boolean | Boolean>(TESTING_ARRAY_BOOLEAN)).toBeTruthy())
    .it('Array<TestingClass>', () => expect(guardArray<TestingClass>(TESTING_ARRAY_CLASS)).toBeTruthy())
    .it('Array<Func>', () => expect(guardArray<Function>(TESTING_ARRAY_FUNCTION)).toBeTruthy())
    .it('Array<null>', () => expect(guardArray<null>(TESTING_ARRAY_NULL)).toBeTruthy())
    .it('Array<number>', () => expect(guardArray<number | Number>(TESTING_ARRAY_NUMBER)).toBeTruthy())
    .it('Array<ObjectOne> Array<ObjectTwo>', () => expect(guardArray(TESTING_ARRAY_OBJECT_ONE)).toBeTruthy())
    .it('Array<string>', () => expect(guardArray<string | String>(TESTING_ARRAY_STRING)).toBeTruthy())
    .it('Array<symbol>', () => {
      expect(guardArray(TESTING_ARRAY_SYMBOL_STRING)).toBeTruthy();
      expect(guardArray(TESTING_ARRAY_SYMBOL_NUMBER)).toBeTruthy();
    })
    .it('Array<undefined>', () => expect(guardArray<undefined | unknown>(TESTING_ARRAY_UNDEFINED)).toBeTruthy());
});
