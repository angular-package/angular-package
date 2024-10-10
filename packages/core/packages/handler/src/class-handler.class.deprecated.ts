import { Injectable } from '@angular/core';

import { ClassMethodHandlerClass } from './class-handler/class-method-handler.class';
// import { ClassParameterHandlerClass } from './class-handler/class-parameter-handler.class';

@Injectable()
export class ClassHandlerClass extends ClassMethodHandlerClass {

  // method = new ClassMethodHandlerClass();

  /**
   *
   * @author wwwdev.io
   * @date 2018-11-22
   * @param t x
   * @param arg x
   * @param [invoked=2] Default 2 when use getInvokeMethodArgument within method to get.
   */
  getInvokedMethodArguments(t: Object, arg: any, invoked = 2): Object {
    const methodName = this.getInvokedMethodName(invoked);
    if (methodName) {
      const result = { [methodName]: {} };
      const parameters = this.getParameterNames(t[methodName]);
      if (parameters !== null) {
        parameters
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

    return funcString
      .slice(funcString.indexOf('(') + 1, funcString.indexOf(')'))
      .match(/([^\s,]+)/g);
  }

  /**
   * Loop function parameters.
   * @author wwwdev.io
   * @date 2018-11-09
   * @param func Function with parameters.
   * @param callback Function to handle each parameter name.
   * @returns x
   */
  toArray(func: Function, callback: (parameter: string) => any): RegExpMatchArray | null {
    const parameters = this.getParameterNames(func);
    if (parameters instanceof Array) {
      parameters.forEach(callback);
    }

    return parameters;
  }
}
