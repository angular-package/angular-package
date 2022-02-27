// External class.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { CommonError } from '../lib/common-error.class';
/**
 * Initialize `Testing`.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('[counter] CommonError', () => {
  class TestError<Id extends string> extends CommonError<Id> {
    public static isError<Id extends string>(
      value: any,
      id?: Id
    ): value is CommonError<Id> {
      return super.isError(value, id);
    }

    public static defineMessage(
      templateStringsArray: TemplateStringsArray,
      ...values: any[]
    ): string {
      return super.defineMessage(templateStringsArray, ...values);
    }
  }


  const problem = 'The value must be string type.';
  const fix = 'Provide the string type instead of number.';
  const id = 'AE: 427';
  const max = 427;
  const min = 9;
  const link = 'http://duckduckgo.com';
  const template = `{problem} {fix} {id} {max} {min} {type}`;
  const type = 'string';
  const additional = { link, max, min, type };
  let testError = new TestError(problem, fix, id, template, additional);

  beforeEach(() => testError = new TestError(problem, fix, id, template, additional));

  testing
  .describe(`Accessors`, () => {
    testing
      .it(`TestError.prototype.fix`, () => expect(testError.fix).toEqual(fix))
      .it(`TestError.prototype.id`, () => expect(testError.id).toEqual(id))
      .it(`TestError.prototype.link`, () => expect(testError.link).toEqual(link))
      .it(`TestError.prototype.message`, () =>
        expect(testError.message).toEqual(
          `${problem} ${fix} ${id} ${additional.max} ${additional.min} ${additional.type}`
        )
      )
      .it(`TestError.prototype.problem`, () =>
        expect(testError.problem).toEqual(problem)
      )
      .it(`TestError.prototype.template`, () =>
        expect(testError.template).toEqual(template)
      );
  }).describe(`Properties`, () => {
    testing.it(`TestError.template`, () => expect(TestError.template).toEqual(`Problem{id}: {problem} => Fix: {fix}`));
  }).describe(`Methods`, () => {
    testing
      .it('TestError.defineMessage`${problem}${fix}${id}${template}${additional}`',
        () => expect(TestError.defineMessage`${problem}${fix}${id}${template}${additional}`).toEqual(`${problem} ${fix} ${id} ${additional.max} ${additional.min} ${additional.type}`))
      .it('TestError.defineMessage`${problem}${fix}${id}${template}${additional}`',
        () => expect(TestError.defineMessage`${problem}${fix}${id}${template}${{ min: 1 }}`).toEqual(`${problem} ${fix} ${id} ${''} ${1} ${''}`))
      .it('TestError.defineMessage`${problem}${fix}${id}${template}`',
        () => expect(TestError.defineMessage`${problem}${fix}${id}${template}`).toEqual(`${problem} ${fix} ${id}   `))
      .it('TestError.defineMessage`${problem}${fix}`',
        () => expect(TestError.defineMessage`${problem}${fix}`).toEqual(`Problem${''}: ${problem} => Fix: ${fix}`))
      .it('TestError.defineMessage`${problem}`',
        () => expect(TestError.defineMessage`${problem}`).toEqual(`Problem${''}: ${problem} => Fix: ${''}`))
      .it('TestError.defineMessage`${problem}`',
        () => expect(TestError.defineMessage`${problem}`).toEqual(`Problem${''}: ${problem} => Fix: ${''}`))
      .it('TestError.defineMessage``',
        () => expect(TestError.defineMessage``).toEqual(`Problem${''}: ${''} => Fix: ${''}`))

      .it(`TestError.isError()`, () => {
        expect(TestError.isError(testError)).toBeTrue();
        expect(TestError.isError(testError, id)).toBeTrue();
        expect(TestError.isError(null, id)).toBeFalse();
      });
  });
});
