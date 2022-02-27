// Function.
import { guardInstance } from '../lib/guard-instance.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_CLASS,
  TESTING_FALSE_INSTANCE,
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
  TESTING_TRUE_INSTANCE,
  TESTING_FUNCTION_CONSTRUCTOR_PERSON,
  TESTING_PERSON,

  // Class.
  TestingClass,
  TestingPerson,
  TestingPersonShape
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.instance.describe,
  tests.guard.instance.it
);
/**
 * Tests.
 */
testing.describe(guardInstance.name, () => {
  const personInstance: TestingPersonShape = new (TESTING_FUNCTION_CONSTRUCTOR_PERSON as any)('First name', 'Sur name', 27);

  testing
  // Defined.
  .it('is DEFINED', () => expect(guardInstance).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    .it('callback', () => {
      guardInstance(TESTING_CLASS, TestingClass, (result, value, payload) => {
        expect(result).toBeTrue();
        if (payload) {
          expect(value).toEqual(TESTING_CLASS);
        }
        return result;
      });
    })
    // ... instance.
    .describe(`instance`, () => {
      testing
      .it(`CLASS`, () => expect(guardInstance(TESTING_CLASS, TestingClass)).toBeTrue())
      .it(`class TestingPerson`, () => expect(guardInstance(TESTING_PERSON, TestingPerson)).toBeTrue())
      .it(`function`, () => expect(guardInstance(personInstance, TESTING_FUNCTION_CONSTRUCTOR_PERSON as any)).toBeTrue());
    })

    // ... primitives.
    .describe(`primitive`, () => {
      testing
      // boolean
      .describe(`boolean`, () => {
        testing
        .it(`${TESTING_TRUE_INSTANCE}`, () => expect(guardInstance(TESTING_TRUE_INSTANCE, Boolean)).toBeTrue())
        .it(`${TESTING_FALSE_INSTANCE}`, () => expect(guardInstance(TESTING_FALSE_INSTANCE, Boolean)).toBeTrue());
      })

      // number
      .describe(`number`, () => {
        testing
        .it(`Number(${TESTING_NUMBER})`, () => expect(guardInstance(TESTING_NUMBER_CONSTRUCTOR, Number)).toBeFalse())
        .it(`new Number(${TESTING_NUMBER})`, () => expect(guardInstance(TESTING_NUMBER_INSTANCE, Number)).toBeTrue());
      })

      // string
      .describe(`string`, () => {
        it(`String(${TESTING_STRING})`, () => expect(guardInstance(TESTING_STRING_CONSTRUCTOR, String)).toBeFalse());
        it(`new String(${TESTING_STRING})`, () => expect(guardInstance(TESTING_STRING_INSTANCE, String)).toBeTrue());
      });
    });
  });
});
