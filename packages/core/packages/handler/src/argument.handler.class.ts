
import { Argument } from '../../type';

export class ArgumentHandlerClass {

  /**
   * Spread argument values to object.
   * @param args Array object.
   */
  spreadToObject(...args: Array<Object>): Object {
    let obj = {};
    args.forEach((add: Object) => obj = { ...obj, ...add });

    return obj;
  }

  /**
   * Argument value to array.
   * @template T Argument type.
   */
  toArray<T>(result: Argument<T>): Array<T> {
    if (Array.isArray(result)) {
      return result;
    }
    if (result instanceof Object) {
      const r: Array<any> = Object.keys(result);

      return r;
    }

    return [result];
  }
}
