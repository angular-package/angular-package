import { Primitives } from '../../lib/primitives.type';
/**
 * Check is any `value` a generic `Type` type from one of the `Primitives`.
 * Use `guardPrimitive()` function to type guard generic `Type` `value` also.
 * @param value Any value to check it is a generic `Type` from the `type`.
 * @param type One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` type to check `value`.
 */
export const isPrimitive = <Type>(value: any, type: Primitives): value is Type => typeof value === type;
