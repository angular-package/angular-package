
export type Data<T> = Array<any> | boolean | number | string | { [property: string]: T };

export class ArgumentHandlerClass {

  spreadToObject(...args: Array<Object>): Object {
    let obj = {};
    args.forEach((add: Object) => {
      obj = { ...obj, ...add };
    });

    return obj;
  }

  toArray<T>(result: Data<T>): Array<string> {
    if (Array.isArray(result)) {
      return result;
    }
    if (result instanceof Object) {
      return Object.keys(result);
    }

    return [result];
  }

}
