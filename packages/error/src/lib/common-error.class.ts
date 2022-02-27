/**
 * The `CommonError` abstract object to throw an identified error with a solution to the described problem, additional type, and range built
 * on the template.
 */
export abstract class CommonError<Id extends string> extends Error {
  //#region public static properties.
  /**
   * A template of the error message of `string` type with the replaceable `{problem}`, `{fix}` and optional `{id}`, `{link}`, `{max}`,
   * `{min}`, `{type}` tags. By default, it's set to `Problem{id}: {problem} => Fix: {fix}`.
   */
  public static template = `Problem{id}: {problem} => Fix: {fix}`;
  //#endregion public static properties.

  //#region public instance accessors.
  /**
   * The `get` accessor obtains a possible solution to the described problem by returning the `#fix` property of a specified object.
   * @returns The return value is the fix of a `string` type.
   * @angularpackage
   */
  public get fix(): string {
    return this.#fix;
  }

  /**
   * The `get` accessor gets the error identification by returning the `#id` property of a specified object.
   * @returns The return value is the error identification of the generic type variable `Id` or `undefined`.
   * @angularpackage
   */
  public get id(): Id | undefined {
    return this.#id;
  }

  /**
   * The `get` accessor gets the link(to read more about the thrown error) by returning the `#link` property of a specified object.
   * @returns The return value is the link of a `string` type or `undefined`.
   * @angularpackage
   */
  public get link(): string | undefined {
    return this.#link;
  }

  /**
   * The `get` accessor gets the error message by returning the parent `message` property of the `Error` object.
   * @returns The return value is the error message of a `string` type.
   * @angularpackage
   */
  public get message(): string {
    return super.message;
  }

  /**
   * The `get` accessor gets the problem by returning the `#problem` property of a specified object.
   * @returns The return value is the problem of a `string` type.
   * @angularpackage
   */
  public get problem(): string {
    return this.#problem;
  }

  /**
   * The `get` accessor gets the template of the error message by returning the `#template` property of a specified object.
   * @returns The return value is the template of a `string` type.
   * @angularpackage
   */
  public get template(): string {
    return this.#template;
  }
  //#endregion public instance accessors.

  //#region private instance properties.
  /**
   * A privately stored possible solution to the described problem of a `string` type.
   */
  #fix: string;

  /**
   * Optional privately stored unique identification of the described problem of generic type variable `Id`.
   */
  #id?: Id;

  /**
   * The optional privately stored link of `string` type redirects to read more about the thrown error.
   */
  #link?: string;

  /**
   * A privately stored problem of a `string` type.
   */
  #problem: string;

  /**
   * A string-type privately stored template of the error message that contains replaceable required `{fix}`, `{problem}` and optional
   * `{id}`, `{link}`, `{max}`, `{min}`, `{type}` tags.
   */
  #template: string;
  //#endregion private instance properties.

  //#region protected static methods.
  /**
   * The static "tag" method builds from the given `values` the error message of a string type on the template.
   * @param templateStringsArray -
   * @param values A rest parameter of expressions in order the `problem`, `fix`, `id`, `template` and `additional`.
   * @returns The return value is the error message of a `string` type created from the expressions given in the `values`.
   * @angularpackage
   */
  protected static defineMessage(
    templateStringsArray: TemplateStringsArray,
    ...values: any[]
  ): string {
    let problem: string,
      fix: string,
      id: string | undefined,
      template: string,
      additional: { link?: string; min?: number; max?: number; type?: string };
    [problem, fix, id, template, additional] = values;
    template = (template || CommonError.template)
      .replace('{problem}', problem || '')
      .replace(/{id}/g, id || '')
      .replace(/{link}/g, additional?.link ? additional.link : '')
      .replace(/{max}/g, additional?.max ? String(additional.max) : '')
      .replace(/{min}/g, additional?.min ? String(additional.min) : '')
      .replace(/{type}/g, additional?.type ? additional.type : '')
      .replace('{fix}', fix || '');
    return template;
  }

  /**
   * Checks whether the value of any type is a `this` instance of any or the given identification.
   * @param value The value of any type to check against the `this` instance.
   * @param id Optional identification of generic type variable `Id` to check whether the given `value` contains.
   * @returns The return value is a `boolean` type indicating whether the given `value` is a `this` instance of any or the given `id`.
   * @angularpackage
   */
  protected static isError<Id extends string>(
    value: any,
    id?: Id
  ): value is CommonError<Id> {
    return typeof value === 'object' && value instanceof this
      ? typeof id === 'string'
        ? value.id === id
        : true
      : false;
  }
  //#endregion protected static methods.

  //#region constructor.
  /**
   * Creates an error instance with the message built from the given problem, its solution, optional type, range, an explicit identification
   * on the supplied or stored template.
   * @param problem Description of the problem of a `string` type.
   * @param fix A solution to the given `problem` of a `string` type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template A template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}`, `{link}`, `{max}`, `{min}`
   * and `{type}` tags. By default, the value is equal to the static property `template`.
   * @param additional An optional object consists of optional `link`, `min`, `max`, and `type` properties to define the error message.
   * @angularpackage
   */
  constructor(
    problem: string,
    fix: string,
    id?: Id,
    template = CommonError.template,
    additional?: { link?: string; max?: number; min?: number; type?: string }
  ) {
    super(
      CommonError.defineMessage`${problem}${fix}${id}${template}${additional}`
    );
    this.#fix = fix;
    this.#id = id;
    this.#link = additional?.link;
    this.#problem = problem;
    this.#template = template;
  }
  //#endregion constructor.
}
