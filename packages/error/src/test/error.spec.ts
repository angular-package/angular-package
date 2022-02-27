// External class.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { typeOf } from '@angular-package/type';
// Class.
import { Error } from '../lib/error.class';
/**
 * Initialize `Testing`.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('[counter] Error', () => {
  // Prepare the values.
  const fix = 'Provide string type value. Read more: https://duckduckgo.com/';
  const id = '427';
  const problem = 'The value must be a string type.';
  const template = `Problem(VE{id}): {problem}\nFix: {fix}`;
  let error = new Error(problem, fix, id, template);

  beforeEach(() => error = new Error(problem, fix, id, template));

  testing

    /**
     * Static properties.
     */
    .describe(`Static properties`, () => {
      testing
        .it(`Error.template`, () => {
          expect(Error.template).toEqual(`Problem{id}: {problem} => Fix: {fix}`);
          Error.template = `{problem} => Fix: {fix} of {id}`;
          expect(Error.template).toEqual(`{problem} => Fix: {fix} of {id}`);
          Error.template = `Problem{id}: {problem} => Fix: {fix}`;
      });
    })

    /**
     * Instance accessors.
     */
    .describe(`Instance accessors`, () => {
      testing

        /**
         * Error.prototype.fix
         */
        .it(`Error.prototype.fix`, () => {
          expect(error.fix).toEqual(fix);
          toBe.string(fix);
        })

        /**
         * Error.prototype.id
         */
        .it(`Error.prototype.id`, () => expect(error.id).toEqual(id))

        /**
         * Error.prototype.name
         */
        .it(`Error.prototype.name`, () => expect(error.name).toEqual('Error'))

        /**
         * Error.prototype.problem
         */
        .it(`Error.prototype.problem`, () => expect(error.problem).toEqual(problem))

        /**
         * Error.prototype.template
         */
        .it(`Error.prototype.template`, () => expect(error.template).toEqual(template))

        /**
         * [Symbol.toStringTag]
         */
        .it(`[Symbol.toStringTag]`, () => {
          expect(typeOf(error)).toEqual('error');
          expect(Object.prototype.toString.call(error)).toEqual('[object Error]');
        });
    })

    /**
     * Static methods.
     */
    .describe(`Static methods`, () => {
      testing

        /**
         * Error.define()
         */
        .it(`Error.define()`, () => {
          const e = Error.define(problem, fix, id, template);
          expect(e.message).toEqual(`Problem(VE${id}): ${problem}\nFix: ${fix}`);
          expect(e.fix).toEqual(fix);
          expect(e.id).toEqual(id);
          expect(e.problem).toEqual(problem);
        })

        /**
         * Error.isError()
         */
        .it(`Error.isError()`, () => {
          expect(Error.isError(error)).toBeTrue();
          expect(Error.isError(error, id)).toBeTrue();
        });
    })

    /**
     * Constructor.
     */
    .describe(`constructor()`, () => {
      testing
        .it(`(problem, fix, id)`, () => {
          const e = new Error(problem, fix, id);
          expect(e.message).toEqual(`Problem${id}: ${e.problem} => Fix: ${e.fix}`);
          expect(e.fix).toEqual(fix);
          expect(e.id).toEqual(id);
          expect(e.problem).toEqual(problem);
        })
        .it(`(problem, fix, id, template)`, () => {
          const e = new Error(problem, fix, id, template);
          expect(e.message).toEqual(`Problem(VE${id}): ${problem}\nFix: ${fix}`);
          expect(e.fix).toEqual(fix);
          expect(e.id).toEqual(id);
          expect(e.problem).toEqual(problem);
        })
        .it(`(problem, fix)`, () => {
          const e = new Error(problem, fix);
          expect(e.message).toEqual(`Problem: ${e.problem} => Fix: ${e.fix}`);
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
        });
    });
});
