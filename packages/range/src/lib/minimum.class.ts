// Class.
import { Inequality } from './inequality.class';
/**
 * The `Minimum` primitive wrapper object extended by the `Inequality` abstract primitive wrapper `object` represents the minimum number
 * greater or less than the given.
 */
export class Minimum<Value extends number> extends Inequality<Value> {
  //#region instance public properties.
  /**
   * The property, with the help of `toStringTag`, changes the default tag to `'Minimum'` for an instance of `Minimum`. It can be read by
   * the `typeOf()` function of `@angular-package/type`.
   */
  public get [Symbol.toStringTag](): string {
    return 'Minimum';
  }
  //#endregion instance public properties.

  //#region static public methods.
  /**
   * The static `create()` method creates the `Minimum` instance with the given primitive `value`.
   * @param value The minimum number of generic type variable `Value` to set with a new instance.
   * @returns The return value is the `Minimum` instance with the primitive value of the given `value`.
   */
  public static create<Value extends number>(value: Value): Minimum<Value> {
    return new this(value);
  }

  /**
   * The static `isMinimum()` method checks the provided `value` of any type whether is an instance of `Minimum` of any or the given `min`.
   * @param value The value of any type to test against the `Minimum` instance.
   * @param max Optional minimum of the generic type variable `Value` to check if it's the primitive value of the given `value`.
   * @returns The return value is a `boolean` indicating whether the provided `value` is an instance of `Minimum` of any or the given `min`.
   */
  public static isMinimum<Value extends number>(
    value: any,
    min?: Value
  ): value is Minimum<Value> {
    return (
      typeof value === 'object' &&
      value instanceof this &&
      (typeof min === 'number' ? value.valueOf() : true)
    );
  }
  //#endregion static public methods.

  //#region constructor.
  /**
   * Creates the `Minimum` instance of the given primitive `value`.
   * @param value The value of the generic type variable `Value` is the primitive value of the new instance.
   * @angularpackage
   */
  constructor(value: Value) {
    super(value);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * The `valueOf()` method returns the primitive value of generic type variable `Value` of the specified `Minimum` object.
   * @returns The return value is the primitive value of generic type variable `Value`.
   * @angularpackage
   */
  public valueOf(): Value {
    return super.valueOf() as Value;
  }
  //#endregion instance public methods.
}
