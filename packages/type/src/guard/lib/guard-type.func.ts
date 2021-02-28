import { Types } from '../../lib/types.type';
/**
 * Guard the `value` to be `Type` and check its value is `Primitives` type.
 * @param value to guard.
 * @param type to check `value` value is `Primitive` type.
 */
export const guardType = <Type>(value: Type, type: Types<Type>): value is Type => typeof value === type;
