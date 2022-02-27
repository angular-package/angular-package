// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_CLASS,
  TESTING_FALSE,
  TESTING_NUMBER,
  TESTING_OBJECT,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
// Function.
import { guardObjectKey } from '../lib/guard-object-key.func';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.objectKey.describe,
  tests.guard.objectKey.it
);
/**
 * Tests.
 */
testing.describe(guardObjectKey.name, () => {
  testing
  // Defined.
  .it('is DEFINED', () => expect(guardObjectKey).toBeDefined())

  // Checks ...
  .describe(`guards`, () => {
    testing
    .it('callback', () => {
      guardObjectKey(TESTING_CLASS, 'firstName', (result, value, payload) => {
        expect(result).toBeTrue();
        if (payload) {
          expect(value).toEqual(TESTING_CLASS);
        }
        return result;
      });
    })

    // ... instance.
    .describe(`instance`, () => {
      testing.describe(`CLASS`, () => {
        // number.
        it('has number key', () => {
          expect(guardObjectKey(TESTING_CLASS, 1030405027)).toBeTrue();
          expect(guardObjectKey(TESTING_CLASS, 5)).toBeTrue();
        });

        it('finds getter number', () => expect(guardObjectKey(TESTING_CLASS, TESTING_NUMBER)).toBe(TESTING_FALSE));

        // string.
        it('has string key', () => expect(guardObjectKey(TESTING_CLASS, 'surname')).toBeTrue());

        // symbol.
        it('finds getter symbol key', () => {
          expect(guardObjectKey(TESTING_CLASS, TESTING_SYMBOL_NUMBER)).toBe(TESTING_FALSE);
          expect(guardObjectKey(TESTING_CLASS, TESTING_SYMBOL_STRING)).toBe(TESTING_FALSE);
        });
      });
    })

    // ... objects.
    .describe('object', () => {
      testing.describe(`OBJECT_ONE`, () => {
        testing
          // number.
          .it('has number key', () => {
            expect(guardObjectKey(TESTING_OBJECT, 1030405027)).toBeTrue();
            expect(guardObjectKey(TESTING_OBJECT, 5)).toBeTrue();
            expect(guardObjectKey(TESTING_OBJECT, TESTING_NUMBER)).toBeTrue();
          })

          // string.
          .it('has string key', () => {
            expect(guardObjectKey(TESTING_OBJECT, 'key as string')).toBeTrue();
            expect(guardObjectKey(TESTING_OBJECT, 'x')).toBeTrue();
          })

          // symbol.
          .it('has symbol key', () => {
            expect(guardObjectKey(TESTING_OBJECT, TESTING_NUMBER)).toBeTrue();
            expect(guardObjectKey(TESTING_OBJECT, TESTING_SYMBOL_STRING)).toBeTrue();
          });
      });
    });
  });
});
