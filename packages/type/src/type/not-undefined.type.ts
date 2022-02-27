/**
 * A generic type `NotUndefined` represents any type instead of `undefined`. It takes generic type variable `Type` constrained by
 * `undefined` which constraint causes its change to `never`.
 */
export type NotUndefined<Type> = Type extends undefined ? never : Type;
