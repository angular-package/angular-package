import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { RangeErrors } from '../lib/range-errors.class';
import { RangeError } from '../lib/range-error.class';
// Function.
import { testError } from './test-error.func';
/**
 * Initialize `Testing`.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('[counter] RangeErrors', () => {
  // Prepare the values.
  const id1 = '(E:127)';
  const id2 = '(RE:227)';
  const id3 = '(TE:327)';
  const id4 = '(VE:427)';

  const min = 9;
  const max = 27;

  const fix = 'Provide string type value. Read more: https://duckduckgo.com/';
  const problem = 'The value must be a string type.';
  const template = `Problem(VE{id}): {problem}\nFix: {fix} {min} {max}`;

  let errors = new RangeErrors(id1, id2, id3, id4);

  beforeEach(() => (errors = new RangeErrors(id1, id2, id3, id4)));

  testing.describe(`[counter] Methods`, () => {
    testing

      /*
          RangeErrors.prototype.delete()
        */
      .it(`RangeErrors.prototype.delete()`, () => {
        toBe.instance(errors, RangeErrors);
        errors.set(problem, fix, '(E:127)');
        expect(errors.has('(E:127)')).toBeTrue();
        errors.delete('(E:127)');
        expect(errors.has('(E:127)')).toBeFalse();
      })

      /*
          RangeErrors.prototype.has()
        */
      .it(`RangeErrors.prototype.has()`, () => {
        errors.set(problem, fix, id4, min, max, template);
        expect(errors.has(id4)).toBeTrue();
      })

      /*
          RangeErrors.prototype.set()
        */
      .it(`RangeErrors.prototype.set()`, () => {
        errors.set(problem, fix, id3, min, max, template);
        expect(errors.has(id3)).toBeTrue();
      })

      /*
          RangeErrors.prototype.throw()
        */
      .it(`RangeErrors.prototype.throw()`, () => {
        try {
          errors.set(problem, fix, id4, min, max, template).throw(id4);
        } catch (e) {
          if (e instanceof RangeError) {
            testError(e, {
              fix,
              id: id4,
              name: 'RangeError',
              message: `Problem(VE${id4}): ${problem}\nFix: ${fix} ${min} ${max}`,
              min,
              max,
              range: {min, max},
              problem,
              template,
            });
          }
        }
      });
  });
});
