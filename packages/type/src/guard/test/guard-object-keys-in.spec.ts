// Function.
import { guardObjectKeysIn } from '../lib/guard-object-keys-in.func';
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
  tests.guard.objectKeysIn.describe,
  tests.guard.objectKeysIn.it
);
/**
 * Tests.
 */
testing.describe(guardObjectKeysIn.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardObjectKeysIn).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    // ... instance.
    .describe(`instance`, () => {
      testing.describe(`TESTING_CLASS`, () => {
        testing
        // number.
        .it('has number key', () => {
          expect(guardObjectKeysIn(TESTING_CLASS, [1030405027])).toBeTrue();
          expect(guardObjectKeysIn(TESTING_CLASS, [5])).toBeTrue();
        })

        .it('finds getter number', () => expect(guardObjectKeysIn(TESTING_CLASS, [TESTING_NUMBER])).toBeTrue())

        // string.
        .it('has string key', () => expect(guardObjectKeysIn(TESTING_CLASS, ['surname'])).toBeTrue())

        // symbol.
        .it('finds getter symbol key', () => {
          expect(guardObjectKeysIn(TESTING_CLASS, [TESTING_SYMBOL_NUMBER])).toBeTrue();
          expect(guardObjectKeysIn(TESTING_CLASS, [TESTING_SYMBOL_STRING])).toBeTrue();
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
          expect(guardObjectKeysIn(TESTING_OBJECT, [1030405027])).toBeTrue();
          expect(guardObjectKeysIn(TESTING_OBJECT, [5])).toBeTrue();
          expect(guardObjectKeysIn(TESTING_OBJECT, [TESTING_NUMBER])).toBeTrue();
        })

        // string.
        .it('has string key', () => {
          expect(guardObjectKeysIn(TESTING_OBJECT, ['key as string'])).toBeTrue();
          expect(guardObjectKeysIn(TESTING_OBJECT, ['x'])).toBeTrue();
        })

        // symbol.
        .it('has symbol key', () => {
          expect(guardObjectKeysIn(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER, TESTING_SYMBOL_STRING])).toBeTrue();
          expect(guardObjectKeysIn(TESTING_OBJECT, [TESTING_SYMBOL_STRING])).toBeTrue();
        });
      });
    })

    .describe('object with some and every key', () => {
      testing.describe(`TESTING_OBJECT`, () => {
        testing
        // number.
        .it('has number key or any key', () => {
          expect(guardObjectKeysIn(TESTING_OBJECT, [1030405027, 'key as string'])).toBeTrue();
          expect(guardObjectKeysIn(TESTING_OBJECT, [5])).toBeTrue();
          expect(guardObjectKeysIn(TESTING_OBJECT, [TESTING_NUMBER])).toBeTrue();
        })

        // string.
        .it('has string key', () => {
          expect(guardObjectKeysIn(TESTING_OBJECT, ['key as string'])).toBeTrue();
          expect(guardObjectKeysIn(TESTING_OBJECT, ['x'])).toBeTrue();
        })

        // symbol.
        .it('has symbol key', () => {
          expect(guardObjectKeysIn(TESTING_OBJECT, [TESTING_SYMBOL_NUMBER])).toBeTrue();
          expect(guardObjectKeysIn(TESTING_OBJECT, [TESTING_SYMBOL_STRING])).toBeTrue();
        });
      });
    });
  });
});
