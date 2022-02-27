// Function.
import { guardStringIncludes } from '../lib/guard-string-includes.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.guard.stringIncludes.describe,
  tests.guard.stringIncludes.it
);
/**
 * Tests.
 */
testing.describe(guardStringIncludes.name, () => {
  const TESTING_STRING_LONG = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
  like Aldus PageMaker including versions of Lorem Ipsum.`;

  const TESTING_STRING_LONG_INSTANCE = new String(TESTING_STRING_LONG);

  testing
    // Defined.
    .it('is DEFINED', () => expect(guardStringIncludes).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          guardStringIncludes(TESTING_STRING, ['Company'], (result, value, payload) => {
            expect(result).toBeTrue();
            if (payload) {
              expect(value).toEqual(TESTING_STRING);
            }
            return result;
          });
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // string
            .describe(`string`, () => {
              testing
                .it(`${TESTING_STRING}`, () => {
                  expect(guardStringIncludes(TESTING_STRING, ['Company'])).toBeTrue();
                  expect(guardStringIncludes(TESTING_STRING, [TESTING_STRING, '!@#$%^&*()'])).toBeTrue();
                    // No word exists.
                  expect(guardStringIncludes(TESTING_STRING_LONG, [
                    'no text',
                    'no text is here'
                  ])).toBeFalse();

                  // Every word exists.
                  expect(guardStringIncludes(TESTING_STRING_LONG_INSTANCE, [
                    'Lorem',
                    'unchanged',
                    'versions',
                    'only',
                  ])).toBeTrue();

                  // Some word exists.
                  expect(guardStringIncludes(TESTING_STRING_LONG, [
                    'Lorem',
                    'unchanged',
                    'versions',
                    'only',
                    'no text is here'
                  ])).toBeFalse();
                })
                .it(`String(${TESTING_STRING})`, () =>
                  expect(guardStringIncludes(TESTING_STRING_CONSTRUCTOR, [TESTING_STRING, '!@#$%^&*()'])).toBeTrue());
            });
        });
    });
});
