import { Primitives } from '../../lib/primitives.type';
/**
 * Guard the `value` to be `Type` and check its value is `Primitives` type.
 * @param value to guard.
 * @param type to check `value` value is `Primitive` type.
 */
export const isPrimitiveType = <Type>(value: Type, type: Primitives): value is Type => typeof value === type;
