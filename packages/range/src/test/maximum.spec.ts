// @angular-package/testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { Maximum } from '../lib/maximum.class';

// Initialize.
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();

testing.describe(`Maximum.`, () => {

  let min = Math.floor(Math.random() * 10);
  let max = Math.floor(Math.random() * 100) + 11;
  let maximum = new Maximum(max);

  beforeEach(() => {
    min = Math.floor(Math.random() * 10);
    max = Math.floor(Math.random() * 100) + 11;
    maximum = new Maximum(max);
  });

  testing
    .toBeClass(Maximum)
    .toBeNumberType(new Maximum(max).valueOf())
    .toEqual(`Must be equal to ${max}`, new Maximum(max).valueOf(), max)

    .it(`.create()`, () => {
      const customMaximum = Maximum.create(max);
      toBe
        .instance(customMaximum, Maximum)
        .numberBetween(customMaximum.valueOf(), min, max);
    });
});
