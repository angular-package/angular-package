// Function.
import { guardObjectSomeKeys } from '../lib/guard-object-some-keys.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_CLASS,
  TESTING_NUMBER,
  TESTING_OBJECT,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.objectSomeKeys.describe,
  tests.guard.objectSomeKeys.it
);
/**
 * Tests.
 */
testing.describe(guardObjectSomeKeys.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardObjectSomeKeys).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    // ... instance.
    .describe(`instance`, () => {
      testing
      .describe(`TESTING_CLASS`, () => {
        testing
        // number.
        .it('has number key', () => {
          expect(guardObjectSomeKeys(TESTING_CLASS, [1030405027])).toBeTrue();
          expect(guardObjectSomeKeys(TESTING_CLASS, [5])).toBeTrue();
        })

        .it('finds getter number', () => expect(guardObjectSomeKeys(TESTING_CLASS, [TESTING_NUMBER])).toBeFalse())

        // string.
        .it('has string key', () => expect(guardObjectSomeKeys(TESTING_CLASS, ['surname'])).toBeTrue())

        // symbol.
        .it('finds getter symbol key', () => {
          expect(guardObjectSomeKeys(TESTING_CLASS, [TESTING_SYMBOL_NUMBER])).toBeFalse();
          expect(guardObjectSomeKeys(TESTING_CLASS, [TESTING_SYMBOL_STRING])).toBeFalse();
        });
      });
    })

    // ... objects.
    .describe('object', () => {
      testing
      .describe(`TESTING_OBJECT`, () => {
        testing
        // number.
        .it('has number key', () => {
          expect(guardObjectSomeKeys(TESTING_OBJECT, [1030405027])).toBeTrue();
          expect(guardObjectSomeKeys(TESTING_OBJECT, [5])).toBeTrue();
          expect(guardObjectSomeKeys(TESTING_OBJECT, [TESTING_NUMBER])).toBeTrue();
        })

        // string.
        .it('has string key', () => {
          expect(guardObjectSomeKeys(TESTING_OBJECT, ['key as string'])).toBeTrue();
          expect(guardObjectSomeKeys(TESTING_OBJECT, ['x'])).toBeTrue();
        })

        // symbol.
        .it('has symbol key', () => {
          expect(guardObjectSomeKeys(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING])).toBeTrue();
          expect(guardObjectSomeKeys(TESTING_OBJECT, [TESTING_SYMBOL_STRING])).toBeTrue();
        });
      });
    })

    .describe('object with some and every key', () => {
      testing
      .describe(`TESTING_OBJECT`, () => {
        testing
        // number.
        .it('has number key or any key', () => {
          expect(guardObjectSomeKeys(TESTING_OBJECT, [1030405027, [5, TESTING_NUMBER]])).toBeTrue();
          expect(guardObjectSomeKeys(TESTING_OBJECT, [[TESTING_NUMBER], [5]])).toBeTrue();
          expect(guardObjectSomeKeys(TESTING_OBJECT, [TESTING_NUMBER])).toBeTrue();
        })

        // string.
        .it('has string key', () => {
          expect(guardObjectSomeKeys(TESTING_OBJECT, ['key as string', ['!@#$%^&*()Company', 'x']])).toBeTrue();
          expect(guardObjectSomeKeys(TESTING_OBJECT, [['x', '!@#$%^&*()Company'], 'key as string'])).toBeTrue();
        })

        // symbol.
        .it('has symbol key', () => {
          expect(guardObjectSomeKeys(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER, [TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING]])).toBeTrue();
          expect(guardObjectSomeKeys(TESTING_OBJECT, [TESTING_SYMBOL_STRING])).toBeTrue();
        });
      });
    });
  });
});
