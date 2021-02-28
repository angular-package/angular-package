import { Types } from '../../lib/types.type';
/**
 * Guard the `value` to be `Type` and check its value is `Primitives` type.
 * Use `guardType()` function for full `Type` guard.
 * @param value to guard.
 * @param type to check `value` value is `Primitive` type.
 */
export const isType = <Type>(value: any, type: Types<Type>): value is Type =>
  (typeof type === 'string') ? (typeof value === type) : value instanceof type;
