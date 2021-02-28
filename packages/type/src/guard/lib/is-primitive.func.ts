import { Primitives } from '../../lib/primitives.type';
/**
 * Check is the `value` a `Type` from `Primitives`.
 * Use `guardPrimitive()` function for full `Primitives` guard.
 * @param value to guard.
 * @param type to check `value` value is `Primitive` type.
 */
export const isPrimitive = <Type>(value: any, type: Primitives): value is Type => typeof value === type;
