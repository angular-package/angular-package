// Decorator.
import { isParam } from '../lib/is-param.decorator';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_NUMBER,
  TESTING_STRING,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';

class TestClass {
  @isParam('object', 'string', 'number')
  public testMethod(object?: any, firstName?: any, age?: any): { object: any, firstName: any, age: any } {
    return {object, firstName, age};
  }
}
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.is.param.describe,
  tests.is.param.it
);
/**
 * Tests.
 */
testing.describe(isParam.name, () => {
  const resultTRUE = new TestClass().testMethod({firstName: 'NoName'}, TESTING_STRING, TESTING_NUMBER);
  const resultFALSE = new TestClass().testMethod(TESTING_NUMBER, {firstName: 'NoName'}, TESTING_STRING);

  testing
  // Defined.
  .it('is DEFINED', () => expect(isParam).toBeDefined())

  // Checks ...
  .describe(`checks`, () => {
    testing
    // ... objects.
    .describe('object', () => {
      testing
      .it(`TESTING_CLASS`, () => {
        expect(resultTRUE.object).toEqual({firstName: 'NoName'});
        expect(resultFALSE.object).toBeUndefined();
      });
    })

    // ... primitives.
    .describe(`primitive`, () => {
      testing
      // number
      .describe(`number`, () => {
        testing
        .it(`${TESTING_NUMBER}`, () => {
          expect(resultTRUE.age).toBe(TESTING_NUMBER);
          expect(resultFALSE.age).toBeUndefined();
        });
      })

      // string
      .describe(`string`, () => {
        testing
        .it(`${TESTING_STRING}`, () => {
          expect(resultTRUE.firstName).toBe(TESTING_STRING);
          expect(resultFALSE.firstName).toBeUndefined();
        });
      });
    });
  });
});
