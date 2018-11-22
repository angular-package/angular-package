
export class ClassHandlerClass {

  getInvokedMethodArguments(t: Object, arg: any): {[index: string]: any} {
    const methodName = this.getInvokedMethodName(2);
    if (methodName) {
      const result = { [methodName]: {} };
      if (t[methodName] && this.getParameterNames(t[methodName])) {
        this.getParameterNames(t[methodName])
          .forEach((parameter, index) => {
            result[methodName][parameter] = arg[index];
          });
      }  

      return result;
    }

    throw new Error(`${methodName} not found.`);
  }

  getInvokedMethodName(index = 1): string | undefined {
    const e = new Error('getInvokedMethodName');

    return e.stack ? e.stack
      .split('\n')[index]
      .split('@')[0] : undefined;
  }

  /**
   * Get parameters names from declared function.
   * @author wwwdev.io
   * @date 2018-11-09
   * @param func Function with parameters.
   * @returns List of parameters.
   */
  getParameterNames(func: Function): RegExpMatchArray | null {
    const funcString = func.toString();

    return funcString.slice(funcString.indexOf('(') + 1, funcString.indexOf(')'))
      .match(/([^\s,]+)/g);
  }

  /**
   * Loop function parameters.
   * @author wwwdev.io
   * @date 2018-11-09
   * @param func Function with parameters.
   * @param callback Function to handle each parameter name.
   */
  toArray(func: Function, callback: (parameter: string) => any): void {
    const parameters = this.getParameterNames(func);
    if (parameters instanceof Array) {
      parameters.forEach(callback);
    }
  }
}
