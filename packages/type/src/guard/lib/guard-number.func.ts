/**
 * Guard the `value` to be `number` type.
 * Use `isNumber()` function for check ONLY.
 * @param value `Type `number` value to guard.
 * @returns boolean
 */
export const guardNumber = (value: number): value is number => typeof value === 'number';
