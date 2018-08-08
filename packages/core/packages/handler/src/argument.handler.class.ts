
import { Argument } from '../../type/argument.type';
import { typeGuard } from '../../src/type-guard.func';

export class ArgumentHandlerClass {

  /**
   * Spread argument values to object.
   * @param args Array object.
   */
  protected spreadToObject(...args: Array<Object>): Object {
    let obj = {};
    args.forEach((add: Object) => obj = { ...obj, ...add });

    return obj;
  }

  /**
   * Argument value to array.
   * @template T Argument type.
   */
  protected toArray<T>(result: Argument<T>): Array<T | undefined> {
    if (typeGuard<T>(result) && Array.isArray(result)) {
      return result;
    }
    if (result instanceof Object) {
      const r: Array<any> = Object.keys(result);

      return r;
    }

    return [result];
  }
}
