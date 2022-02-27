// Function.
import { isTrue } from '../lib/is-true.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_BIGINT,
  TESTING_CLASS,
  TESTING_DATE,
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_FUNCTION,
  TESTING_NULL,
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
  TESTING_OBJECT,
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  TESTING_UNDEFINED,

  // Class.
  TestingClass,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.is.true.describe,
  tests.is.true.it
);
/**
 * Tests.
 */
testing.describe(isTrue.name, () => {
  // Defined.
  it('is DEFINED', () => expect(isTrue).toBeDefined());

  // Checks ...
  describe(`checks`, () => {
    it('callback', () => {
      isTrue(TESTING_TRUE, (result: boolean) => {
        expect(result).toBeTrue();
        return result;
      });
    });
    // ... arrays.
    describe(`array`, () => {});
    // ... Date.
    describe(`date`, () => {
      it(`TESTING_DATE`, () => expect(isTrue(TESTING_DATE)).toBeFalse());
    });
    // ... function.
    describe(`function`, () => {
      it(`TESTING_FUNCTION`, () => expect(isTrue(TESTING_FUNCTION)).toBeFalse());
      it(`TestingClass`, () => expect(isTrue(TestingClass)).toBeFalse());
    });
    // ... objects.
    describe('object', () => {
      it(`TESTING_CLASS`, () => expect(isTrue(TESTING_CLASS)).toBeFalse());
      it(`TESTING_OBJECT`, () => expect(isTrue(TESTING_OBJECT)).toBeFalse());
      it(`new Object(OBJECT_ONE_NEW})`, () => expect(isTrue(TESTING_OBJECT)).toBeFalse());
    });
    // ... primitives.
    describe(`primitive`, () => {
      // bigint
      describe(`bigint`, () => it(`${TESTING_BIGINT}`, () => expect(isTrue(TESTING_BIGINT)).toBeFalse()));
      // boolean
      describe(`boolean`, () => {
        it(`${TESTING_TRUE}`, () => expect(isTrue(TESTING_TRUE)).toBeTrue());
        it(`${TESTING_FALSE}`, () => expect(isTrue(TESTING_FALSE)).toBeFalse());
      });
      // null
      it(`${TESTING_NULL}`, () => expect(isTrue(TESTING_NULL)).toBeFalse());
      // number
      describe(`number`, () => {
        it(`${TESTING_NUMBER}`, () => expect(isTrue(TESTING_NUMBER)).toBeFalse());
        it(`Number(${TESTING_NUMBER})`, () => expect(isTrue(TESTING_NUMBER_CONSTRUCTOR)).toBeFalse());
      });
      // string
      describe(`string`, () => {
        it(`${TESTING_STRING}`, () => expect(isTrue(TESTING_STRING)).toBeFalse());
        it(`String(${TESTING_STRING})`, () => expect(isTrue(TESTING_STRING_CONSTRUCTOR)).toBeFalse());
      });
      // symbol
      describe(`symbol`, () => {
        it(`Symbol(${TESTING_NUMBER})`, () => expect(isTrue(TESTING_SYMBOL_NUMBER)).toBeFalse());
        it(`Symbol(${TESTING_STRING})`, () => expect(isTrue(TESTING_SYMBOL_STRING)).toBeFalse());
      });
      // undefined
      it(`${TESTING_UNDEFINED}`, () => expect(isTrue(TESTING_UNDEFINED)).toBeFalse());
      // ... object.
      describe(`object`, () => {
        // BigInt
        describe(`BigInt`, () => it(`${TESTING_BIGINT}`, () => expect(isTrue(TESTING_BIGINT)).toBeFalse()));
        // Boolean
        describe(`Boolean`, () => {
          it(`${TESTING_TRUE_INSTANCE}`, () => expect(isTrue(TESTING_TRUE_INSTANCE)).toBeTrue());
          it(`${TESTING_FALSE_INSTANCE}`, () => expect(isTrue(TESTING_FALSE_INSTANCE)).toBeFalse());
        });
        // Number
        describe(`Number`, () => it(`new Number(${TESTING_NUMBER})`, () => expect(isTrue(TESTING_NUMBER_INSTANCE)).toBeFalse()));
        // String
        describe(`String`, () => it(`new String(${TESTING_STRING})`, () => expect(isTrue(TESTING_STRING_INSTANCE)).toBeFalse()));
      });
    });
  });
});
