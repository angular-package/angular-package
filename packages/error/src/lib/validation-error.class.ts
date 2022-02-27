import { CommonError } from './common-error.class';
/**
 * The `ValidationError` object is an extension of the `CommonError` class and is thrown when an operation could not be performed despite
 * proper type(but not exclusively) with the message built from the described problem and its solution, along with additional identification
 * on the given or stored template.
 */
export class ValidationError<Id extends string> extends CommonError<Id> {
  //#region public instance accessors.
  /**
   * The `get` accessor obtains error name of a `string` type, set to 'ValidationError' that is being thrown.
   * @returns The return value is the error instance name of `string` type.
   * @angularpackage
   */
  public get name(): string {
    return 'ValidationError';
  }

  /**
   * The `get` accessor, with the help of `toStringTag`, changes the default tag to `'ValidationError'` for an instance of
   * `ValidationError`. It can be read by the `typeOf()` function of `@angular-package/type`.
   * @returns The return value is the word 'ValidationError` of a `string`.
   * @angularpackage
   */
  public get [Symbol.toStringTag](): string {
    return 'ValidationError';
  }
  //#endregion public instance accessors.

  //#region public static methods.
  /**
   * Defines the `ValidationError` instance with the message built of the given required `problem`, `fix`, and optional `id` on the supplied
   * or stored `template`.
   * @param problem Description of the problem of a `string` type.
   * @param fix A solution to the given `problem` of a `string` type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template A template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}` tags. By default, the value
   * is picked from the static property `ValidationError.template`.
   * @returns The return value is a new instance of the `ValidationError` with the message built from the given required `problem`, `fix`
   * and optional `id` on the given or stored `template`.
   * @angularpackage
   */
  public static define<Id extends string>(
    problem: string,
    fix: string,
    id?: Id,
    template = ValidationError.template
  ): ValidationError<Id> {
    return new this(problem, fix, id, template);
  }

  /**
   * Checks whether the value of any type is the `ValidationError` instance of any or the given identification.
   * @param value The value of any type to check against the `ValidationError` instance.
   * @param id Optional unique identification of generic type variable `Id` to check whether the given `value` contains.
   * @returns The return value is a `boolean` type indicating whether the given `value` is an instance of `ValidationError` of any or the
   * supplied optional id properties.
   * @angularpackage
   */
  public static isValidationError<Id extends string>(
    value: any,
    id?: Id
  ): value is ValidationError<Id> {
    return super.isError(value, id);
  }
  //#endregion public static methods.

  //#region constructor.
  /**
   * Creates the `ValidationError` instance that represents validation error with the message built of the given described problem, its
   * solution, and optional explicit identification, on the supplied or stored error message template.
   * @param problem Description of the validation problem of a `string` type.
   * @param fix A solution to the given validation issue of a `string` type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template Optional template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}` tags. By default, the
   * value is picked from the static property `template`.
   * @angularpackage
   */
  constructor(
    problem: string,
    fix: string,
    id?: Id,
    // field?: string,
    template = ValidationError.template
  ) {
    super(problem, fix, id, template);
  }
  //#endregion constructor.
}
