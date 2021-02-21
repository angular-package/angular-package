
import { typeObjectGuard } from '../../type/guard';

export class ArgumentHandlerClass {

  /**
   * Spread argument values to object.
   * @param args Array object.
   */
  protected toObject(...args: Array<any>): object {
    let obj = {};
    args.forEach((add: object) => obj = { ...obj, ...add });

    return obj;
  }

  /**
   * Argument value to array.
   * @template T any type.
   */
  protected toArray<T>(arg: any): Array<T> {
    if (typeObjectGuard<T>(arg) && Array.isArray(arg)) {
      return arg;
    }
    if (arg instanceof Object) {
      const r: Array<any> = Object.keys(arg);

      return r;
    }

    return [arg];
  }
}
