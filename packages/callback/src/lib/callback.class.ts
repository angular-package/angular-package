import { ResultCallback } from '@angular-package/type';
// Type.
import { ResultHandler } from '../type/result-handler.type';
/**
 * Manages the callback function of `ResultCallback`.
 */
export class Callback<AllowNames extends string> {
  //#region instance private properties
  /**
   * Callback storage.
   */
  #allowNames: Set<AllowNames> = new Set();

  //#region static public methods.
  /**
   * Defines callback `function` of `ResultCallback` type to throw `ValidationError` with a specified `message` on a state from the supplied
   * `throwOnState`. The provided `result`, `value`, and `payload` from the defined callback `function` of `ResultCallback` is being passed
   * to a thrown error of `ValidationError`.
   * @param message The message of `string` type or `ErrorMessage` interface to throw with an error of `ValidationError`.
   * @param throwOnState A state of `boolean` type on which an error of `ValidationError` should be thrown. By default, it's set to `false`.
   * @param resultHandler An optional `function` of `ResultHandler` type to inject into returned callback function of `ResultCallback` type
   * in order to execute it before the thrown error.
   * @param defaultPayload An optional `object` of generic type variable `Payload` as the default `value` of `payload` parameter of
   * `ResultHandler` function from the supplied `resultHandler` parameter.
   * @returns The return value is a function of the `ResultCallback` type that throws a `ValidationError`.
   * @angularpackage
   */
  // static defineErrorCallback<Value = any, Payload extends object = object>(
  //   message: ErrorMessage,
  //   throwOnState: boolean = false,
  //   resultHandler?: ResultHandler<Value, Payload>,
  //   defaultPayload?: Payload,
  //   validationError: ValidationError = this.validationError
  // ): ResultCallback<Value, Payload> {
  //   return Callback.defineResultCallback(
  //     (result, value, payload): any => (
  //       isFunction(resultHandler) && resultHandler(result, value, payload),
  //       (isFalse(throwOnState) ? isFalse(result) : isTrue(result)) &&
  //         Object.assign(validationError, { result, payload })
  //           .setMessage(message)
  //           .setValue(value)
  //           .throw()
  //     ),
  //     defaultPayload
  //   );
  // }

  /**
   * Defines callback function of `ForEachCallback` type to handle `forEach()` method of functions prefixed with `are` from
   * `@angular-package/type'.
   * @param forEachCallback The `function` of `ForEachCallback` type to define.
   * @param defaultPayload An optional `object` of a generic type variable `Payload` as the default `value` of `payload` parameter of the
   * returned `ForEachCallback` function.
   * @returns The return value is a `function` of the `ForEachCallback` type.
   * @angularpackage
   */
  // static defineForEachCallback<Value = any, Payload extends object = object>(
  //   forEachCallback: ForEachCallback<Value, Payload>,
  //   defaultPayload?: Payload
  // ): ForEachCallback<Value, Payload> {
  //   return (result, value, index, array, payload) =>
  //     forEachCallback(result, value, index, array, {
  //       ...payload,
  //       ...defaultPayload,
  //     } as any);
  // }

  /**
   * Defines callback `function` of `ResultCallback` type that contains `ResultHandler` function to handle the `result`, `value`, and
   * optional `payload` without returning the `result`.
   * @param resultHandler The `function` of `ResultHandler` type to inject into returned callback function of `ResultCallback` type.
   * @param defaultPayload An optional `object` of generic type variable `Payload` as the default `value` of `payload` parameter of the
   * returned `ResultCallback` function.
   * @returns The return value is a `function` of the `ResultCallback` type that contains the given `function` of the `ResultHandler` type.
   * @angularpackage
   */
  static defineResultCallback<Value = any, Payload extends object = object>(
    resultHandler: ResultHandler<Value, Payload>,
    defaultPayload?: Payload
  ): ResultCallback<Value, Payload> {
    return (result, value, payload) => (
      resultHandler(result, value, {
        ...payload,
        ...defaultPayload,
      } as Payload),
      result
    );
  }

  /**
   * Guards provided `resultCallback` to be `ResultCallback` type.
   * @param resultCallback The function of `ResultCallback` type to guard.
   * @returns The return value is a `boolean` indicating whether the provided `resultCallback` parameter is a `function`.
   * @angularpackage
   */
  // static guard<Value = any, Payload extends object = object>(
  //   resultCallback: ResultCallback<Value, Payload>
  // ): resultCallback is ResultCallback<Value, Payload> {
  //   return guardFunction(resultCallback);
  // }

  /**
   * Checks if the provided `value` is an instance of `Callback` with optional allowed names under which callback functions can be stored.
   * @param value The `value` of any type to check.
   * @param allowNames A rest parameter of a generic type variable `AllowNames` is being used only to capture the type for `AllowNames`
   * of returned `Callback`.
   * @returns The return value is a `boolean` indicating whether provided `value` is an instance of `Callback`.
   * @angularpackage
   */
  // public static isCallback<AllowNames extends string>(
  //   value: any,
  //   ...allowNames: AllowNames[]
  // ): value is Callback<AllowNames> {
  //   return isInstance(value, Callback);
  // }
  //#endregion

  /**
   * Initialize an instance of `Callback` with allowed names under which callback functions can be stored.
   * @param allowNames A rest parameter of allowed names of `string` type, under which callback functions can be stored. Only those names
   * given by this parameter are being checked by the `isNameAllowed()` private method.
   * @angularpackage
   */
  constructor(...allowNames: AllowNames[]) {
    this.#allowNames = new Set(allowNames);
    // guardArray(allowNames) && (this.#allowNames = new Set(allowNames));
  }

