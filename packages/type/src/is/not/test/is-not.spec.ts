import { isNot } from '../lib/is-not.object';
// Testing.
import {
   // Main.
   Testing,
 } from '@angular-package/testing';
 // Execute tests.
import { tests } from '../../../execute-tests';
 /**
  * Initialize testing.
  */
const testing = new Testing(
   tests.object.isNot.describe,
   tests.object.isNot.it
 );
 /**
  * Tests.
  */
testing.describe(`guard`, () => {
   testing
   .describe('DEFINED', () => {
      testing
      .it('isNot', () => expect(isNot).toBeDefined())
      .it('isNot.boolean()', () => expect(isNot.boolean).toBeDefined())
      .it('isNot.defined()', () => expect(isNot.defined).toBeDefined())
      .it('isNot.function()', () => expect(isNot.function).toBeDefined())
      .it('isNot.null()', () => expect(isNot.null).toBeDefined())
      .it('isNot.number()', () => expect(isNot.number).toBeDefined())
      .it('isNot.string()', () => expect(isNot.string).toBeDefined())
      .it('isNot.undefined()', () => expect(isNot.undefined).toBeDefined());
   });
});
