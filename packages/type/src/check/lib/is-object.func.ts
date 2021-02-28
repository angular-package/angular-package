/**
 * Check is any `object` value a generic `Type` type.
 * Use `guardObject()` function to type guard generic `Type` `object` also.
 * @param object Any value to check it is a generic `Type` type.
 * @returns boolean
 */
export const isObject = <Type>(object: any): object is Type => object;
