import { Injectable } from '@angular/core';

import { ClassParameterHandlerClass } from './class-parameter-handler.class';

export interface Invoked {
  arguments(t: object, arg: any, invoked: number): object;
  name(index?: number): string | undefined;
}

@Injectable()
export class ClassMethodHandlerClass {
  invoked: Invoked = {
    arguments: (t: object, arg: any, invoked = 2): object => {
      const methodName = this.invoked.name(invoked);
      if (methodName) {
        const result = { [methodName]: {} };
        const parameters = this.parameter.get(t[methodName]);
        if (parameters !== null) {
          parameters.forEach((parameter, index) => result[methodName][parameter] = arg[index]);
        }

        return result;
      }

      throw new Error(`${methodName} not found.`);
    },
    name: (index = 1): string | undefined => {
      const e = new Error();

      return e.stack ? e.stack
        .split('\n')[index]
        .split('@')[0] : undefined;
    }
  };

  parameter: ClassParameterHandlerClass = new ClassParameterHandlerClass();

  set selected(selectedMethod: (...param: any) => any | undefined) {
    this.parameter.selectedMethod = selectedMethod;
  }
  get selected(): (...param: any) => any | undefined {
    return this.parameter.selectedMethod;
  }

  /**
   * @author wvvw.dev
   * @param object x
   * @returns x
   */
  call(...object: Array<object>): this {
    if (this.selected instanceof Function) {
      this.parameter.toValues(...object);
      if (this.selected) {
        this.selected(...this.parameter.values);
      }
    }

    return this;
  }

  /**
   * Select method to handle.
   * @author wvvw.dev
   * @param method Function to handle.
   * @returns this
   */
  method(method: (...param: any) => any): this {
    this.selected = method;

    return this;
  }

}
