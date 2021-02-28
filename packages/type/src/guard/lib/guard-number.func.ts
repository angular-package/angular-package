/**
 * Guard the `value` to be `number` type.
 * @param value to guard and check.
 * @returns boolean
 */
export const guardNumber = (value: number): value is number => typeof value === 'number';
