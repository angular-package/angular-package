// Object.
import { is } from '../lib/is.object';
// Testing.
import { Testing } from '@angular-package/testing';
import { tests } from '../../execute-tests';
/**
 * Initialize testing.
 */
const testing = new Testing(
  tests.object.is.describe,
  tests.object.is.it
);
/**
 * Tests.
 */
testing.describe('`is{}`', () => {
  testing
    .describe('DEFINED', () => {
      testing
      .it('is', () => expect(is).toBeDefined())
      .it('is.array()', () => expect(is.array).toBeDefined())
      .it('is.boolean()', () => expect(is.boolean).toBeDefined())
      .it('is.booleanObject()', () => expect(is.booleanObject).toBeDefined())
      .it('is.booleanType()', () => expect(is.booleanType).toBeDefined())
      .it('is.date()', () => expect(is.date).toBeDefined())
      .it('is.defined()', () => expect(is.defined).toBeDefined())
      .it('is.false()', () => expect(is.false).toBeDefined())
      .it('is.function()', () => expect(is.function).toBeDefined())
      .it('is.instance()', () => expect(is.instance).toBeDefined())
      .it('is.key()', () => expect(is.key).toBeDefined())
      .it('is.null()', () => expect(is.null).toBeDefined())
      .it('is.number()', () => expect(is.number).toBeDefined())
      .it('is.numberBetween()', () => expect(is.numberBetween).toBeDefined())
      .it('is.numberObject()', () => expect(is.numberObject).toBeDefined())
      .it('is.numberType()', () => expect(is.numberType).toBeDefined())
      .it('is.object()', () => expect(is.object).toBeDefined())
      .it('is.objectKey()', () => expect(is.objectKey).toBeDefined())
      .it('is.objectKeyIn()', () => expect(is.objectKeyIn).toBeDefined())
      .it('is.objectKeys()', () => expect(is.objectKeys).toBeDefined())
      .it('is.primitive()', () => expect(is.primitive).toBeDefined())
      .it('is.regexp()', () => expect(is.regexp).toBeDefined())
      .it('is.string()', () => expect(is.string).toBeDefined())
      .it('is.stringLength()', () => expect(is.stringLength).toBeDefined())
      .it('is.stringObject()', () => expect(is.stringObject).toBeDefined())
      .it('is.stringType()', () => expect(is.stringType).toBeDefined())
      .it('is.symbol()', () => expect(is.symbol).toBeDefined())
      .it('is.true()', () => expect(is.true).toBeDefined())
      .it('is.type()', () => expect(is.type).toBeDefined())
      .it('is.undefined()', () => expect(is.undefined).toBeDefined());
   });
});
