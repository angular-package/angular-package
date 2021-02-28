/**
 * Check is any `value` a `number` type.
 * Use `guardNumber()` function to type guard `number` also.
 * @param value Any value to check it is a `number` type.
 * @returns boolean
 */
export const isNumber = (value: any): value is number => typeof value === 'number';
