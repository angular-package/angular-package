// Function.
import { areDeterminer } from './are-determiner.func';
import { isString } from '../../is/lib/is-string.func';
/**
 * Checks if the values are a `string` type or an instance of `String` by using `every()`, `forEach()` and `some()` methods of the
 * returned object.
 * @param values A rest parameter of `any` type to check its elements against a `string` type or an instance of `String`.
 * @returns The return value is an `object` with `every()`, `some()` and `forEach()` as a methods of checking supplied values.
 * @angularpackage
 */
export const areString = <CommonPayload extends object>(...values: any[]) =>
  areDeterminer<CommonPayload>(isString, ...values);

// {
//   return {
//     /**
//      * Checks if every of the provided `values` of `areString()` is a `string` type or an instance of `String`.
//      * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of
//      * this check, and `payload` of generic type variable `Payload` with optional properties from the provided `payload`, to handle
//      * them before the `result` return. By default, it uses `resultCallback()` function.
//      * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
//      * @returns The return value is a `boolean` indicating whether the provided values of `areString()` are a `string` type or an instance
//      * of `String`.
//      */
//     every: <Payload extends CommonPayload>(
//       callback: ResultCallback<any, Payload> = resultCallback,
//       payload?: Payload
//     ): boolean =>
//       callback(
//         values.every((value) => isString(value)),
//         values,
//         payload
//       ),

//     /**
//      * The `forEach()` method executes a provided callback function once for each element of the supplied `values` of `areString()`.
//      * @param forEachCallback A callback `function` of `ForEachCallback` type with parameters, the `value` that has been checked, the
//      * `result` of this check, `index` of each element, the provided `values` and `payload` of generic type variable `Payload` with
//      * optional properties from the provided `payload`, to handle them before the `result` return.
//      * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
//      * @returns The return value is void.
//      */
//     forEach: <Payload extends CommonPayload>(
//       forEachCallback: ForEachCallback<any, Payload>,
//       payload?: Payload
//     ) => {
//       if (isArray(values) && isFunction(forEachCallback)) {
//         values.forEach((value, index) =>
//           forEachCallback(isString(value), value, index, values, payload)
//         );
//       }
//     },

//     /**
//      * Checks if some of the provided `values` of `areString()` are a `string` type or an instance of `String`.
//      * @param callback A callback `function` of `ResultCallback` type with parameters, the `value` that has been checked, the `result` of
//      * this check, and `payload` of generic type variable `Payload` with optional properties from the provided `payload`, to handle
//      * them before the `result` return. By default, it uses `resultCallback()` function.
//      * @param payload An optional `object` of the generic type variable `Payload` is assigned to the `payload` of the given `callback` function.
//      * @returns The return value is a `boolean` indicating whether some of the provided values of `areString()` are a `string` type or an
//      * instance of `String`.
//      */
//     some: <Payload extends CommonPayload>(
//       callback: ResultCallback<any, Payload> = resultCallback,
//       payload?: Payload
//     ): boolean =>
//       callback(
//         isArray(values) ? values.some((value) => isString(value)) : false,
//         values,
//         payload
//       ),
//   };
// };
