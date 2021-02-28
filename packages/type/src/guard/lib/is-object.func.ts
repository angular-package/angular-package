/**
 * Check any `object` to be `Type`.
 * Use `guardObject()` function for full object `Type` guard.
 * @param object to check.
 * @returns boolean
 */
export const isObject = <Type>(object: any): object is Type => object;
