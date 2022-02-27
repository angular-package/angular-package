// Function.
import { guardDate } from '../lib/guard-date.func';
// Object.
import { guard } from '../lib/guard.object';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_DATE,
  TESTING_FUNCTION,

  // Class.
  TestingPerson
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.date.describe,
  tests.guard.date.it
);
/**
 * Tests.
 */
testing.describe(guardDate.name, () => {
  let guardSpy: any;
  testing
    .it('is DEFINED', () => expect(guardDate).toBeDefined());

  beforeEach(() => guardSpy = { ...{}, ...guard });
  testing
  .it('with callback and payload', () => {
    guardDate(TESTING_DATE, (result, value, payload) => {
      expect(result).toBeTrue();
      expect(value).toEqual(TESTING_DATE);
      if (payload) {
        expect(payload.action).toEqual('action');
        expect(payload.name).toEqual('name');
        expect(payload.param).toEqual('param');
      }
      return result;
    }, { action: 'action', name: 'name', param: 'param' });
  })
  .it(`called with ${TESTING_DATE}`, () => {
      spyOn(guardSpy, 'date').withArgs(TESTING_DATE).and.returnValue(true);
      guardSpy.date(TESTING_DATE);
      expect(guardSpy.date).toHaveBeenCalled();
  })
  .it(`guard new Date()`, () => {
    expect(guardDate(new Date('December 17, 1995 03:24:00'))).toBeTrue();
    expect(guardDate(new Date('1995-12-17T03:24:00'))).toBeTrue();
    expect(guardDate(new Date(1995, 11, 17))).toBeTrue();
    expect(guardDate(new Date(1995, 11, 17, 3, 24, 0))).toBeTrue();
    expect(guardDate(new Date(628021800000))).toBeTrue();
    expect(guardDate(new Date(98, 1))).toBeTrue();
    expect(guardDate(new Date(22, 1))).toBeTrue();

    expect(guard.date(new Date('December 17, 1995 03:24:00'))).toBeTrue();
    expect(guard.date(new Date('1995-12-17T03:24:00'))).toBeTrue();
    expect(guard.date(new Date(1995, 11, 17))).toBeTrue();
    expect(guard.date(new Date(1995, 11, 17, 3, 24, 0))).toBeTrue();
    expect(guard.date(new Date(628021800000))).toBeTrue();
    expect(guard.date(new Date(98, 1))).toBeTrue();
    expect(guard.date(new Date(22, 1))).toBeTrue();
  })
  .it(`guard new Date() false`, () => {
    expect(guardDate(new Date('invalid date'))).toBeFalse();
    expect(guard.date(new Date('invalid date'))).toBeFalse();
  });
});
