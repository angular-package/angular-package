import { Injectable } from '@angular/core';

/**
 * To handle method parameters.
 * @author wwwdev.io
 * @date 2018-11-28
 * @export
 */
@Injectable()
export class ClassParameterHandlerClass {
  values: Array<any> = [];
  selectedMethod?: Function;

  get(method: Function | undefined = this.selectedMethod): RegExpMatchArray | null {
    if (method) {
      const methodString = method.toString();

      return methodString
        .slice(methodString.indexOf('(') + 1, methodString.indexOf(')'))
        .match(/([^\s,]+)/g);  
    }

    return null;
  }

  toValues(...object: Array<Object>): this {
    if (this.selectedMethod) {
      this.values = [];
      object.map(o => this.loop(parameter => this.values.push(o[parameter])));
    }
   
    return this;
  }

  loop(callbackfn: (parameter: string, index: number) => void, method: Function | undefined = this.selectedMethod): this {
    const parameters = this.get(method);
    // console.log(`loop`, this.selectedMethod, method, parameters);
    if (parameters instanceof Array) {
      parameters.forEach(callbackfn);
    }

    return this;
  }
}
