import { CommonError } from './common-error.class';
/**
 * The `TypeError` object is an extension of the `CommonError` class and is thrown when an operation could not be performed,
 * typically(but not exclusively) when a value is not of the expected type, with the message built from the described problem and its
 * solution, optional an explicit identification and type, on the given or stored template.
 */
export class TypeError<
  Id extends string,
  Type extends string | undefined = undefined
> extends CommonError<Id> {
  /**
   * A template of the error message of `string` type with the replaceable required `{fix}`,`{problem}` and optional `{id}`, `{max}`,
   * `{min}`, `{type}` tags. By default, it's set to `Problem{id}: {problem} => Fix: {fix} must be of the {type}`.
   */
  public static template = `Problem{id}: {problem} => Fix: {fix} must be of the {type}`;

  //#region public instance accessors.
  /**
   * The `get` accessor obtains error name of a `string` type, set to 'TypeError' that is being thrown.
   * @returns The return value is the error instance name of `string` type.
   * @angularpackage
   */
  public get name(): string {
    return 'TypeError';
  }

  /**
   * The `get` accessor obtains the type of generic type variable `Type` that causes an error to be thrown(or not thrown) if set, otherwise
   * returns `undefined`.
   * @returns The return value is the type of generic type variable `Type` or `undefined`.
   * @angularpackage
   */
  public get type(): Type | undefined {
    return this.#type;
  }

  /**
   * The `get` accessor, with the help of `toStringTag`, changes the default tag to `'TypeError'` for an instance of
   * `TypeError`. It can be read by the `typeOf()` function of `@angular-package/type`.
   * @returns The return value is the word 'TypeError` of a `string`.
   * @angularpackage
   */
  public get [Symbol.toStringTag](): string {
    return 'TypeError';
  }
  //#endregion public instance accessors.

  /**
   * Private string-type property of the type that causes an error to be thrown(or not thrown).
   */
  #type?: Type;

  //#region public static methods.
  /**
   * Defines the `TypeError` instance with the given required `problem`, `fix` and optional `id`, `type` and `template`.
   * @param problem Description of the problem of a `string` type.
   * @param fix A solution to the given `problem` of a `string` type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param type The optional type of generic type variable `Type` that causes an error to be thrown(or not thrown).
   * @param template A template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}`, `{type}` tags. By default,
   * the value is picked from the static property `TypeError.template`.
   * @returns The return value is a new instance of the `TypeError` with the message built from the given required `problem`, `fix` and
   * optional `id`, `type` on the given or stored `template`.
   * @angularpackage
   */
  public static define<
    Id extends string,
    Type extends string | undefined = undefined
  >(
    problem: string,
    fix: string,
    id?: Id,
    type?: Type,
    template = TypeError.template
  ): TypeError<Id, Type> {
    return new this(problem, fix, id, type, template);
  }

  /**
   * Checks whether the value of any type is an instance of `TypeError` of any or the given type and identification.
   * @param value The value of any type to check against the `TypeError` instance.
   * @param id Optional unique identification of generic type variable `Id` to check whether the given `value` contains.
   * @param type The optional type of generic type variable `Type` that causes an error to be thrown(or not thrown) to check whether the
   * given `value` contains.
   * @returns The return value is a `boolean` type indicating whether the given `value` is an instance of `TypeError` of any or the given
   * `type` and `id` properties.
   * @angularpackage
   */
  public static isTypeError<
    Id extends string,
    Type extends string | undefined = undefined
  >(value: any, id?: Id, type?: Type): value is TypeError<Id, Type> {
    return (
      super.isError(value, id) &&
      (typeof type === 'string' ? (value as any).type === type : true)
    );
  }
  //#endregion public static methods.

  //#region constructor.
  /**
   * Creates a `TypeError` instance that represents type error with the message built of the given described problem and its solution,
   * optional type, and an explicit identification on the supplied or stored error message template.
   * @param problem Description of the range problem of a `string` type.
   * @param fix A solution to the given range issue of a `string` type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param type The optional type of generic type variable `Type` that causes an error to be thrown(or not thrown).
   * @param template Optional template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}`, `{max}`, `{min}` and
   * `{type}` tags. By default, the value is picked from the static property `TypeError.template`.
   * @angularpackage
   */
  constructor(
    problem: string,
    fix: string,
    id?: Id,
    type?: Type,
    template = TypeError.template
  ) {
    super(problem, fix, id, template, { type });
    this.#type = type;
  }
  //#endregion constructor.
}
