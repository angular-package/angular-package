/**
 * Check is the `value` a `number` type.
 * Use `guardNumber()` function for full number guard.
 * @param value to check.
 * @returns boolean
 */
export const isNumber = (value: any): value is number => typeof value === 'number';
