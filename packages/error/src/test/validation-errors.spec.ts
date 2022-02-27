import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { ValidationErrors } from '../lib/validation-errors.class';
import { testError } from './test-error.func';
/**
 * Initialize `Testing`.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('[counter] ValidationErrors', () => {
  // Prepare the values.
  const id1 = '(E:127)';
  const id2 = '(RE:227)';
  const id3 = '(TE:327)';
  const id4 = '(VE:427)';

  const fix = 'Provide string type value. Read more: https://duckduckgo.com/';
  const problem = 'The value must be a string type.';
  const template = `Problem(VE{id}): {problem}\nFix: {fix} {type}`;

  let errors = new ValidationErrors(id1, id2, id3, id4);

  beforeEach(() => (errors = new ValidationErrors(id1, id2, id3, id4)));

  testing.describe(`[counter] Methods`, () => {
    testing

      /*
          ValidationErrors.prototype.delete()
        */
      .it(`ValidationErrors.prototype.delete()`, () => {
        toBe.instance(errors, ValidationErrors);
        errors.set(problem, fix, '(E:127)');
        expect(errors.has('(E:127)')).toBeTrue();
        errors.delete('(E:127)');
        expect(errors.has('(E:127)')).toBeFalse();
      })

      /*
          ValidationErrors.prototype.has()
        */
      .it(`ValidationErrors.prototype.has()`, () => {
        errors.set(problem, fix, id4);
        expect(errors.has(id4)).toBeTrue();
      })

      /*
          ValidationErrors.prototype.set()
        */
      .it(`ValidationErrors.prototype.set()`, () => {
        errors.set(problem, fix, id3, template);
        expect(errors.has(id3)).toBeTrue();
      })

      /*
          ValidationErrors.prototype.throw()
        */
      .it(`ValidationErrors.prototype.throw()`, () => {
        try {
          errors.set(problem, fix, id4, template).throw('(VE:427)');
        } catch (e) {
          if (e instanceof Error) {
            testError(e, {
              fix,
              id: id4,
              name: 'ValidationError',
              message: `Problem(VE${id4}): ${problem}\nFix: ${fix} ${''}`,
              problem,
              template,
            });
          }
        }
      });
  });
});
