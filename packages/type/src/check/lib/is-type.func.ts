import { Types } from '../../lib/types.type';
/**
 * Check is any `value` a class or primitive type.
 * Use `guardType()` to type guard generic `Type` `value` also.
 * @param value Any value to check it is a generic `Type` from one of the `type`.
 * @param type Constructor generic `Type` or one of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value` type.
 */
export const isType = <Type>(value: any, type: Types<Type>): value is Type =>
  (typeof type === 'string') ? (typeof value === type) : value instanceof type;
