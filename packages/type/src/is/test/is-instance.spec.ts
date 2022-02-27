// Function.
import { isInstance } from '../lib/is-instance.func';
// Testing.
import {
  // Main.
  Testing,

  // Constants.
  TESTING_BIGINT,
  TESTING_CLASS,
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_FUNCTION,
  TESTING_FUNCTION_CONSTRUCTOR,
  TESTING_NULL,
  TESTING_NUMBER,
  TESTING_NUMBER_CONSTRUCTOR,
  TESTING_NUMBER_INSTANCE,
  TESTING_OBJECT,
  TESTING_PERSON,
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  TESTING_UNDEFINED,

  // Class.
  TestingClass,
  TestingPerson,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.is.instance.describe,
  tests.is.instance.it
);
/**
 * Tests.
 */
testing.describe(isInstance.name, () => {
  const anyInstance: any = new (TESTING_FUNCTION_CONSTRUCTOR as any)('First name', 'Sur name', 27);
  testing
    // TRUE.
    .it('is DEFINED', () => expect(isInstance).toBeDefined())
    .it(`CLASS instance of Class`, () => expect(isInstance(TESTING_CLASS, TestingClass)).toBeTrue())
    .it(`PERSON instance of Person`, () => expect(isInstance(TESTING_PERSON, TestingPerson)).toBeTrue())
    .it(`CLASS instance of Class expect result to be true`, () => {
      isInstance(TESTING_CLASS, TestingClass, (result: boolean) => {
        expect(result).toBeTrue();
        return result;
      });
    })
    .it(`function constructor`, () => expect(isInstance(anyInstance, TESTING_FUNCTION_CONSTRUCTOR as any)).toBeTrue())

    // FALSE.
    .it(`PERSON_COPY not instance of Person`, () => {
      class TestingPersonCopy {
        firstName = '';
        surname = '';
        age = 15;
      }
      expect(isInstance(new TestingPersonCopy(), TestingPerson)).toBeFalse();
    })
    .it(`'boolean' | Boolean`, () => {
      expect(isInstance(TESTING_FALSE, TESTING_FALSE as any)).toBeFalse();
      expect(isInstance(TESTING_TRUE, TESTING_TRUE as any)).toBeFalse();
      expect(isInstance(TESTING_FALSE_INSTANCE, TESTING_FALSE_INSTANCE as any)).toBeFalse();
      expect(isInstance(TESTING_TRUE_INSTANCE, TESTING_TRUE_INSTANCE as any)).toBeFalse();
    })
    .it(`'bigint'`, () => expect(isInstance(TESTING_BIGINT, TESTING_BIGINT as any)).toBeFalse())
    .it(`TestingClass`, () => expect(isInstance(TestingClass, TestingClass)).toBeFalse())
    .it(`FUNCTION instance of Function`, () => expect(isInstance(TESTING_FUNCTION, Function)).toBeFalse())
    .it(`NULL`, () => expect(isInstance(TESTING_NULL, TESTING_NULL as any)).toBeFalse())
    .it(`'number' | Number`, () => {
      expect(isInstance(TESTING_NUMBER, TESTING_NUMBER as any)).toBeFalse();
      expect(isInstance(TESTING_NUMBER_INSTANCE, TESTING_NUMBER_CONSTRUCTOR as any)).toBeFalse();
      expect(isInstance(TESTING_NUMBER_INSTANCE, TESTING_NUMBER_INSTANCE as any)).toBeFalse();
    })
    .it(`'object' | Object`, () => expect(isInstance(TESTING_OBJECT, TESTING_OBJECT as any)).toBeFalse())
    .it(`'string' | String`, () => {
      expect(isInstance(TESTING_STRING, TESTING_STRING as any)).toBeFalse();
      expect(isInstance(TESTING_STRING_INSTANCE, TESTING_STRING_CONSTRUCTOR as any)).toBeFalse();
      expect(isInstance(TESTING_STRING_INSTANCE, TESTING_STRING_INSTANCE as any)).toBeFalse();
    })

    // FALSE
    .it(`undefined`, () => expect(isInstance(TESTING_UNDEFINED, TESTING_UNDEFINED as any)).toBeFalse());
});
