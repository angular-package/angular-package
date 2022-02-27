// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_STRING,
  TESTING_STRING_INSTANCE,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
// Function.
import { guardStringLengthBetween } from '../lib/guard-string-length-between.func';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.stringLengthBetween.describe,
  tests.guard.stringLengthBetween.it
);
/**
 * Tests.
 */
testing.describe(`guardStringLengthBetween()`, () => {
  // Defined.
  testing
    .it('is DEFINED', () => expect(guardStringLengthBetween).toBeDefined())

    // Checks ...
    .describe(`guards`, () =>
      testing
        .it('with callback and payload', () => {
          guardStringLengthBetween(TESTING_STRING, 3, 1000, (result, value, payload) => {
            expect(result).toBeTrue();
            expect(value).toEqual(TESTING_STRING);
            if (payload) {
              expect(payload.action).toEqual('action');
              expect(payload.name).toEqual('name');
              expect(payload.param).toEqual('param');
            }
            return result;
          }, { action: 'action', name: 'name', param: 'param' });
        })

        // ... primitives.
        .describe(`primitive`, () =>
          testing
            .describe(`string`, () =>
              testing
                .it(`${TESTING_STRING} minimum 3`, () =>
                  expect(guardStringLengthBetween(TESTING_STRING, 3, 1000)).toBeTrue()
                )
                .it(`${TESTING_STRING} maximum 3`, () =>
                  expect(guardStringLengthBetween(TESTING_STRING, 0, 3)).toBeFalse()
                )
            )
            .it(`${TESTING_STRING} minimum 18`, () =>
              expect(guardStringLengthBetween(TESTING_STRING, 18, 1000)).toBeFalse()
            )
            .it(`${TESTING_STRING} maximum 17`, () =>
              expect(guardStringLengthBetween(TESTING_STRING, 0, 17)).toBeTrue()
            )
            .it(`${TESTING_STRING} minimum 5 maximum 21`, () =>
              expect(guardStringLengthBetween(TESTING_STRING, 5, 21)).toBeTrue()
            )
        )
    )
    .describe(`String`, () =>
      testing
        .it(`new String(${TESTING_STRING}) minimum 3`, () =>
          expect(guardStringLengthBetween(TESTING_STRING_INSTANCE, 3, 1000)).toBeTrue()
        )
        .it(`new String(${TESTING_STRING}) maximum 3`, () =>
          expect(guardStringLengthBetween(TESTING_STRING_INSTANCE, 0, 3)).toBeFalse()
        )
        .it(`new String(${TESTING_STRING}) minimum 18`, () =>
          expect(guardStringLengthBetween(TESTING_STRING_INSTANCE, 18, 1000)).toBeFalse()
        )
        .it(`new String(${TESTING_STRING}) maximum 17`, () =>
          expect(guardStringLengthBetween(TESTING_STRING_INSTANCE, 0, 17)).toBeTrue()
        )
        .it(`new String(${TESTING_STRING}) minimum 5 maximum 21`, () =>
          expect(guardStringLengthBetween(TESTING_STRING_INSTANCE, 5, 21)).toBeTrue()
        )
    );
});
