// Function.
import { isArray } from '../lib/is-array.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
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
  TESTING_BIGINT,
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_FUNCTION,
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
  TESTING_OBJECT,
  TESTING_STRING,
  TESTING_STRING_INSTANCE,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  TESTING_UNDEFINED,

  // Class.
  TestingClass,

  // Interface.
  TestingObject,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.is.array.describe,
  tests.is.array.it
);
/**
 * Tests.
 */
testing.describe(isArray.name, () => {
  let TESTING_NOT_DEFINED: unknown;
  // TESTING_TRUE
  testing
    .it('is DEFINED', () => expect(isArray).toBeDefined())
    .it(`callback and custom payload`, () => {
      isArray<bigint, { database: string }>(TESTING_ARRAY_BIGINT, (result, value, payload) => (
        expect(result).toBeTrue(),
        expect(value).toEqual(TESTING_ARRAY_BIGINT),
        expect(payload?.database).toEqual('Person'),
        result
      ), { database: 'Person' });
    })
    .it('Array<bigint>', () => expect(isArray<bigint>(TESTING_ARRAY_BIGINT)).toBeTrue())
    .it('Array<boolean>', () => expect(isArray<boolean>(TESTING_ARRAY_BOOLEAN)).toBeTrue())
    .it('Array<TestingClass>', () => expect(isArray<TestingClass>(TESTING_ARRAY_CLASS)).toBeTrue())
    .it('Array<Func>', () => expect(isArray<Function>(TESTING_ARRAY_FUNCTION)).toBeTrue())
    .it('Array<null>', () => expect(isArray<null>(TESTING_ARRAY_NULL)).toBeTrue())
    .it('Array<number>', () => expect(isArray<number>(TESTING_ARRAY_NUMBER)).toBeTrue())
    .it('Array<ObjectOne> Array<ObjectTwo>', () => (expect(isArray<TestingObject>(TESTING_ARRAY_OBJECT_ONE)).toBeTrue()))
    .it('Array<string>', () => expect(isArray<string>(TESTING_ARRAY_STRING)).toBeTrue())
    .it('Array<symbol>', () => (
      expect(isArray<symbol>(TESTING_ARRAY_SYMBOL_STRING)).toBeTrue(),
      expect(isArray<symbol>(TESTING_ARRAY_SYMBOL_NUMBER)).toBeTrue()
    ))
    .it('Array<undefined>', () => expect(isArray<undefined>(TESTING_ARRAY_UNDEFINED)).toBeTrue())

    // TESTING_FALSE
    .it(`'bigint'`, () => expect(isArray(TESTING_BIGINT)).toBeFalse())
    .it(`'boolean' | Boolean`, () => {
      expect(isArray(TESTING_FALSE)).toBeFalse();
      expect(isArray(TESTING_TRUE)).toBeFalse();
      expect(isArray(TESTING_FALSE_INSTANCE)).toBeFalse();
      expect(isArray(TESTING_TRUE_INSTANCE)).toBeFalse();
    })
    .it(`'function' | Function`, () => expect(isArray(TESTING_FUNCTION)).toBeFalse())
    .it(`'number' | Number`, () => {
      expect(isArray(TESTING_NUMBER)).toBeFalse();
      expect(isArray(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse();
      expect(isArray(TESTING_NUMBER_INSTANCE)).toBeFalse();
    })
    .it(`'object' | Object`, () => {
      expect(isArray(TESTING_OBJECT)).toBeFalse();
    })
    .it(`'string' | String`, () => {
      expect(isArray(TESTING_STRING)).toBeFalse();
      expect(isArray(TESTING_STRING_INSTANCE)).toBeFalse();
    })
    .it(`'symbol'`, () => {
      expect(isArray(TESTING_SYMBOL_NUMBER)).toBeFalse();
      expect(isArray(TESTING_SYMBOL_STRING)).toBeFalse();
    })
    .it(`'undefined'`, () => (
      expect(isArray(TESTING_NOT_DEFINED)).toBeFalse(),
      expect(isArray(TESTING_UNDEFINED)).toBeFalse()
    ));
});
