import { Injectable } from '@angular/core';

import { ClassHandlerClass } from './class-handler.class';
export interface ErrorHandlerMessages {
  [method: string]: string;
}

@Injectable()
export class ErrorHandlerClass extends Error {
  /**
   *
   *
   */
  private classHandler = new ClassHandlerClass();

  /**
   *
   *
   */
  private _messages: ErrorHandlerMessages = {
    checkMethodArguments: 'Undefined arguments :arguments of `:method()` method.'
  };

  /**
   *
   *
   * @author wwwdev.io
   * @date 2018-11-26
   * @param messages x
   */
  messages(messages: ErrorHandlerMessages): void {
    this._messages = messages;
  }

  /**
   * x
   * @author wwwdev.io
   * @date 2018-11-26
   * @param t x
   * @param args x
   * @param [expect] x
   * @param [message] x
   * @returns x
   */
  checkMethodArguments(t: Object, args: any, expect?: undefined, message?: string): this {
    const invoked = this.classHandler.invoked.arguments(t, args, 3);
    let errorMessage: string | undefined;
    // Define `errorMessage`.
    if (message) {
      errorMessage = message;
    } else {
      const thisMethod = this.classHandler.invoked.name();
      errorMessage = (thisMethod) ? this._messages[thisMethod] : undefined;  
    }
    // Check `errorMessage`.
    if (errorMessage) {
      let undefinedArgs = '';
      let expectation = false;
      Object
        .keys(invoked)
        .forEach(method => {
          Object
            .keys(invoked[method])
            .forEach(argument => {
              if (argument && invoked[method][argument] === expect) {
                if (expectation === false) {
                  expectation = true;
                }
                undefinedArgs += `\`${argument}\`, `;
              }
            });
  
          if (errorMessage && expectation === true) {
            errorMessage = errorMessage
              .replace(`:method`, method)
              .replace(`:arguments`, undefinedArgs.substr(0, undefinedArgs.length - 2));
            throw new ErrorHandlerClass(errorMessage);
          } 
        });        
    }

    return this;
  }
}
