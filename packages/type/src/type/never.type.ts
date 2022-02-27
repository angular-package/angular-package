/**
 * A generic type `Never` indicates the generic type variable `Type` is never of the generic type variable `Not`.
 * It takes generic type variable `Type` constrained by a generic type variable `Not` which constraint causes its change to `never`.
 */
export type Never<Not, Type> = Type extends Not ? never : Type;
