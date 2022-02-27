// @angular-package/testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { Number } from '../lib/number.class';

// Initialize.
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();

testing.describe(`Number.`, () => {

  let min = Math.floor(Math.random() * 10);
  let max = Math.floor(Math.random() * 100) + 11;
  let minimum = new Number(min);

  beforeEach(() => {
    min = Math.floor(Math.random() * 10);
    max = Math.floor(Math.random() * 100) + 11;
    minimum = new Number(min);
  });

  testing
    .toBeClass(Number)
    .toBeNumberType(new Number(min).valueOf())
    .toEqual(`Must be equal to ${min}`, new Number(min).valueOf(), min)

    .it(`.create()`, () => {
      const customNumber = Number.create(min);
      toBe
        .instance(customNumber, Number)
        .numberBetween(customNumber.valueOf(), min, max);
    });
});
