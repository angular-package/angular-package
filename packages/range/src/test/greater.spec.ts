// @angular-package/testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class to test.
import { Greater } from '../lib/greater.class';

// Initialize.
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();

testing.describe(`Greater.`, () => {

  // Properties.
  const min = -27;
  const max = 27;
  const step = 3;
  const value = 25;

  // Create new instance.
  // Returns Range {min: 3, max: 27, value: 10} of Range<3, 27, 3>.
  let greater = new Greater(value);

  beforeEach(() => greater = new Greater(value));

  testing.it(`create()`, () => {
    expect(Greater.create(min)).toBeInstanceOf(Greater);
    toBe.instance(Greater.create(min), Greater);
  })
  .describe(`prototype.`, () => {
    testing
    .it(`than()`, () => {
      expect(greater.than(max)).toBeFalse();
      expect(greater.than(min)).toBeTrue();
    })
    .it(`thanEvery()`, () => {
      expect(greater.thanEvery(23, 24, 25)).toBeFalse();
      expect(greater.thanEvery(23, 24)).toBeTrue();
    })
    .it(`thanSome()`, () => {
      expect(greater.thanSome(23, 24, 25)).toBeTrue();
      expect(greater.thanSome(25, 26, 27)).toBeFalse();
    });
  });
});
