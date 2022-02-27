// External class.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { typeOf } from '@angular-package/type';
// Class.
import { TypeError } from '../lib/type-error.class';
/**
 * Initialize `Testing`.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('[counter] TypeError', () => {
  // Prepare the values.
  const fix = 'Provide string type value. Read more: https://duckduckgo.com/';
  const id = '427';
  const problem = 'The value must be a string type.';
  const template = `Problem(VE{id}): {problem} {type}\nFix: {fix}`;
  const type = 'Symbol';

  let typeError = new TypeError(problem, fix, id, type, template);

  beforeEach(() => typeError = new TypeError(problem, fix, id, type, template));

  testing

    /**
     * Static properties.
     */
    .describe(`Static properties`, () => {
      testing
        .it(`TypeError.template`, () => {
          expect(TypeError.template).toEqual(`Problem{id}: {problem} => Fix: {fix} must be of the {type}`);
          TypeError.template = `{problem} => Fix: {fix} of {id}`;
          expect(TypeError.template).toEqual(`{problem} => Fix: {fix} of {id}`);
          TypeError.template = `Problem{id}: {problem} => Fix: {fix} must be of the {type}`;
      });
    })

    /**
     * Instance accessors.
     */
    .describe(`Instance accessors`, () => {
      testing

        /**
         * TypeError.prototype.expectedType
         */
         .it(`TypeError.prototype.expectedType`, () => expect(typeError.type).toEqual(type))

        /**
         * TypeError.prototype.fix
         */
        .it(`TypeError.prototype.fix`, () => expect(typeError.fix).toEqual(fix))

        /**
         * TypeError.prototype.id
         */
        .it(`TypeError.prototype.id`, () => expect(typeError.id).toEqual(id))

        /**
         * TypeError.prototype.name
         */
        .it(`TypeError.prototype.name`, () => expect(typeError.name).toEqual('TypeError'))

        /**
         * TypeError.prototype.problem
         */
        .it(`TypeError.prototype.problem`, () => expect(typeError.problem).toEqual(problem))

        /**
         * TypeError.prototype.template
         */
        .it(`TypeError.prototype.template`, () => expect(typeError.template).toEqual(template))

        /**
         * [Symbol.toStringTag]
         */
        .it(`[Symbol.toStringTag]`, () => {
          expect(typeOf(typeError)).toEqual('typeerror');
          expect(Object.prototype.toString.call(typeError)).toEqual('[object TypeError]');
        });
    })

    /**
     * Static methods.
     */
    .describe(`Static methods`, () => {
      testing

        /**
         * TypeError.define()
         */
        .it(`TypeError.define(problem, fix, id, type, template)`, () => {
          const e = TypeError.define(problem, fix, id, type, template);
          expect(e.message).toEqual(`Problem(VE${id}): ${problem} ${type}\nFix: ${fix}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.type).toEqual(type);
          expect(e.id).toEqual(id);
          expect(e.template).toEqual(template);
        })

        /**
         * TypeError.isTypeError()
         */
        .it(`TypeError.isTypeError()`, () => {
          expect(TypeError.isTypeError(typeError)).toBeTrue();
          expect(TypeError.isTypeError(typeError, id, type)).toBeTrue();
        });
    })

    /**
     * Constructor.
     */
    .describe(`constructor()`, () => {
      testing
        .it(`(problem, fix)`, () => {
          const e = new TypeError(problem, fix);
          expect(e.message).toEqual(`Problem${''}: ${problem} => Fix: ${fix} must be of the ${''}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toBeUndefined();
          expect(e.type).toBeUndefined();
          expect(e.template).toEqual(TypeError.template);
        })
        .it(`(problem, fix, undefined, type)`, () => {
          const e = new TypeError(problem, fix, undefined, type);
          expect(e.message).toEqual(`Problem${''}: ${problem} => Fix: ${fix} must be of the ${type}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toBeUndefined();
          expect(e.type).toEqual(type);
          expect(e.template).toEqual(TypeError.template);
        })
        .it(`(problem, fix, id)`, () => {
          const e = new TypeError(problem, fix, id);
          expect(e.message).toEqual(`Problem${id}: ${problem} => Fix: ${fix} must be of the ${''}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toEqual(id);
          expect(e.type).toBeUndefined();
          expect(e.template).toEqual(TypeError.template);
        })
        .it(`(problem, fix, id, type)`, () => {
          const e = new TypeError(problem, fix, id, type);
          expect(e.message).toEqual(`Problem${id}: ${problem} => Fix: ${fix} must be of the ${type}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toEqual(id);
          expect(e.type).toEqual(type);
          expect(e.template).toEqual(TypeError.template);
        })
        .it(`(problem, fix, id, type, template)`, () => {
          const e = new TypeError(problem, fix, id, type, template);
          expect(e.message).toEqual(`Problem(VE${id}): ${problem} ${type}\nFix: ${fix}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toEqual(id);
          expect(e.type).toEqual(type);
          expect(e.template).toEqual(template);
        });
    });
});
