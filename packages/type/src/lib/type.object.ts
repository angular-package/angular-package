// Object.
import { are } from '../are/lib/are.object';
import { guard } from '../guard/lib/guard.object';
import { is } from '../is/lib/is.object';
// Function.
import { typeOf } from './type-of.func';
/**
 * The `object` consists of `are`, `is` and `guard` objects.
 */
export const type = Object.freeze({
  /**
   * The object consists of `are` functions.
   */
  are,

  /**
   * The object consists of `is` functions.
   */
  is,

  /**
   * The `object` consists of `guard` functions.
   */
  guard,

  // TODO: of: typeOf
});
