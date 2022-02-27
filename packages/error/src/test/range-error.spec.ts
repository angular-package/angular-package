// External class.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
import { typeOf } from '@angular-package/type';
// Class.
import { RangeError } from '../lib/range-error.class';
/**
 * Initialize `Testing`.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('[counter] RangeError', () => {
  // Prepare the values.
  const fix = 'Provide string type value. Read more: https://duckduckgo.com/';
  const id = '427';
  const min = 9;
  const max = 27;
  const problem = 'The value';
  const template = `Problem(VE{id}): {problem} {min} and {max}.\nFix: {fix}.`;

  let rangeError = new RangeError(problem, fix, id, min, max, template);

  beforeEach(() => rangeError = new RangeError(problem, fix, id, min, max, template));

  testing

    /**
     * Static properties.
     */
    .describe(`Static properties`, () => {
      testing.it(`RangeError.template`, () => {
        expect(RangeError.template).toEqual(`Problem{id}: {problem} => Fix: {fix} between {min} and {max}`);
        RangeError.template = `{problem} => Fix: {fix} of {id}`;
        expect(RangeError.template).toEqual(`{problem} => Fix: {fix} of {id}`);
        RangeError.template = `Problem{id}: {problem} => Fix: {fix} between {min} and {max}`;
      });
    })

    /**
     * Instance accessors.
     */
    .describe(`Instance accessors`, () => {
      testing

        /**
         * RangeError.prototype.fix
         */
        .it(`RangeError.prototype.fix`, () => expect(rangeError.fix).toEqual(fix))

        /**
         * RangeError.prototype.id
         */
        .it(`RangeError.prototype.id`, () => expect(rangeError.id).toEqual(id))

        /**
         * RangeError.prototype.max
         */
        .it(`RangeError.prototype.max`, () => expect(rangeError.max).toEqual(max))

        /**
         * RangeError.prototype.min
         */
        .it(`RangeError.prototype.min`, () => expect(rangeError.min).toEqual(min))

        /**
         * RangeError.prototype.name
         */
        .it(`RangeError.prototype.name`, () => expect(rangeError.name).toEqual('RangeError'))

        /**
         * RangeError.prototype.problem
         */
        .it(`RangeError.prototype.problem`, () => expect(rangeError.problem).toEqual(problem))

        /**
         * RangeError.prototype.range
         */
        .it(`RangeError.prototype.range`, () => expect(rangeError.range).toEqual({ min, max }))

        /**
         * RangeError.prototype.template
         */
        .it(`RangeError.prototype.template`, () => expect(rangeError.template).toEqual(template))

        /**
         * [Symbol.toStringTag]
         */
        .it(`[Symbol.toStringTag]`, () => {
          expect(typeOf(rangeError)).toEqual('rangeerror');
          expect(Object.prototype.toString.call(rangeError)).toEqual(
            '[object RangeError]'
          );
        });
    })

    /**
     * Static methods.
     */
    .describe(`Static methods`, () => {
      testing

        /**
         * RangeError.define()
         */
        .it(`RangeError.define(problem, fix, id, min, max, template)`, () => {
          const e = RangeError.define(problem, fix, id, min, max, template);
          expect(e.message).toEqual(`Problem(VE${id}): ${problem} ${min} and ${max}.\nFix: ${fix}.`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toEqual(id);
          expect(e.max).toEqual(max);
          expect(e.min).toEqual(min);
          expect(e.template).toEqual(template);
        })

        /**
         * RangeError.isRangeError()
         */
        .it(`RangeError.isRangeError()`, () => {
          expect(RangeError.isRangeError(rangeError)).toBeTrue();
          expect(RangeError.isRangeError(rangeError, id)).toBeTrue();
          expect(RangeError.isRangeError(rangeError, undefined, min)).toBeTrue();
          expect(RangeError.isRangeError(rangeError, undefined, undefined, max)).toBeTrue();
          expect(RangeError.isRangeError(rangeError, undefined, min, max)).toBeTrue();
          expect(RangeError.isRangeError(rangeError, id, min, undefined)).toBeTrue();
          expect(RangeError.isRangeError(rangeError, id, undefined, max)).toBeTrue();
          expect(RangeError.isRangeError(rangeError, id, min, max)).toBeTrue();
        });
    })

    /**
     * Constructor.
     */
    .describe(`constructor()`, () => {
      testing
        .it(`(problem, fix)`, () => {
          const e = new RangeError(problem, fix);
          expect(e.message).toEqual(`Problem${''}: ${problem} => Fix: ${fix} between ${''} and ${''}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toBeUndefined();
          expect(e.max).toBeUndefined();
          expect(e.min).toBeUndefined();
          expect(e.template).toEqual(RangeError.template);
        })

        .it(`(problem, fix, id, min, undefined)`, () => {
          const e = new RangeError(problem, fix, id, min, undefined);
          expect(e.message).toEqual(`Problem${id}: ${problem} => Fix: ${fix} between ${min} and ${''}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toEqual(id);
          expect(e.max).toBeUndefined();
          expect(e.min).toEqual(min);
          expect(e.template).toEqual(RangeError.template);
        })
        .it(`(problem, fix, id, undefined, max)`, () => {
          const e = new RangeError(problem, fix, id, undefined, max);
          expect(e.message).toEqual(`Problem${id}: ${problem} => Fix: ${fix} between ${''} and ${max}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toEqual(id);
          expect(e.max).toEqual(max);
          expect(e.min).toBeUndefined();
          expect(e.template).toEqual(RangeError.template);
        })
        .it(`(problem, fix, id, min, max)`, () => {
          const e = new RangeError(problem, fix, id, min, max);
          expect(e.message).toEqual(`Problem${id}: ${problem} => Fix: ${fix} between ${min} and ${max}`);
          // Required.
          expect(e.fix).toEqual(fix);
          expect(e.problem).toEqual(problem);
          // Optional.
          expect(e.id).toEqual(id);
          expect(e.max).toEqual(max);
          expect(e.min).toEqual(min);
          expect(e.template).toEqual(RangeError.template);
        })
        .it(`('The age', 'Try to change minimum or maximum', id, min, max, template)`, () => {
          const e = new RangeError(
            `The age`,
            `Try to change minimum or maximum`,
            id,
            min,
            max,
            template
          );
          expect(e.message).toEqual(`Problem(VE${id}): ${'The age'} ${min} and ${max}.\nFix: ${'Try to change minimum or maximum'}.`);
          // Required.
          expect(e.fix).toEqual(`Try to change minimum or maximum`);
          expect(e.problem).toEqual(`The age`);
          // Optional.
          expect(e.id).toEqual(id);
          expect(e.max).toEqual(max);
          expect(e.min).toEqual(min);
          expect(e.template).toEqual(template);
        });
    });
});
