import { guard } from '../lib/guard.object';
// Testing.
import {
   // Main.
   Testing,
 } from '@angular-package/testing';
 // Execute tests.
import { tests } from '../../execute-tests';
 /**
  * Initialize testing.
  */
const testing = new Testing(
   tests.object.guard.describe,
   tests.object.guard.it
 );
 /**
  * Tests.
  */
testing.describe(`guard`, () => {
  testing
  .describe('DEFINED', () => {
    testing
    .it('guard', () => expect(guard).toBeDefined())
    .it('guard.array()', () => expect(guard.array).toBeDefined())
    .it('guard.bigint()', () => expect(guard.bigint).toBeDefined())
    .it('guard.boolean()', () => expect(guard.boolean).toBeDefined())
    .it('guard.class()', () => expect(guard.class).toBeDefined())
    .it('guard.defined()', () => expect(guard.defined).toBeDefined())
    .it('guard.false()', () => expect(guard.false).toBeDefined())
    .it('guard.function()', () => expect(guard.function).toBeDefined())
    .it('guard.instance()', () => expect(guard.instance).toBeDefined())
    .it('guard.key()', () => expect(guard.key).toBeDefined())
    .it('guard.null()', () => expect(guard.null).toBeDefined())
    .it('guard.number()', () => expect(guard.number).toBeDefined())
    .it('guard.numberBetween()', () => expect(guard.numberBetween).toBeDefined())
    .it('guard.object()', () => expect(guard.object).toBeDefined())
    .it('guard.objectKey()', () => expect(guard.objectKey).toBeDefined())
    .it('guard.objectKeyIn()', () => expect(guard.objectKeyIn).toBeDefined())
    .it('guard.objectKeys()', () => expect(guard.objectKeys).toBeDefined())
    .it('guard.objectKeysIn()', () => expect(guard.objectKeysIn).toBeDefined())
    .it('guard.objectSomeKeys()', () => expect(guard.objectSomeKeys).toBeDefined())
    .it('guard.primitive()', () => expect(guard.primitive).toBeDefined())
    .it('guard.string()', () => expect(guard.string).toBeDefined())
    .it('guard.stringIncludes()', () => expect(guard.stringIncludes).toBeDefined())
    .it('guard.stringIncludesSome()', () => expect(guard.stringIncludesSome).toBeDefined())
    .it('guard.symbol()', () => expect(guard.symbol).toBeDefined())
    .it('guard.true()', () => expect(guard.true).toBeDefined())
    .it('guard.type()', () => expect(guard.type).toBeDefined())
    .it('guard.undefined()', () => expect(guard.undefined).toBeDefined());
  });
});
