// @angular-package/testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class to test.
import { Less } from '../lib/less.class';

// Initialize.
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();

testing.describe(`Less.`, () => {

  // Properties.
  const min = -27;
  const max = 27;
  const step = 3;
  const value = 25;

  // Create new instance.
  // Returns Range {min: 3, max: 27, value: 10} of Range<3, 27, 3>.
  let less = new Less(value);

  beforeEach(() => less = new Less(value));

  testing.it(`create()`, () => {
    expect(Less.create(min)).toBeInstanceOf(Less);
    toBe.instance(Less.create(min), Less);
  })
  .describe(`prototype.`, () => {
    testing
    .it(`than()`, () => {
      expect(less.than(max)).toBeTrue();
      expect(less.than(min)).toBeFalse();
    })
    .it(`thanEvery()`, () => {
      expect(less.thanEvery(25, 26, 27)).toBeFalse();
      expect(less.thanEvery(26, 27)).toBeTrue();
    })
    .it(`thanSome()`, () => {
      expect(less.thanSome(23, 24, 25)).toBeFalse();
      expect(less.thanSome(25, 26, 27)).toBeTrue();
    });
  });
});
