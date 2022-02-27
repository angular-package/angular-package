// Class.
import { Maximum } from './maximum.class';
import { Minimum } from './minimum.class';
/**
 * The `Range` object represents a range between a minimum and maximum.
 */
export class Range<
  Min extends number,
  Max extends number,
  Step extends number = 1
> {
  //#region instance accessors.
  /**
   * The `get` accessor obtains the range of an `Array` of the minimum to the maximum with the step of a specified `Range` object.
   * @returns The return value is the range from minimum to the maximum of a read-only `Array` of number.
   * @angularpackage
   */
  public get range(): Readonly<Array<number>> {
    return this.getRange();
  }

  /**
   * The `get` accessor obtains the step of a specified `Range` object. It's used to return the entire range, get the step of the range
   * value, and change the range value.
   * @returns The return value is the step of generic type variable `Step`.
   * @angularpackage
   */
  public get step(): Step {
    return this.#step;
  }

  /**
   * The `get` accessor retrieves the number of steps of the specified `Range` object.
   * @returns The return value is the number of steps of the `number` type.
   * @angularpackage
   */
  public get steps(): number {
    return this.getRange().length;
  }

  /**
   * The `get` accessor retrieves the `#value` property that indicates the range current value of the `number` type of a specified `Range`
   * object. It can be set by the `setValue()` method.
   * @returns The return value is the range current value of `number` type if set, otherwise `undefined`.
   * @angularpackage
   */
  public get value(): number | undefined {
    return this.#value;
  }

  /**
   * The `set` accessor sets the range current value of the `number` type between the minimum and maximum of a specified `Range`
   * object.
   * @returns The return value is the range current value of `number` type if set, otherwise `undefined`.
   * @angularpackage
   */
  public set value(value: number | undefined) {
    typeof value === 'number'
      ? this.has(value) && (this.#value = value)
      : undefined;
  }

  /**
   * The property, with the help of `toStringTag`, changes the default tag to `'Range'` for an instance of `Range`. It can be read by the
   * `typeOf()` function of `@angular-package/type`.
   * @returnsThe return value is the word 'Range` of a `string`.
   * @angularpackage
   */
  public get [Symbol.toStringTag](): string {
    return 'Range';
  }
  //#endregion instance accessors.

  //#region instance properties.
  //#region public instance properties.
  /**
   * The `max` read-only property is the maximum range of generic type variable `Max` of a specified `Range` object.
   */
  public readonly max!: Max;

  /**
   * The `min` read-only property is the minimum range of generic type variable `Min` of a specified `Range` object.
   */
  public readonly min!: Min;
  //#endregion public instance properties.

  //#region private instance properties.
  /**
   * Private property of the `Maximum` primitive wrapper `object` with a primitive value from a given `max` of the `Range` constructor
   * indicates the maximum range.
   */
  #maximum: Maximum<Max>;

  /**
   * Private property of the `Minimum` primitive wrapper `object` with a primitive value from a given `min` of the `Range` constructor
   * indicates the minimum range.
   */
  #minimum: Minimum<Min>;

  /**
   * The private property of the generic type variable `Step` indicates the range step. It's used to return the entire range, get the
   * step of the range value, and change the range value.
   */
  #step: Step;

  /**
   * The private property of the `number` type indicates the range value. It can be set by the `setValue()` method and setter `value`.
   */
  #value?: number;
  //#endregion private instance properties.
  //#endregion instance properties.

  //#region static public methods.
  /**
   * The static `create()` method returns a new instance of `Range` with a range of the given required `min`, `max` and optional current
   * `value`, `step`.
   * @param min The **minimum** range of generic type variable `Min` to set with a new `Range` instance.
   * @param max The **maximum** range of generic type variable `Max` to set with a new `Range` instance.
   * @param value The optional value of the `number` type between the given `min` and `max` specifies the default value of a new `Range`
   * instance.
   * @param step Optional step of generic type variable `Step` to set with a new `Range` instance, by default `1`.
   * @returns The return value is the `Range` instance with a range of the given required `min`, `max` and optional current `value`, `step`.
   * @angularpackage
   */
  public static create<
    Min extends number,
    Max extends number,
    Step extends number = 1
  >(min: Min, max: Max, value?: number, step?: Step): Range<Min, Max, Step> {
    return new this(min, max, value, step);
  }

  /**
   * Creates the `Range` instance from the given random numbers and the step.
   * @param numbers An `Array` of numbers to find a range and create a new instance.
   * @param step Optional step of generic type variable `Step` to set with a new `Range` instance, by default `1`.
   * @returns The return value is the `Range` instance created from the given required random numbers and the optional step.
   * @angularpackage
   */
  public static createFrom<Step extends number = 1>(
    numbers: number[],
    step: Step = 1 as Step
  ): Range<number, number, Step> {
    return Range.create(
      Math.min.apply(0, numbers),
      Math.max.apply(0, numbers),
      step
    );
  }

  /**
   * The static `createMaximum()` method returns the `Maximum` instance of the given maximum `value`.
   * @param value The maximum range of a generic type variable `Value` to set with a new instance of `Maximum`.
   * @returns The return value is the `Maximum` instance with the primitive value from the given `value`.
   * @angularpackage
   */
  public static createMaximum<Value extends number>(
    value: Value
  ): Maximum<Value> {
    return Maximum.create(value);
  }

  /**
   * The static `createMinimum()` method returns the `Minimum` instance of the given minimum `value`.
   * @param value The minimum range of a generic type variable `Value` to set with a new instance of `Minimum`.
   * @returns The return value is the `Minimum` instance with the primitive value from the given `value`.
   * @angularpackage
   */
  public static createMinimum<Value extends number>(
    value: Value
  ): Minimum<Value> {
    return Minimum.create(value);
  }

  /**
   * The static `isRange()` method checks whether the `value` is an instance of `Range` of any or the given minimum, maximum, and step.
   * @param value The value of any type to test against the `Range` instance.
   * @param min The optional minimum range of generic type variable `Min` to check whether it's equal to a minimum of the given `value`.
   * @param max The optional maximum range of generic type variable `Max` to check whether it's equal to a maximum of the given `value`.
   * @param step Optional step of generic type variable `Step` to check whether it's equal to the step of the given `value`.
   * @returns The return value is a boolean indicating whether the provided `value` is an instance of `Range` of any or the given minimum,
   * maximum range and step.
   * @angularpackage
   */
  public static isRange<
    Min extends number,
    Max extends number,
    Step extends number
  >(
    value: any,
    min?: Min,
    max?: Max,
    step?: Step
  ): value is Range<Min, Max, Step> {
    return typeof value === 'object' && value instanceof this
      ? (typeof min === 'number' ? value.min === min : true) &&
          (typeof max === 'number' ? value.max === max : true) &&
          (typeof step === 'number' ? value.step === step : true)
      : false;
  }
  //#endregion static public methods.

  //#region constructor.
  /**
   * Creates the `Range` instance with a range of the given required `min`, `max` and optional current `value`, `step`.
   * @param min The minimum range of generic type variable `Min` to set with a new `Range` instance.
   * @param max The maximum range of generic type variable `Max` to set with a new `Range` instance.
   * @param value The optional value of the `number` type between the given `min` and `max` specifies the default value of a new `Range`
   * instance.
   * @param step Optional step of generic type variable `Step` to set with a new `Range` instance, by default `1`. The step is used by the
   * `range` accessor, `getRange()` , `getRangeOfStep()` and `stepByStep()` methods to return the entire range and also by the
   * `valueDown()`, valueUp() methods to respectively decrement, increment range value.
   * @returns The return value is a new instance of `Range` of the given minimum and maximum.
   * @angularpackage
   */
  constructor(min: Min, max: Max, value?: number, step: Step = 1 as Step) {
    this.#maximum = new Maximum(max);
    this.#minimum = new Minimum(min);
    this.#step = step;
    // Sets the range value between the given `min` and `max`.
    this.value = value;
    // Define the `min` and `max` property.
    Object.defineProperties(this, {
      min: {
        value: min,
        enumerable: true,
        writable: false,
      },
      max: {
        value: max,
        enumerable: true,
        writable: false,
      },
    });
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * The `forEachStep()` method performs the specified action for each step in the maximum range of an `Array`.
   * @param forEachStep A `function` that accepts up to three arguments. It's called one time for each step in the range.
   * @returns The return value is the `Range` instance.
   * @angularpackage
   */
  public forEachStep(
    forEachStep: (value: number, step: number, range: readonly number[]) => void
  ): this {
    this.range.forEach(forEachStep);
    return this;
  }

  /**
   * The `getCurrentRange()` method returns a range of numbers from minimum to the current value by the step of a specified `Range` object.
   * @returns The return value is a range of numbers of a read-only `Array` from minimum to the current value, if the current value is set,
   * otherwise `undefined`.
   * @angularpackage
   */
  public getCurrentRange(): Readonly<Array<number>> | undefined {
    return typeof this.value === 'number'
      ? this.getRange(this.value)
      : undefined;
  }

  /**
   * The `getCurrentStep()` method returns the step of the range value.
   * @returns The return value is the step of `number` type, if range value is set, otherwise `undefined`.
   * @angularpackage
   */
  public getCurrentStep(): number | undefined {
    return typeof this.value === 'number'
      ? Math.floor(this.value / this.#step)
      : undefined;
  }

  /**
   * @deprecated
   * The `getMax()` method gets the maximum range of a specified `Range` object.
   * @returns The return value is the maximum range of a generic type variable `Max`.
   * @angularpackage
   */
  public getMax(): Max {
    return this.#maximum.valueOf();
  }

  /**
   * @deprecated
   * The `getMin()` method gets the minimum range of a specified `Range` object.
   * @returns The return value is the minimum range of a generic type variable `Min`.
   * @angularpackage
   */
  public getMin(): Min {
    return this.#minimum.valueOf();
  }

  /**
   * The `getRange ()` method returns a range of numbers by the specified step from minimum to the given `value` of the specified` Range`
   * object.
   * @param value Optional maximum range value of `number` type of returned `array` by default it's the maximum range.
   * @returns The return value is a range of numbers of a read-only `Array` from minimum to the given `value`.
   * @angularpackage
   */
  public getRange(value: number = this.max): Readonly<Array<number>> {
    const range = [];
    let current: number = this.min;
    while (current <= value) {
      current <= this.max && range.push(current), (current += this.#step);
    }
    return range;
  }

  /**
   * The `getRangeOfStep()` method returns a range of numbers by the specified step from the minimum to the given `step` of a specified
   * `Range` object.
   * @param step Step of `number` type is the maximum range of the returned `array`. The value must be less or equal to the number of range
   * steps.
   * @returns The return value is a range of numbers of a read-only `Array` from minimum to step of the given `step` if the given `step`
   * is within a range, otherwise an empty `Array`.
   * @angularpackage
   */
  public getRangeOfStep(step: number): Readonly<Array<number>> {
    const range = [];
    if (step > 0 && step <= this.steps) {
      for (let value = 0; value < step; value++) {
        range.push(this.min + value * this.#step);
      }
    }
    return range;
  }

  /**
   * The `getValueOfStep()` method returns the range value of the given `step`. If the given `step` is not within range returns `undefined`.
   * @param step Step parameter of `number` type to retrieve the range value.
   * @returns The return value is the range value of the given `step` within a range otherwise `undefined`.
   * @angularpackage
   */
  public getValueOfStep(step: number): number | undefined {
    return step > 0 && step <= this.steps ? this.range[step - 1] : undefined;
  }

  /**
   * The `has()` method checks whether the value is in the range of a specified `Range` object.
   * @param value The value of `number` type to test.
   * @returns The return value is a `boolean` indicating whether the given `value` is in the range of a specified `Range` object.
   * @angularpackage
   */
  public has(value: number): boolean {
    return (
      (this.minLessThan(value) && this.maxGreaterThan(value)) ||
      value === this.min ||
      value === this.max
    );
  }

  /**
   * The `hasEvery()` method checks whether every value of the given `values` is in the range of a specified `Range` object.
   * @param value A rest parameter of numbers to test.
   * @returns The return value is a `boolean` indicating whether every value of the given `values` is in the range of a specified `Range`
   * object.
   * @angularpackage
   */
  public hasEvery(...values: number[]): boolean {
    return values.every((value) => this.has(value));
  }

  /**
   * Checks whether some `values` are in the range of a specified `Range` object.
   * @param value A rest parameter of numbers to test.
   * @returns The return value is a `boolean` indicating whether some `values` are in the range of a specified `Range` object.
   * @angularpackage
   */
  public hasSome(...values: number[]): boolean {
    return values.some((value) => this.has(value));
  }

  /**
   * The `isBetween()` method checks whether range of the given `min` and `max` is between the range of a specified `Range` object.
   * @param min The **minimum** range of `number` type to test.
   * @param max The **maximum** range of `number` type to test.
   * @returns The return value is a `boolean` type indicating whether the range of a specified `Range` object is between a range of the
   * given `min` and `max`.
   * @angularpackage
   */
  public isBetween(min: number, max: number): boolean {
    return min <= max ? this.hasEvery(min, max) : false;
  }

  /**
   * Checks whether the range of a specified `Range` object is between every range of the given `ranges`.
   * @param ranges A rest parameter of ranges of an `array` type to test.
   * @returns The return value is a `boolean` type indicating whether the range of a specified `Range` object is between every range of the
   * given `ranges`.
   * @angularpackage
   */
  public isBetweenEvery(...ranges: [number, number][]): boolean {
    return ranges.every((range) =>
      range[0] <= range[1] ? this.hasEvery(...range) : false
    );
  }

  /**
   * Checks whether the range of a specified `Range` object is between some given `ranges`.
   * @param ranges A rest parameter of an `array` type ranges to test.
   * @returns The return value is a `boolean` type indicating whether the range of a specified `Range` object is between some given
   * `ranges`.
   * @angularpackage
   */
  public isBetweenSome(...ranges: [number, number][]): boolean {
    return ranges.some((range) =>
      range[0] <= range[1] ? this.hasEvery(...range) : false
    );
  }

  /**
   * The `maxGreaterThan()` method checks whether the value is less than the maximum range of a specified `Range` object.
   * @param value The value of `number` type to test.
   * @returns The return value is a `boolean` type indicating whether the given `value` is less than maximum range of a specified `Range`
   * object.
   * @angularpackage
   */
  public maxGreaterThan(value: number): boolean {
    return this.#maximum.greaterThan(value);
  }

  /**
   * The `maxLessThan()` method checks whether the value is greater than the maximum range of a specified `Range` object.
   * @param value The value of `number` type to test.
   * @returns The return value is a `boolean` type indicating whether the given `value` is greater than maximum range of a specified `Range`
   * object.
   * @angularpackage
   */
  public maxLessThan(value: number): boolean {
    return this.#maximum.lessThan(value);
  }

  /**
   * The `minGreaterThan()` method checks whether the value is less than a minimum range of a specified `Range` object.
   * @param value The value of `number` type to test.
   * @returns The return value is a `boolean` type indicating whether the given `value` is less than minimum range of a specified `Range`
   * object.
   * @angularpackage
   */
  public minGreaterThan(value: number): boolean {
    return this.#minimum.greaterThan(value);
  }

  /**
   * The method `minLessThan()` checks whether the value is greater than the minimum range of a specified `Range` object.
   * @param value The value of `number` type to test.
   * @returns The return value is a `boolean` type indicating whether the given `value` is greater than minimum range of a specified `Range`
   * object.
   * @angularpackage
   */
  public minLessThan(value: number): boolean {
    return this.#minimum.lessThan(value);
  }

  /**
   * The method `setValue()` sets the range value between the minimum and maximum of a specified `Range` object. If the given `value` is not
   * within range, it's not set.
   * @param value The value of `number` type to set.
   * @returns The return value is the `Range` instance.
   * @angularpackage
   */
  public setValue(value: number): this {
    this.value = value;
    return this;
  }

  /**
   * The method `setValueToStep()` sets the value of the specified `Range` object to the value of the given `step`. If the given `step` is
   * not within range the value is not changed.
   * @param step Step of `number` type to retrieve the value from the range and set it as the range current `value`.
   * @returns The return value is the `Range` instance.
   * @angularpackage
   */
  public setValueToStep(step: number): this {
    step > 0 && (this.value = this.getValueOfStep(step));
    return this;
  }

  /**
   * The `stepByStep()` method performs a callback function with the ability to decide when to move to the next step of the range.
   * @param callbackFn A function that accepts up to three arguments. The `value` is a function generator that allows deciding when to move
   * to the next step, `step` is the step, and `max` is the maximum of a specified `Range` object.
   * @returns The return value is the `Range` instance.
   * @angularpackage
   */
  public stepByStep(
    callbackFn: (value: Generator<number>, step: Step, max: Max) => void
  ): this {
    const t = this;
    callbackFn(
      (function* stepByStep(current = t.min - t.step): Generator<number> {
        while (current < t.max) {
          yield (current += t.step);
        }
      })(),
      t.step,
      t.max
    );
    return this;
  }

  /**
   * @deprecated
   * The `toArray()` method returns a read-only array of the range in order minimum and maximum.
   * @returns The return value is a read-only array of the range in order minimum and maximum.
   * @angularpackage
   */
  public toArray(): readonly [Min, Max] {
    return [this.#minimum.valueOf(), this.#maximum.valueOf()];
  }

  /**
   * The `valueDown()` method decrements the range value of a specified `Range` object by the range step or given `stepDecrement`.
   * @param stepIncrement The optional `stepDecrement` parameter of the `number` type decrements the range value. If no parameter is passed,
   * `stepDecrement` defaults to `1`.
   * @returns The return value is the `Range` instance.
   * @angularpackage
   */
  public valueDown(stepDecrement = 1): this {
    typeof this.value === 'number' &&
      stepDecrement > 0 &&
      this.setValue(this.value - stepDecrement * this.#step);
    return this;
  }

  /**
   * @deprecated
   * The `valueOf()` method returns a read-only object consisting of the primitive values of `Minimum` and `Maximum` instances.
   * @returns The return value is a frozen `object` consisting of the primitive values of `Minimum` and `Maximum` instances.
   * @angularpackage
   */
  public valueOf(): Readonly<{ min: Min; max: Max }> {
    return Object.freeze({
      min: this.#minimum.valueOf(),
      max: this.#maximum.valueOf(),
    });
  }

  /**
   * The `valueUp()` method increments the range value of a specified `Range` object by the range step or given `stepIncrement`.
   * @param stepIncrement The optional `stepIncrement` parameter of the `number` type increments the range value. If no parameter is passed,
   * `stepIncrement` defaults to `1`.
   * @returns The return value is the `Range` instance.
   * @angularpackage
   */
  public valueUp(stepIncrement = 1): this {
    typeof this.value === 'number' &&
      stepIncrement > 0 &&
      this.setValue(this.value + stepIncrement * this.#step);
    return this;
  }
  //#endregion instance public methods.
}
