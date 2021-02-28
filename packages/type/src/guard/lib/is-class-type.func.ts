import { Constructor } from '../../lib/constructor.type';
/**
 * Check any `object` is generic `Type`.
 * @param object Object class to guard and check instance.
 * @param type y
 */
// TODO:: check for proper functionality.
export const isClass = <Type>(object: any, type?: Constructor<Type>): object is Type => object instanceof type;
