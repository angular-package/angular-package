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
import { guardStringLength } from '../lib/guard-string-length.func';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.stringLength.describe,
  tests.guard.stringLength.it
);
/**
 * Tests.
 */
testing.describe(`guardStringLength()`, () => {
  // Defined.
  testing
    .it('is DEFINED', () => expect(guardStringLength).toBeDefined())

    // Checks ...
    .describe(`guards`, () =>
      testing
        .it('with callback and payload', () => {
          guardStringLength(TESTING_STRING, 17, (result, value, payload) => {
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
                .it(`${TESTING_STRING}`, () =>
                  expect(guardStringLength(TESTING_STRING, 17)).toBeTrue()
                )
                .it(`${TESTING_STRING}`, () =>
                  expect(guardStringLength(TESTING_STRING, 16)).toBeFalse()
                )
                .it(`${TESTING_STRING}`, () =>
                  expect(guardStringLength(TESTING_STRING, 18)).toBeFalse()
                )
            )
        )
    )
    .describe(`String`, () =>
      testing
        .it(`new String(${TESTING_STRING})`, () =>
          (expect(guardStringLength(TESTING_STRING_INSTANCE, 17)).toBeTrue(),
          expect(guardStringLength(TESTING_STRING_INSTANCE, 16)).toBeFalse(),
          expect(guardStringLength(TESTING_STRING_INSTANCE, 18)).toBeFalse())
        )
    );
});
