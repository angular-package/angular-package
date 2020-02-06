import { Injectable } from '@angular/core';

import { ClassParameterHandlerClass } from './class-parameter-handler.class';

export interface Invoked {
  arguments(t: Object, arg: any, invoked: number): Object;
  name(index?: number): string | undefined;
}

@Injectable()
export class ClassMethodHandlerClass {  
  invoked: Invoked = {
    arguments: (t: Object, arg: any, invoked = 2): Object => {
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

  set selected(selectedMethod: Function | undefined) {
    this.parameter.selectedMethod = selectedMethod;
  }
  get selected(): Function | undefined {
    return this.parameter.selectedMethod;
  }

  /**
   * @author wwwdev.io
   * @date 2018-11-29
   * @param object x
   * @returns x
   */
  call(...object: Array<Object>): this {
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
   * @author wwwdev.io
   * @date 2018-11-28
   * @param method Function to handle.
   * @returns this
   */
  method(method: Function): this {
    this.selected = method;

    return this;
  }

}
