/**
 * Check is the `value` a `string` type.
 * Use `guardString()` function for full string guard.
 * @param value to check.
 * @returns boolean.
 */
export const isString = (value: any): value is string => typeof value === 'string';
