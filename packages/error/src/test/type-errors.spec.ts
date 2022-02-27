
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { TypeError } from '../lib/type-error.class';
import { TypeErrors } from '../lib/type-errors.class';
import { testError } from './test-error.func';
/**
 * Initialize `Testing`.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('[counter] TypeErrors', () => {
  // Prepare the values.
  const id1 = '(E:127)';
  const id2 = '(RE:227)';
  const id3 = '(TE:327)';
  const id4 = '(VE:427)';

  const fix = 'Provide string type value. Read more: https://duckduckgo.com/';
  const problem = 'The value must be a string type.';
  const type = 'number';
  const template = `Problem(VE{id}): {problem}\nFix: {fix} {type}`;

  let errors = new TypeErrors(id1, id2, id3, id4);

  beforeEach(() => errors = new TypeErrors(id1, id2, id3, id4));

  testing
    .describe(`[counter] Methods`, () => {
      testing

        /*
          TypeErrors.prototype.delete()
        */
        .it(`TypeErrors.prototype.delete()`, () => {
          toBe.instance(errors, TypeErrors);
          errors.set(problem, fix, '(E:127)');
          expect(errors.has('(E:127)')).toBeTrue();
          errors.delete('(E:127)');
          expect(errors.has('(E:127)')).toBeFalse();
        })

        /*
          TypeErrors.prototype.has()
        */
        .it(`TypeErrors.prototype.has()`, () => {
          errors.set(problem, fix, id4, type, template);
          expect(errors.has(id4)).toBeTrue();
        })

        /*
          TypeErrors.prototype.set()
        */
        .it(`TypeErrors.prototype.set()`, () => {
          errors.set(problem, fix, id3, type, template);
          expect(errors.has(id3)).toBeTrue();
        })

        /*
          TypeErrors.prototype.throw()
        */
        .it(`TypeErrors.prototype.throw()`, () => {
          try {
            errors.set(problem, fix, id4).throw(id4);
          } catch (e) {
            if (e instanceof TypeError) {
              testError(e, {
                fix,
                id: id4,
                name: 'TypeError',
                message: `Problem${id4}: ${problem} => Fix: ${fix} must be of the ${''}`,
                problem,
                template: `Problem{id}: {problem} => Fix: {fix} must be of the {type}`
              });
            }
          }

          try {
            errors.set(problem, fix, id4, type).throw(id4);
          } catch (e) {
            if (e instanceof TypeError) {
              testError(e, {
                fix,
                id: id4,
                name: 'TypeError',
                message: `Problem${id4}: ${problem} => Fix: ${fix} must be of the ${type}`,
                problem,
                template: `Problem{id}: {problem} => Fix: {fix} must be of the {type}`,
                type
              });
            }
          }

          try {
            errors.set(problem, fix, id4, type, template).throw(id4);
          } catch (e) {
            if (e instanceof TypeError) {
              testError(e, {
                fix,
                id: id4,
                name: 'TypeError',
                message: `Problem(VE${id4}): ${problem}\nFix: ${fix} ${type}`,
                problem,
                template,
                type
              });
            }
          }
        });
    });
});
