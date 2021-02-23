import { Types } from '../../lib/types.type';

export const typeGuard = <Type>(value, type: Types<Type>): value is Type =>
  (typeof type === 'string') ? typeof value === type : value instanceof type;
