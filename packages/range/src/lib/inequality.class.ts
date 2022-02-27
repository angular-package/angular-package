// Class.
import { Greater } from './greater.class';
import { Less } from './less.class';
/**
 * The `Inequality` abstract primitive wrapper `object` represents the primitive value greater or less than the given.
 */
export abstract class Inequality<Value extends number> extends Number {
  //#region instance public accessors.
  /**
   * The `get` accessor obtains from the private `#greater` property an instance of the `Greater` with a primitive value from a given
   * `value` of the `Inequality` constructor.
   * @returns The return value is the `Greater` instance with a primitive value from the given `value` of the `Inequality` constructor.
   * @angularpackage
   */
  public get greater(): Greater<Value> {
    return this.#greater;
  }

  /**
   * The `get` accessor obtains from the private `#less` property an instance of the `Less` with a primitive value from a given `value` of
   * the `Inequality` constructor.
   * @returns The return value is the `Less` instance with a primitive value from the given `value` of the `Inequality` constructor.
   * @angularpackage
   */
  public get less(): Less<Value> {
    return this.#less;
  }
  //#endregion instance public accessors.

  //#region instance private properties.
  /**
   * Private property of the `Greater` primitive wrapper `object` indicates the value of the `number` type greater than the given.
   */
  #greater: Greater<Value>;

  /**
   * Private property of the `Less` primitive wrapper `object` indicates the value of `number` type less than the given.
   */
  #less: Less<Value>;
  //#endregion instance private properties.

  //#region constructor.
  /**
   * Creates a child class instance with the given primitive `value`.
   * @param value The value of the generic type variable `Value` is the primitive value of a new child class instance.
   * @angularpackage
   */
  constructor(value: Value) {
    super(value);
    this.#greater = new Greater(value);
    this.#less = new Less(value);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * The `isBetween()` method checks whether the primitive value is between the range of a specified object.
   * @param min The minimum range of number type to test.
   * @param max The maximum range of number type to test.
   * @returns The return value is a `boolean` type indicating whether the primitive value is between the range of a specified object.
   * @angularpackage
   */
  public isBetween(min: number, max: number): boolean {
    return min < max
      ? (this.greaterThan(min) && this.lessThan(max)) ||
          min === this.valueOf() ||
          max === this.valueOf()
      : false;
  }

  /**
   * Checks whether the primitive value is between every range of the given `ranges`.
   * @param ranges A rest parameter of `array` type ranges to test.
   * @returns The return value is a `boolean` type indicating whether the primitive value is between every range of the
   * given `ranges`.
   * @angularpackage
   */
  public isBetweenEvery(...ranges: [number, number][]): boolean {
    return ranges.every((range) => this.isBetween(range[0], range[1]));
  }

  /**
   * Checks whether the primitive value is between some given `ranges`.
   * @param ranges A rest parameter of `array` type ranges to test.
   * @returns The return value is a `boolean` type indicating whether the primitive value is between some given `ranges`.
   * @angularpackage
   */
  public isBetweenSome(...ranges: [number, number][]): boolean {
    return ranges.some((range) => this.isBetween(range[0], range[1]));
  }

  /**
   * Checks whether the primitive value of a child class instance is greater than the given `value`.
   * @param value The value of `number` type to test.
   * @returns The return value is a `boolean` indicating whether the primitive value of a child class instance is greater than the given
   * `value`.
   * @angularpackage
   */
  public greaterThan(value: number): boolean {
    return this.#greater.than(value);
  }

  /**
   * Checks whether the primitive value of a child class instance is greater than every value of the given `values`.
   * @param values A rest parameter of the numbers to test.
   * @returns The return value is a `boolean` indicating whether the primitive value of a child class instance is greater than every value
   * of the given `values`.
   * @angularpackage
   */
  public greaterThanEvery(...values: number[]): boolean {
    return this.#greater.thanEvery(...values);
  }

  /**
   * Checks whether the primitive value of a child class instance is greater than some given `values`.
   * @param values A rest parameter of the numbers to test.
   * @returns The return value is a `boolean` indicating whether the primitive value of a child class instance is greater than some given
   * `values`.
   * @angularpackage
   */
  public greaterThanSome(...values: number[]): boolean {
    return this.#greater.thanSome(...values);
  }

  /**
   * Checks whether the primitive value of a child class instance is less than the given `value`.
   * @param value The value of `number` type to test.
   * @returns The return value is a `boolean` indicating whether the primitive value of a child class instance is **less** than the given
   * `value`.
   * @angularpackage
   */
  public lessThan(value: number): boolean {
    return this.#less.than(value);
  }

  /**
   * Checks whether the primitive value of a child class instance is less than every given value.
   * @param values A rest parameter of the numbers to test.
   * @returns The return value is a `boolean` indicating whether the primitive value of a child class instance is less than every value of
   * the given `values`.
   * @angularpackage
   */
  public lessThanEvery(...values: number[]): boolean {
    return this.#less.thanEvery(...values);
  }

  /**
   * Checks whether the primitive value of a child class instance is less than some given `values`.
   * @param values A rest parameter of the numbers to test.
   * @returns The return value is a `boolean` indicating whether the primitive value of a child class instance is less than some given
   * `values`.
   * @angularpackage
   */
  public lessThanSome(...values: number[]): boolean {
    return this.#less.thanSome(...values);
  }
  //#endregion instance public methods.
}
