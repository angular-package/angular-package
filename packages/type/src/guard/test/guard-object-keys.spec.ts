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
// Function.
import { guardObjectKeys } from '../lib/guard-object-keys.func';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.objectKeys.describe,
  tests.guard.objectKeys.it
);
/**
 * Tests.
 */
testing.describe(guardObjectKeys.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardObjectKeys).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    // ... instance.
    .describe(`instance`, () => {
      testing.describe(`TESTING_CLASS`, () => {
        testing
        // number.
        .it('has number key', () => {
          expect(guardObjectKeys(TESTING_CLASS, [1030405027])).toBeTrue();
          expect(guardObjectKeys(TESTING_CLASS, [5])).toBeTrue();
        })

        .it('finds getter number', () => expect(guardObjectKeys(TESTING_CLASS, [TESTING_NUMBER])).toBeFalse())

        // string.
        .it('has string key', () => expect(guardObjectKeys(TESTING_CLASS, ['surname'])).toBeTrue())

        // symbol.
        .it('finds getter symbol key', () => {
          expect(guardObjectKeys(TESTING_CLASS, [TESTING_SYMBOL_NUMBER])).toBeFalse();
          expect(guardObjectKeys(TESTING_CLASS, [TESTING_SYMBOL_STRING])).toBeFalse();
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
          expect(guardObjectKeys(TESTING_OBJECT, [1030405027])).toBeTrue();
          expect(guardObjectKeys(TESTING_OBJECT, [5])).toBeTrue();
          expect(guardObjectKeys(TESTING_OBJECT, [TESTING_NUMBER])).toBeTrue();
        })

        // string.
        .it('has string key', () => {
          expect(guardObjectKeys(TESTING_OBJECT, ['key as string'])).toBeTrue();
          expect(guardObjectKeys(TESTING_OBJECT, ['x'])).toBeTrue();
        })

        // symbol.
        .it('has symbol key', () => {
          expect(guardObjectKeys(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING])).toBeTrue();
          expect(guardObjectKeys(TESTING_OBJECT, [TESTING_SYMBOL_STRING])).toBeTrue();
        });
      });
    })

    .describe('object with some and every key', () => {
      testing.describe(`TESTING_OBJECT`, () => {
        testing
        // number.
        .it('has number key or any key', () => {
          expect(guardObjectKeys(TESTING_OBJECT, [1030405027, 'key as string'])).toBeTrue();
          expect(guardObjectKeys(TESTING_OBJECT, [5])).toBeTrue();
          expect(guardObjectKeys(TESTING_OBJECT, [TESTING_NUMBER])).toBeTrue();
        })

        // string.
        .it('has string key', () => {
          expect(guardObjectKeys(TESTING_OBJECT, ['key as string'])).toBeTrue();
          expect(guardObjectKeys(TESTING_OBJECT, ['x'])).toBeTrue();
        })

        // symbol.
        .it('has symbol key', () => {
          expect(guardObjectKeys(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER])).toBeTrue();
          expect(guardObjectKeys(TESTING_OBJECT, [TESTING_SYMBOL_STRING])).toBeTrue();
        });
      });
    });
  });
});
