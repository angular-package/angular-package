/**
 * The `CommonErrors` object represents the storage of errors with unique identification numbers.
 */
export abstract class CommonErrors<Id extends string> {
  /**
   * Optional template of `string` type.
   */
  public static template?: string;

  //#region protected instance accessors.
  /**
   * The `get` accessor returns the errors of `Map` type by returning the `#errors` property of a specified object.
   * @returns The return value is the `Map` object of errors.
   * @angularpackage
   */
  protected get errors(): Map<Id, any> {
    return this.#errors;
  }
  //#endregion protected instance accessors.

  //#region private instance properties.
  /**
   * An optional collection of unique allowed identification numbers of generic type variable `Id` under which errors are stored.
   */
  #id?: Set<Id>;

  /**
   * The errors storage of the `Map` type where the `key` is of the generic type variable `Id`.
   */
  #errors: Map<Id, any> = new Map();
  //#endregion private instance properties.

  //#region constructor.
  /**
   * Creates an instance of the errors storage with unique identification numbers. Identification numbers given in the rest parameter `id`
   * are used by the instance `isAllowedId()` method to check the existence of the specific `id`.
   * @param id A rest parameter of generic type variable `Id` indicates unique identification numbers under which the errors are stored in
   * the object.
   * @angularpackage
   */
  constructor(...id: Id[]) {
    Array.isArray(id) && (this.#id = new Set(id));
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * Deletes the error of a specified `id` from the object.
   * @param id The unique identification of a generic type variable `ErrorId` to remove the error from the object.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public delete<ErrorId extends Id>(id: ErrorId): this {
    this.#errors.delete(id);
    return this;
  }

  /**
   * The `has()` method checks whether the error of the given `id` exists in a specified object.
   * @param id The error identification number of generic type variable `ErrorId` to test for the presence of the error in the object.
   * @returns The return value is a `boolean` indicating whether the error of the given `id` exists in the object.
   * @angularpackage
   */
  public has<ErrorId extends Id>(id: ErrorId): boolean {
    return this.#errors.has(id);
  }

  /**
   * Throws an error of the given `id` if the unique id was provided in the constructor.
   * @param id The unique identification number of generic type variable `ErrorId` to obtain an error to throw.
   * @angularpackage
   */
  public throw<ErrorId extends Id>(id: ErrorId): void {
    if (this.isAllowedId(id)) {
      throw this.errors.get(id);
    }
  }

  //#endregion instance public methods.

  //#region instance protected methods.
  /**
   * Checks whether the given identification number was provided in the constructor.
   * @param id The error identification number of generic type variable `ErrorId` to test for its presence in the object.
   * @angularpackage
   */
  protected isAllowedId<ErrorId extends Id>(id: ErrorId): boolean {
    return this.#id ? this.#id.has(id) : false;
  }
  //#endregion instance protected methods.
}
