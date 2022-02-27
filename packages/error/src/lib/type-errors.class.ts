import { CommonErrors } from './common-errors.class';
import { TypeError } from './type-error.class';
/**
 * The `TypeErrors` is an extension of the `CommonErrors` object that represents multiple identification numbers under which the errors of
 * the `TypeError` type are prepared to throw.
 */
export class TypeErrors<Id extends string> extends CommonErrors<Id> {
  //#region constructor.
  /**
   * Creates the `TypeErrors` instance of unique identification numbers under which the `TypeError` objects are stored.
   * @param id A rest parameter of generic type variable `Id` indicates unique identification numbers under which the `TypeError` objects
   * are stored.
   * @angularpackage
   */
  constructor(...id: Id[]) {
    super(...id);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * Returns the `TypeError` instance of the given unique identification `id` if set, otherwise `undefined`.
   * @param id The unique identification number of generic type variable `ErrorId` to pick an error from the object.
   * @returns The return value is the `TypeError` instance of the given `id` if set, otherwise undefined.
   * @angularpackage
   */
  public get<ErrorId extends Id>(id: ErrorId): TypeError<ErrorId> | undefined {
    return this.errors.get(id);
  }

  /**
   * The method returns the object of set type errors, where the key is a unique identification.
   * @returns The return value is an `object` of set type errors.
   * @angularpackage
   */
  public getErrors(): { [Key in Id]: TypeError<Key> | undefined } {
    return Object.fromEntries(this.errors.entries()) as any;
  }

  /**
   * Sets the `TypeError` object with the message built from the given required `problem`, `fix`, `id` and optional `type` on the given or
   * stored `template` under the given `id`.
   * ! The error is not set, if the given `id` was not provided in the constructor.
   * @param problem Description of the problem of a string type.
   * @param fix A solution to the given `problem` of a string type.
   * @param id The unique identification to the given `problem` of generic type variable `ErrorId`.
   * @param type The optional type of `string` type that causes an error to be thrown(or not thrown).
   * @param template A template of error message with the replaceable `{problem}`, `{fix}`, `{id}`, and optional `{type}` tags. By default,
   * the value is equal to the static property `RangeErrors.template`.
   * @returns The return value is an instance of `TypeErrors`.
   * @angularpackage
   */
  public set<ErrorId extends Id>(
    problem: string,
    fix: string,
    id: ErrorId,
    type?: string,
    template = TypeErrors.template
  ): this {
    this.isAllowedId(id) &&
      this.errors.set(id, new TypeError(problem, fix, id, type, template));
    return this;
  }
  //#endregion instance public methods.
}
