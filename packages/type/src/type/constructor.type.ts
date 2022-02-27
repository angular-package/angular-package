/**
 * An instance of a type from the provided generic type variable `Type`.
 */
export type Constructor<Type> = new (...args: any[]) => Type;
