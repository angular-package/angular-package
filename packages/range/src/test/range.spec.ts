// @angular-package/testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { Range } from '../lib/range.class';
// Initialize.
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
// Testing.
testing.describe(`Range`, () => {

  // Properties.
  const min = -27;
  const max = 27;
  const step = 3;
  const value = 25;

  // Create new instance.
  // Returns Range {min: 3, max: 27, value: 10} of Range<3, 27, 3>.
  let range = new Range(min, max, value, step);

  beforeEach(() => {
    // Create new instance.
    // Returns Range {min: 3, max: 27, value: 10} of Range<3, 27, 3>.
    range = new Range(min, max, value, step);
  });

  testing
    .describe(`Range.prototype.`, () => {
      testing
        .it(`max`, () => {
          expect(range.max).toEqual(max);
        })
        .it(`min`, () => {
          expect(range.min).toEqual(min);
        })
        .it(`step`, () => {
          expect(range.step).toEqual(step);
        })
        .it(`value`, () => {
          expect(range.value).toEqual(value);
        })
        .it(`steps`, () => {
          const arr = [];
          let current: number = range.min - range.step;
          while (current < range.max) {
            current <= value && current <= range.max && arr.push(current += range.step);
          }
          expect(range.steps).toEqual(arr.length);
        });
    })
    .describe(`Range.prototype.`, () => {
      testing
        .it(`forEachStep()`, () => {
          range.forEachStep((s, index, r) => {
            expect(s).toEqual(range.range[index]);
          });
        })
        .it(`getCurrentRange()`, () => {
          toBe.array(range.getCurrentRange());
          expect(range.getCurrentRange()?.length).toEqual(18);
          expect(range.getCurrentRange()?.['17']).toEqual(24);
        })
        .it(`getCurrentStep()`, () => {
          toBe
            .number(range.getCurrentStep());
          expect(range.getCurrentStep()).toEqual(Math.floor(value / step));
        })
        .it(`getRange()`, () => {
          toBe.array(range.getRange());
          // Picks entire range of 19 elements.
          expect(range.getRange().length).toEqual(19);
          // Picks only -27 in array.
          expect(range.getRange(-27).length).toEqual(1);
          // Picks 6 steps.
          expect(range.getRange(range.min + (5 * step)).length).toEqual(6);
          // Too small range. value.
          expect(range.getRange(-28).length).toEqual(0);
          // Too big range value.
          expect(range.getRange(28).length).toEqual(19);
        })
        .it(`getRangeToStep()`, () => {
          toBe.array(range.getRangeOfStep(6));
          expect(range.getRangeOfStep(6)).toEqual(range.getRange(range.min + (5 * step)));
          expect(range.getRangeOfStep(10)).toEqual(range.getRange(range.min + (9 * step)));
        })
        .it(`getValueOfStep()`, () => {
          toBe.number(range.getValueOfStep(10));
          expect(range.getValueOfStep(10)).toEqual(0);
          expect(range.getValueOfStep(19)).toEqual(27);
        })
        .it(`has()`, () => {
          toBe
            .boolean(range.has(27))
            .true(range.has(0))
            .false(range.has(122.1));
          expect(range.has(27)).toBeTrue();
          expect(range.has(19)).toBeTrue();
          expect(range.has(-27)).toBeTrue();
          expect(range.has(-28)).toBeFalse();
          expect(range.has(28)).toBeFalse();
        })
        .it(`hasEvery()`, () => {
          toBe
            .boolean(range.hasEvery(-27, 3, 23))
            .true(range.hasEvery(0, -27, 27))
            .false(range.hasEvery(122.1, 27, 3));
          expect(range.hasEvery(27, 3, -27)).toBeTrue();
          expect(range.hasEvery(-28, -27, 0)).toBeFalse();
          expect(range.hasEvery(28, 0, 27)).toBeFalse();
        })
        .it(`hasSome()`, () => {
          toBe
            .boolean(range.hasSome(-27, 3, 23))
            .true(range.hasSome(0, -28, 28))
            .false(range.hasSome(122.1, 28, 222));
          expect(range.hasSome(27, 3, -27)).toBeTrue();
          expect(range.hasSome(-28, -28)).toBeFalse();
        })
        .it(`isBetween()`, () => {
          toBe
            .boolean(range.isBetween(-28, 28))
            .true(range.isBetween(-27, 27))
            .false(range.isBetween(-28, 28));
          expect(range.isBetween(27, 27)).toBeTrue();
          expect(range.isBetween(-28, 28)).toBeFalse();
        })
        .it(`isBetweenEvery()`, () => {
          toBe
            .boolean(range.isBetweenEvery([-28, 28], [1, 322]))
            .true(range.isBetweenEvery([-27, 27], [27, 27] , [-27, -27]))
            .false(range.isBetweenEvery([-28, 28], [1, 322]));
          expect(range.isBetweenEvery([27, 27])).toBeTrue();
          expect(range.isBetweenEvery([27, 27], [-28, 28])).toBeFalse();
        })
        .it(`isBetweenSome()`, () => {
          toBe
            .boolean(range.isBetweenSome([-28, 28], [1, 322]))
            .true(range.isBetweenSome([-27, 27], [27, 27] , [-27, -27]))
            .false(range.isBetweenSome([-28, 28], [1, 322]));
          expect(range.isBetweenSome([27, 27], [-100, 100])).toBeTrue();
          expect(range.isBetweenSome([27, 127], [-28, 28])).toBeFalse();
        })
        .it(`maxGreaterThan()`, () => {
          toBe
            .boolean(range.maxGreaterThan(27))
            .true(range.maxGreaterThan(24))
            .false(range.maxGreaterThan(28));
          expect(range.maxGreaterThan(-27)).toBeTrue();
          expect(range.maxGreaterThan(128)).toBeFalse();
        })
        .it(`maxLessThan()`, () => {
          toBe
            .boolean(range.maxLessThan(27))
            .true(range.maxLessThan(28))
            .false(range.maxLessThan(27));
          expect(range.maxLessThan(127)).toBeTrue();
          expect(range.maxLessThan(27)).toBeFalse();
        })
        .it(`minGreaterThan()`, () => {
          toBe
            .boolean(range.minGreaterThan(-27))
            .true(range.minGreaterThan(-29))
            .false(range.minGreaterThan(-27));
          expect(range.minGreaterThan(-29)).toBeTrue();
          expect(range.minGreaterThan(-27)).toBeFalse();
        })
        .it(`minLessThan()`, () => {
          toBe
            .boolean(range.minLessThan(-27))
            .true(range.minLessThan(-26))
            .false(range.minLessThan(-27));
          expect(range.minLessThan(-26)).toBeTrue();
          expect(range.minLessThan(-27)).toBeFalse();
        })
        .it(`setValue()`, () => {
          expect(range.setValue(28).value).toEqual(25);
          expect(range.setValue(-27).value).toEqual(-27);
          expect(range.setValue(-28).value).toEqual(-27);
          expect(range.setValue(0).value).toEqual(0);
        })
        .it(`setValueToStep()`, () => {
          expect(range.setValueToStep(3).value).toEqual(range.getValueOfStep(3));
          expect(range.setValueToStep(0).value).toEqual(-21);
          expect(range.setValueToStep(5).value).toEqual(range.getValueOfStep(5));
          expect(range.setValueToStep(20).value).toEqual(-15);
        })
        .it(`steByStep()`, () => {
          range.stepByStep((v, s, m) => {
            expect(s).toEqual(step);
            expect(m).toEqual(max);
            expect(v.next().value).toEqual(range.getValueOfStep(1));
            expect(v.next().value).toEqual(range.getValueOfStep(2));
            expect(v.next().value).toEqual(range.getValueOfStep(3));
            expect(v.next().value).toEqual(range.getValueOfStep(4));
            expect(v.next().value).toEqual(range.getValueOfStep(5));
            expect(v.next().value).toEqual(range.getValueOfStep(6));
          });
        })
        .it(`valueDown()`, () => {
          expect(range.valueDown(5).value).toEqual(value - (5 * step));
          expect(range.valueDown().value).toEqual(value - (6 * step));
        })
        .it(`valueUp()`, () => {
          expect(range.valueUp().value).toEqual(25);
          expect(range.valueDown(10).value).toEqual(value - (10 * step));
          expect(range.valueUp(5).value).toEqual(-5 + (5 * step));
        });
    });
});
