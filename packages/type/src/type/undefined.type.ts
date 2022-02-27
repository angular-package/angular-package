/**
 * A generic type `Undefined` indicates generic type variable `Type` as undefined. It takes generic type variable `Type` causing other
 * types than `undefined` its change to never.
 */
export type Undefined<Type> = Type extends undefined ? Type : never;