  //#region instance public methods
  /**
   * Gets from the storage specified by-name callback `function` of `ForEachCallback` type.
   * @param name The name of a generic type variable `Name` to get stored callback `function`.
   * @param capturePayload An optional `object` of generic type variable `Payload` that is used only to capture the value by the generic
   * type variable `Payload`.
   * @returns The return value is the callback `function` of the `ForEachCallback` type from the storage.
   * @angularpackage
   */
  // public getForEachCallback<
  //   Value = any,
  //   Payload extends object = object,
  //   Name extends AllowNames = AllowNames
  // >(name: Name, capturePayload?: Payload): ForEachCallback<Value, Payload> {
  //   return this.#allowNames.get(name);
  // }

  /**
   * Gets from the storage specified by-name callback function of `ResultCallback` type.
   * @param name The name of generic type variable `Name` to get the stored callback `function`.
   * @param capturePayload An optional `object` of generic type variable `Payload` that is used only to capture the value by the generic
   * type variable `Payload`.
   * @returns The return value is the callback `function` of the `ResultCallback` type from the storage.
   * @angularpackage
   */
  // public getResultCallback<
  //   Value = any,
  //   Payload extends object = object,
  //   Name extends AllowNames = AllowNames
  // >(name: Name, capturePayload?: Payload): ResultCallback<Value, Payload> {
  //   return this.#allowNames.get(name);
  // }

  /**
   * Sets callback function of `ResultCallback` type that throws `ValidationError` with a specified `message` on a state from the provided
   * `throwOnState` to the storage under the given allowed `name`.
   * @param name The name of a generic type variable `Name` under which callback `function` is stored. The allowed status of the provided
   * `name` is checked by the private method `isNameAllowed()`.
   * @param message The message of `string` type or an `object` of `ErrorMessage` interface, to throw with an error of `ValidationError`.
   * @param throwOnState A state of `boolean` type on which an error of `ValidationError` should be thrown. By default, it's set to `false`.
   * @param defaultPayload An optional `object` of generic type variable `Payload` as the default `value` of `payload` parameter of the
   * defined `ResultCallback` function.
   * @returns The return value is an instance of `Callback`.
   * @angularpackage
   */
  // public setErrorCallback<
  //   Value = any,
  //   Payload extends object = object,
  //   Name extends AllowNames = AllowNames
  // >(
  //   name: Name,
  //   message: ErrorMessage,
  //   throwOnState: boolean = false,
  //   resultHandler?: ResultHandler<Value, Payload>,
  //   defaultPayload?: Payload
  // ): this {
  //   // this.#storage.set(
  //   //   name,
  //   //   Callback.defineErrorCallback(
  //   //     message,
  //   //     throwOnState,
  //   //     resultHandler,
  //   //     defaultPayload,
  //   //     this.#validationError
  //   //   )
  //   // );
  //   return this;
  // }

  /**
   * Sets callback `function` of `ForEachCallback` type to the storage under the given allowed `name`.
   * @param name The name of a generic type variable `Name` under which callback `function` is stored. The allowed status of the provided
   * `name` is checked by the private method `isNameAllowed()`.
   * @param forEachCallback The callback function of `ForEachCallback` type to set under the given `name`.
   * @param defaultPayload An optional `object` of generic type variable `Payload` as the default value of `payload` parameter of supplied
   * `forEachCallback` function.
   * @returns The return value is an instance of `Callback`.
   * @angularpackage
   */
  // public setForEachCallback<
  //   Value = any,
  //   Payload extends object = object,
  //   Name extends AllowNames = AllowNames
  // >(
  //   name: Name,
  //   forEachCallback: ForEachCallback<Value, Payload>,
  //   defaultPayload?: Payload
  // ): this {
  //   // this.#storage.set(
  //   //   name,
  //   //   Callback.defineForEachCallback(forEachCallback, defaultPayload)
  //   // );
  //   return this;
  // }

  /**
   * Sets callback `function` of `ResultCallback` type to the storage under the given allowed `name`.
   * @param name The name of a generic type variable `Name` under which callback `function` is stored. The allowed status of the provided
   * `name` is checked by the private method `isNameAllowed()`.
   * @param resultHandler The `function` of `ResultHandler` type to handle the `result`, `value` and optional `payload` of the
   * `ResultCallback` function without returning the `result`.
   * @param defaultPayload An optional `object` of generic type variable `Payload` as the default value of `payload` parameter of supplied
   * `resultHandler` function.
   * @returns The return value is an instance of `Callback`.
   * @angularpackage
   */
  // public setResultCallback<
  //   Value = any,
  //   Payload extends object = object,
  //   Name extends AllowNames = AllowNames
  // >(
  //   name: Name,
  //   resultHandler: ResultHandler<Value, Payload>,
  //   defaultPayload?: Payload
  // ): this {
  //   // this.#storage.set(
  //   //   name,
  //   //   Callback.defineResultCallback(resultHandler, defaultPayload)
  //   // );
  //   return this;
  // }

  /**
   * Sets custom instance of `ValidationError`.
   * @param validationError An instance of `ValidationError` to set.
   * @returns The return value is an instance of `Callback`.
   */
  // public setValidationError(validationError: ValidationError): this {
  //   guardInstance(validationError, ValidationError) &&
  //     (this.#validationError = validationError);
  //   return this;
  // }
  //#endregion instance public methods
}
