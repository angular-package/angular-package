/**
 * Guard the `value` to be a `string` type.
 * Use `isString()` function for check ONLY.
 * @param value to guard.
 */
export const guardString = (value: string): value is string => typeof value === 'string';
