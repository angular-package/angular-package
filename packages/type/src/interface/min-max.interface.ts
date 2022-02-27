/**
 * A generic type `MinMax` that takes generic type variables `Min` and `Max` represents the range between minimum and maximum.
 */
export interface MinMax<Min extends number, Max extends number> {
  /**
   * The minimum value of a generic type variable `Min` constrained by a `number` type.
   */
  min?: Min;

  /**
   * The maximum value of a generic type variable `Max` constrained by a `number` type.
   */
  max?: Max;
}
