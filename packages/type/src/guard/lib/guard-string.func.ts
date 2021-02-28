/**
 * Guard the `value` to be a `string` type.
 * @param value to guard.
 */
export const guardString = (value: string): value is string => typeof value === 'string';
