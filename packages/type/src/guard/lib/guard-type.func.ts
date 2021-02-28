import { Types } from '../../lib/types.type';
/**
 * Guard the `value` to be a generic `Type` from one of the `Types` type.
 * Use `isType()` function for check ONLY.
 * @param value A generic `Type` value to guard.
 * @param type Constructor generic `Type` or one of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` to check `value`.
 */
export const guardType = <Type>(value: Type, type: Types<Type>): value is Type =>
  (typeof type === 'string') ? (typeof value === type) : value instanceof type;
