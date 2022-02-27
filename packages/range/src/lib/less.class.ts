/**
 * The `Less` primitive wrapper `object` represents the primitive value of `number` type less than the given.
 */
export class Less<Value extends number> extends Number {
  //#region instance public accessors.
  /**
   * The `get` accessor, with the help of `toStringTag`, changes the default tag to `Less` for an instance of `Less`. It can be read
   * by the `typeOf()` function of `@angular-package/type`.
   * @returns The return value is the word 'Less` of a `string`.
   * @angularpackage
   */
  public get [Symbol.toStringTag](): string {
    return 'Less';
  }
  //#endregion instance public accessors.

  //#region public static methods.
  /**
   * Creates the `Less` instance with the given primitive `value`.
   * @param value The value of generic type variable `Value` to set with a newly created instance.
   * @returns The return value is the `Less` instance with the primitive value of the given `value`.
   * @angularpackage
   */
  public static create<Value extends number>(value: Value): Less<Value> {
    return new this(value);
  }

  /**
   * Checks whether the given `value` is the `Less` instance of any or given primitive value.
   * @param value The value of any type to test against the `Less` instance.
   * @param lessValue An optional value of generic type variable `Value` to check whether it's the primitive value of the given `value`.
   * @returns The return value is a `boolean` indicating whether the given `value` is the `Less` instance of any or given primitive
   * value.
   * @angularpackage
   */
  public static isLess<Value extends number>(
    value: any,
    lessValue?: Value
  ): value is Less<Value> {
    return (
      typeof value === 'object' &&
      value instanceof this &&
      (typeof lessValue === 'number' ? value.valueOf() === lessValue : true)
    );
  }
  //#endregion public static methods.

  //#region constructor.
  /**
   * Creates the `Less` instance with the given `value`.
   * @param value The value of generic type variable `Value` to set with a new instance.
   * @angularpackage
   */
  constructor(value: Value) {
    super(value);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * Checks whether the primitive value of a specified `object` is less than the given `value`.
   * @param value The value of number type to test.
   * @returns The return value is a `boolean` indicating whether the primitive value is less than the given value.
   * @angularpackage
   */
  public than(value: number): boolean {
    return typeof value === 'number' ? this.valueOf() < value : false;
  }

  /**
   * Checks whether the primitive value of a specified `object` is less than every given value.
   * @param values A rest parameter of the numbers to test.
   * @returns The return value is a `boolean` indicating whether the primitive value is less than every value of the given `values`.
   * @angularpackage
   */
  public thanEvery(...values: number[]): boolean {
    return Array.isArray(values)
      ? values.every((value) => this.valueOf() < value)
      : false;
  }

  /**
   * Checks whether the primitive value of a specified `object` is less than some given `values`.
   * @param values A rest parameter of the numbers to test.
   * @returns The return value is a `boolean` indicating whether the primitive value is less than some given `values`.
   * @angularpackage
   */
  public thanSome(...values: number[]): boolean {
    return Array.isArray(values)
      ? values.some((value) => this.valueOf() < value)
      : false;
  }

  /**
   * Returns the primitive value of a specified `object`.
   * @returns The return value is the primitive value of generic type variable `Value`.
   * @angularpackage
   */
  public valueOf(): Value {
    return super.valueOf() as any;
  }
  //#endregion instance public methods.
}
