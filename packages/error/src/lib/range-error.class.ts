import { CommonError } from './common-error.class';
/**
 * The `RangeError` object is an extension of the `CommonError` class and is thrown when a value is not in the set or range of allowed
 * values with the message built from the described problem and its solution, optional explicit identification and minimum/maximum range
 * on the given or stored template.
 */
export class RangeError<
  Id extends string,
  Min extends number | undefined = undefined,
  Max extends number | undefined = undefined
> extends CommonError<Id> {
  /**
   * A template of the error message of `string` type with the replaceable required `{problem}`, `{fix}` and optional `{id}`, `{max}`,
   * `{min}` tags. By default, it's set to `Problem{id}: {problem} => Fix: {fix} between {min} and {max}`.
   */
  public static template = `Problem{id}: {problem} => Fix: {fix} between {min} and {max}`;

  //#region public instance accessors.
  /**
   * The `get` accessor obtains the maximum range of generic type variable `Max` that causes an error to be thrown(or not thrown), if set,
   * otherwise returns `undefined`.
   * @returns The return value is the maximum range of generic type variable `Max` or `undefined`.
   * @angularpackage
   */
  public get max(): Max | undefined {
    return this.#max;
  }

  /**
   * The `get` accessor obtains the minimum range of generic type variable `Min` that causes an error to be thrown(or not thrown), if set,
   * otherwise returns `undefined`.
   * @returns The return value is the minimum range of generic type variable `Min` or undefined.
   * @angularpackage
   */
  public get min(): Min | undefined {
    return this.#min;
  }

  /**
   * The `get` accessor obtains error name of a `string` type, set to `RangeError` that is being thrown.
   * @returns The return value is the error instance name of `string` type.
   * @angularpackage
   */
  public get name(): string {
    return 'RangeError';
  }

  /**
   * The `get` accessor obtains the minimum and maximum range in the form of an `object`.
   * @returns The return value is an `object` that consists of the minimum range under the `min` property and the maximum under the
   * `max` property.
   * @angularpackage
   */
  public get range(): { min?: Min; max?: Max } {
    return {
      min: this.#min,
      max: this.#max,
    };
  }

  /**
   * The `get` accessor, with the help of `toStringTag`, changes the default tag to `'RangeError'` for an instance of
   * `RangeError`. It can be read by the `typeOf()` function of `@angular-package/type`.
   * @returns The return value is the word 'RangeError` of a `string`.
   * @angularpackage
   */
  public get [Symbol.toStringTag](): string {
    return 'RangeError';
  }
  //#endregion public instance accessors.

  //#region private instance properties.
  /**
   * Private property of the maximum range of generic type variable `Max` that causes an error to be thrown(or not thrown).
   */
  #max?: Max;

  /**
   * Private property of the minimum range of generic type variable `Min` that causes an error to be thrown(or not thrown).
   */
  #min?: Min;
  //#endregion private instance properties.

  //#region public static methods.
  /**
   * Defines the `RangeError` instance with the message built from the given required `problem`, `fix` and optional `id`, `max`, `min` on
   * the given or stored `template`.
   * @param problem Description of the problem of a `string` type.
   * @param fix A solution to the given `problem` of a `string` type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param min The optional minimum range of generic type variable `Min` that causes an error to be thrown(or not thrown).
   * @param max The optional maximum range of generic type variable `Max` that causes an error to be thrown(or not thrown).
   * @param template A template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}`, `{max}`, `{min}` and tags.
   * By default, the value is picked from the static property `RangeError.template`.
   * @returns The return value is a new instance of the `RangeError` with the message built from the given required `problem`, `fix` and
   * optional `id`, `min`, `max` on the given or stored `template`.
   * @angularpackage
   */
  public static define<
    Id extends string,
    Min extends number | undefined = undefined,
    Max extends number | undefined = undefined
  >(
    problem: string,
    fix: string,
    id?: Id,
    min?: Min,
    max?: Max,
    template = RangeError.template
  ): RangeError<Id, Min, Max> {
    return new this(problem, fix, id, min, max, template);
  }

  /**
   * Checks whether the value of any type is an instance of `RangeError` of any or the given minimum/maximum range and identification.
   * @param value The value of any type to check against the `RangeError` instance.
   * @param id Optional identification of generic type variable `Id` to check whether the given `value` contains.
   * @param min The optional minimum range of generic type variable `Min` that causes an error to be thrown(or not thrown) to check whether
   * the given `value` contains.
   * @param max The optional maximum range of generic type variable `Max` that causes an error to be thrown(or not thrown) to check whether
   * the given `value` contains.
   * @returns The return value is a `boolean` type indicating whether the given `value` is an instance of `RangeError` of any or the given
   * `min`, max` and `id` properties.
   * @angularpackage
   */
  public static isRangeError<
    Id extends string,
    Min extends number | undefined = undefined,
    Max extends number | undefined = undefined
  >(
    value: any,
    id?: Id,
    min?: Min,
    max?: Max
  ): value is RangeError<Id, Min, Max> {
    return (
      super.isError(value, id) &&
      (typeof min === 'number' ? (value as any).min === min : true) &&
      (typeof max === 'number' ? (value as any).max === max : true)
    );
  }
  //#endregion public static methods.

  //#region constructor.
  /**
   * Creates the `RangeError` instance that represents range error with the message built of the given described `problem` and its solution,
   * optional `min`/`max` range, and an explicit identification on the given or stored error message template.
   * @param problem Description of the range problem of a `string` type.
   * @param fix A solution to the given range issue of a `string` type.
   * @param min The optional minimum range of generic type variable `Min` that causes an error to be thrown(or not thrown).
   * @param max The optional maximum range of generic type variable `Max` that causes an error to be thrown(or not thrown).
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template A template of error message with the replaceable required `{problem}`, `{fix}` and optional `{id}`, `{max}`, `{min}`
   * tags. By default, the value is equal to the static property `template`.
   * @angularpackage
   */
  constructor(
    problem: string,
    fix: string,
    id?: Id,
    min?: Min,
    max?: Max,
    template = RangeError.template
  ) {
    super(problem, fix, id, template, { min, max });
    this.#max = max;
    this.#min = min;
  }
  //#endregion constructor.
}
