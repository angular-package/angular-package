/**
 * A generic type `Defined` indicates the generic type variable `Type` is never `undefined`.
 * It takes generic type variable `Type` constrained by `undefined` by using `Never` which constraint causes its change to `never`.
 */
export type Defined<Type> = Type extends undefined ? never : Type;
