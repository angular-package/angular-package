// @angular-package/testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { Minimum } from '../lib/minimum.class';

// Initialize.
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();

testing.describe(`Minimum.`, () => {

  let min = Math.floor(Math.random() * 10);
  let max = Math.floor(Math.random() * 100) + 11;
  let minimum = new Minimum(min);

  beforeEach(() => {
    min = Math.floor(Math.random() * 10);
    max = Math.floor(Math.random() * 100) + 11;
    minimum = new Minimum(min);
  });

  testing
    .toBeClass(Minimum)
    .toBeNumberType(new Minimum(min).valueOf())
    .toEqual(`Must be equal to ${min}`, new Minimum(min).valueOf(), min)

    .it(`.create()`, () => {
      const customMinimum = Minimum.create(min);
      toBe
        .instance(customMinimum, Minimum)
        .numberBetween(customMinimum.valueOf(), min, max);
    });
});
