// @angular-package/testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class to test.
import { Inequality } from '../lib/inequality.class';

// Initialize.
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();

testing.describe(`Inequality.`, () => {

  // Define the `Age` class and extend it with `Inequality`.
  class Age<Value extends number> extends Inequality<Value> {}

  // Define the `Year` class and extend it with `Inequality`.
  class Year<Value extends number> extends Inequality<Value> {}

  const min = 0;
  const max = 100;

  // Initialize `Age`.
  let age = new Age(27);

  beforeEach(() => (age = new Age(27)));

  testing
    .describe(`prototype.`, () =>
      testing
      .it(`isBetween()`, () => {
        expect(age.isBetween(min, max)).toBeTrue();
        expect(age.isBetween(min, 26)).toBeFalse();
        expect(age.isBetween(28, max)).toBeFalse();
      })
      .it(`isBetweenEvery()`, () => {
        expect(age.isBetweenEvery([min, max], [min, 27], [27, max])).toBeTrue();
        expect(age.isBetweenEvery([min, max], [min, 26], [28, max])).toBeFalse();
      })
      .it(`isBetweenSome()`, () => {
        expect(age.isBetweenSome([min, max], [min, 27], [27, max])).toBeTrue();
        expect(age.isBetweenSome([min, max], [min, 26], [28, max])).toBeTrue();
        expect(age.isBetweenSome([min, 26], [28, max])).toBeFalse();
      })
      .it(`isBetweenSome()`, () => {
        expect(age.isBetweenSome([min, max], [min, 27], [27, max])).toBeTrue();
        expect(age.isBetweenSome([min, max], [min, 26], [28, max])).toBeTrue();
        expect(age.isBetweenSome([min, 26], [28, max])).toBeFalse();
      })
    );
});
