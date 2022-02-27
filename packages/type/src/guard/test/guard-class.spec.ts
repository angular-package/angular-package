// Object.
import { guard } from '../lib/guard.object';
// Function.
import { guardClass } from '../lib/guard-class.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_FUNCTION,
  TestingPerson
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.class.describe,
  tests.guard.class.it
);
/**
 * Tests.
 */
testing.describe(guardClass.name, () => {
  testing
  .it('is DEFINED', () => expect(guardClass).toBeDefined())
  .it('with callback and payload', () => {
    guardClass(TestingPerson, (result, value, payload) => {
      expect(result).toBeTrue();
      expect(value).toEqual(TestingPerson);
      if (payload) {
        expect(payload.action).toEqual('action');
        expect(payload.name).toEqual('name');
        expect(payload.param).toEqual('param');
      }
      return result;
    }, { action: 'action', name: 'name', param: 'param' });
  })
  .it(`Class`, () => {
    expect(guardClass(TestingPerson)).toBeTrue();
    expect(guard.class(TestingPerson)).toBeTrue();
  })
  .it(`FUNCTION`, () => {
    expect(guardClass(TESTING_FUNCTION)).toBeFalse();
    expect(guard.class(TESTING_FUNCTION)).toBeFalse();
  });
});
