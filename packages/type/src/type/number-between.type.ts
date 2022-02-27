// Type.
import { AnyNumber } from './any-number.type';
// Interface.
import { MinMax } from '../interface/min-max.interface';
/**
 * A `number` type or an instance of `Number` between a specified range takes generic type variable `Min` and `Max` constrained by `number`
 * type as range, and takes generic type variable `Type` constrained by generic type `AnyNumber` as the type.
 */
export type NumberBetween<
  Min extends number,
  Max extends number,
  Type extends AnyNumber = number
> = Type & MinMax<Min, Max>;
