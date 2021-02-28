import { Primitives } from '../../lib/primitives.type';
/**
 * Guard the `value` to be `Type` from `Primitives`.
 * Use `isPrimitive()` function for check ONLY.
 * @param value to guard.
 * @param type to check `value` value is `Primitive` type.
 */
export const guardPrimitive = <Type>(value: Type, type: Primitives): value is Type => typeof value === type;
