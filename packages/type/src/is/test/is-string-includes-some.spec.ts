// Function.
import { isStringIncludesSome } from '../lib/is-string-includes-some.func';
// Testing.
import {
  // Main.
  Testing,

  // Constant.
  TESTING_BIGINT,
  TESTING_CLASS,
  TESTING_FALSE,
  TESTING_FALSE_INSTANCE,
  TESTING_FUNCTION,
  TESTING_NULL,
  TESTING_NUMBER,
  TESTING_NUMBER_INSTANCE,
  TESTING_OBJECT,
  TESTING_STRING,
  TESTING_STRING_CONSTRUCTOR,
  TESTING_STRING_INSTANCE,
  TESTING_SYMBOL_NUMBER,
  TESTING_SYMBOL_STRING,
  TESTING_TRUE,
  TESTING_TRUE_INSTANCE,
  TESTING_UNDEFINED,

  // Class.
  TestingClass,
} from '@angular-package/testing';
// Execute tests.
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.is.stringIncludesSome.describe,
  tests.is.stringIncludesSome.it
);
/**
 * Tests.
 */
testing.describe(isStringIncludesSome.name, () => {
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
    .it('is DEFINED', () => expect(isStringIncludesSome).toBeDefined())

    // Checks ...
    .describe(`checks`, () => {
      testing
        .it('callback', () => {
          isStringIncludesSome(TESTING_STRING, ['Company'], (result, value, payload) => {
            expect(result).toBeTrue();
            if (payload) {
              expect(value).toEqual(TESTING_STRING);
            }
            return result;
          });
        })
        // ... function.
        .describe(`function`, () => {
          testing
            .it(`TESTING_FUNCTION`, () => expect(isStringIncludesSome(TESTING_FUNCTION, ['1', '2', '3'])).toBeFalse())
            .it(`TestingClass`, () => expect(isStringIncludesSome(TestingClass, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeFalse());
        })
        // ... objects.
        .describe('object', () => {
          testing
            .it(`TESTING_CLASS`, () => expect(isStringIncludesSome(TESTING_CLASS, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeFalse())
            .it(`TESTING_OBJECT`, () => expect(isStringIncludesSome(TESTING_OBJECT, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeFalse());
        })
        // ... primitives.
        .describe(`primitive`, () => {
          testing
            // bigint
            .describe(`bigint`, () =>
              testing.it(`${TESTING_BIGINT}`, () =>
                  expect(isStringIncludesSome(TESTING_BIGINT, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeFalse()))
            // boolean
            .describe(`boolean`, () => {
              testing
                .it(`${TESTING_TRUE}`, () => expect(isStringIncludesSome(TESTING_TRUE, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeFalse())
                .it(`${TESTING_FALSE}`, () => expect(isStringIncludesSome(TESTING_FALSE, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeFalse());
            })
            // null
            .it(`${TESTING_NULL}`, () => expect(isStringIncludesSome(TESTING_NULL, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeFalse())
            // number
            .describe(`number`, () => {
              testing
                .it(`${TESTING_NUMBER}`, () =>
                  expect(isStringIncludesSome(TESTING_NUMBER, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeFalse())
                .it(`Number(${TESTING_NUMBER})`, () =>
                  expect(isStringIncludesSome(TESTING_NUMBER_INSTANCE, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeFalse());
            })
            // string
            .describe(`string`, () => {
              testing
                .it(`TESTING_STRING, TESTING_STRING_LONG`, () => {
                  expect(isStringIncludesSome(TESTING_STRING, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeTrue();
                    // No word exists.
                  expect(isStringIncludesSome(TESTING_STRING_LONG, [
                    'no text',
                    'no text is here'
                  ])).toBeFalse();

                  // Every word exists.
                  expect(isStringIncludesSome(TESTING_STRING_LONG, [
                    'Lorem',
                    'unchanged',
                    'versions',
                    'only',
                  ])).toBeTrue();

                  // Some word exists.
                  expect(isStringIncludesSome(TESTING_STRING_LONG, [
                    'Lorem',
                    'unchanged',
                    'versions',
                    'only',
                    'no text is here'
                  ])).toBeTrue();
                })
                .it(`String(${TESTING_STRING})`, () =>
                  expect(isStringIncludesSome(TESTING_STRING_CONSTRUCTOR, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeTrue());
            })
            // symbol
            .describe(`symbol`, () => {
              testing
                .it(`Symbol(${TESTING_NUMBER})`, () => expect(isStringIncludesSome(TESTING_SYMBOL_NUMBER, [])).toBeFalse())
                .it(`Symbol(${TESTING_STRING})`, () => expect(isStringIncludesSome(TESTING_SYMBOL_STRING, [])).toBeFalse());
            })
            // undefined
            .it(`${TESTING_UNDEFINED}`, () =>
              expect(isStringIncludesSome(TESTING_UNDEFINED, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeFalse())
            // ... object.
            .describe(`object`, () => {
              testing
                // Boolean
                .describe(`Boolean`, () => {
                  testing
                    .it(`${TESTING_TRUE_INSTANCE}`, () =>
                      expect(isStringIncludesSome(TESTING_TRUE_INSTANCE, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeFalse())
                    .it(`${TESTING_FALSE_INSTANCE}`, () =>
                      expect(isStringIncludesSome(TESTING_FALSE_INSTANCE, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeFalse());
                })
                // Number
                .describe(`Number`, () =>
                  testing.it(`new Number(${TESTING_NUMBER})`, () =>
                    expect(isStringIncludesSome(TESTING_NUMBER_INSTANCE, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeFalse()))
                // String
                .describe(`String`, () =>
                  testing.it(`new String(${TESTING_STRING})`, () => {
                    expect(isStringIncludesSome(TESTING_STRING_INSTANCE, [TESTING_STRING, '!@#$%^&*()', '3'])).toBeTrue();

                    // No word exists.
                    expect(isStringIncludesSome(TESTING_STRING_LONG_INSTANCE, [
                      'no text',
                      'no text is here'
                    ])).toBeFalse();

                    // Every word exists.
                    expect(isStringIncludesSome(TESTING_STRING_LONG_INSTANCE, [
                      'Lorem',
                      'unchanged',
                      'versions',
                      'only',
                    ])).toBeTrue();

                    // Some word exists.
                    expect(isStringIncludesSome(TESTING_STRING_LONG_INSTANCE, [
                      'Lorem',
                      'unchanged',
                      'versions',
                      'only',
                      'no text is here'
                    ])).toBeTrue();
                  }));
            });
        });
    });
});
