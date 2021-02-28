/**
 * Check is the `value` a `number` type.
 * @param value to check.
 * @returns boolean
 */
export const isNumber = (value: any): value is number => typeof value === 'number';
