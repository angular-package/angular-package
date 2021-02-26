/**
 * Guard the `value` to be `string` type.
 * @param value to guard.
 */
export const isString = (value: string): value is string => typeof value === 'string';
