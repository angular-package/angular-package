/**
 * Check is any `value` a `string` type.
 * Use `guardString()` to type guard `string` `value` also.
 * @param value Any `value` to check it is a `string` type.
 * @returns boolean.
 */
export const isString = (value: any): value is string => typeof value === 'string';
