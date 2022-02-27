import { ResultCallback } from '@angular-package/type';
import { ResultHandler } from '../type/result-handler.type';

export class Callback {
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
  constructor() {}
}

const a = Callback.defineResultCallback((result, value, payload) => {
  console.log(result, payload, value);
  return result;
}, { data: 'bla' } as any);
// console.log(a);
a(true, 13, { data: 'a', name: 'a' });


// // @angular-package/type.
// import {
//   // Type.
//   ForEachCallback,
//   ResultCallback,
//   // Function.
//   guardArray,
//   guardFunction,
//   guardInstance,
//   guardString,
//   isFalse,
//   isFunction,
//   isInstance,
//   isTrue,
// } from '@angular-package/type';
// // Type.
// // Storage.
// /**
//  * Manages the callback functions of `ResultCallback` type.
//  */
// export class ResultCallbacks<AllowNames extends string> {
//   /**
//    * Storage.
//    */
//   #storage = new Storage();

//   /**
//    * Defines callback `function` of `ResultCallback` type that contains `ResultHandler` function to handle the `result`, `value`, and
//    * optional `payload` without returning the `result`.
//    * @param resultHandler The `function` of `ResultHandler` type to inject into returned callback function of `ResultCallback` type.
//    * @param defaultPayload An optional `object` of generic type variable `Payload` as the default `value` of `payload` parameter of the
//    * returned `ResultCallback` function.
//    * @returns The return value is a `function` of the `ResultCallback` type that contains the given `function` of the `ResultHandler` type.
//    * @angularpackage
//    */
//   static defineResultCallback<Value = any, Payload extends object = object>(
//     resultHandler: ResultHandler<Value, Payload>,
//     defaultPayload?: Payload
//   ): ResultCallback<Value, Payload> {
//     return (result, value, payload) => (
//       resultHandler(result, value, {
//         ...payload,
//         ...defaultPayload,
//       } as Payload),
//       result
//     );
//   }

//   /**
//    * Initialize an instance of `Callback` with allowed names under which callback functions can be stored.
//    * @param allowNames A rest parameter of allowed names of `string` type, under which callback functions can be stored. Only those names
//    * given by this parameter are being checked by the `isNameAllowed()` private method.
//    * @angularpackage
//    */
//   constructor(...allowNames: AllowNames[]) {
//     guardArray(allowNames) && (this.#storage = new Storage(...allowNames));
//   }

//   //#region instance public methods
//   /**
//    * Gets from the storage specified by-name callback function of `ResultCallback` type.
//    * @param name The name of generic type variable `Name` to get the stored callback `function`.
//    * @param capturePayload An optional `object` of generic type variable `Payload` that is used only to capture the value by the generic
//    * type variable `Payload`.
//    * @returns The return value is the callback `function` of the `ResultCallback` type from the storage.
//    * @angularpackage
//    */
//   public getResultCallback<
//     Value = any,
//     Payload extends object = object,
//     Name extends AllowNames = AllowNames
//   >(name: Name, capturePayload?: Payload): ResultCallback<Value, Payload> {
//     return this.#storage.get(name);
//   }

//   /**
//    * Sets callback `function` of `ResultCallback` type to the storage under the given allowed `name`.
//    * @param name The name of a generic type variable `Name` under which callback `function` is stored. The allowed status of the provided
//    * `name` is checked by the private method `isNameAllowed()`.
//    * @param resultHandler The `function` of `ResultHandler` type to handle the `result`, `value` and optional `payload` of the
//    * `ResultCallback` function without returning the `result`.
//    * @param defaultPayload An optional `object` of generic type variable `Payload` as the default value of `payload` parameter of supplied
//    * `resultHandler` function.
//    * @returns The return value is an instance of `Callback`.
//    * @angularpackage
//    */
//   public setResultCallback<
//     Value = any,
//     Payload extends object = object,
//     Name extends AllowNames = AllowNames
//   >(
//     name: Name,
//     resultHandler: ResultHandler<Value, Payload>,
//     defaultPayload?: Payload
//   ): this {
//     // this.#storage.set(
//     //   name,
//     //   ResultCallbacks.defineResultCallback(resultHandler, defaultPayload)
//     // );
//     return this;
//   }
// }
