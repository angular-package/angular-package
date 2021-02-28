import { Primitives } from '../../lib/primitives.type';
/**
 * Guard the `value` to be a generic `Type` from one of the `Primitives`.
 * Use `isPrimitive()` function for check ONLY.
 * @param value A generic `Type` type value to guard.
 * @param type One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value`.
 */
export const guardPrimitive = <Type>(value: Type, type: Primitives): value is Type => typeof value === type;
