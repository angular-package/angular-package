import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ClassHandlerClass } from './class-handler.class';
export interface ErrorHandlerMessages {
  [method: string]: string;
}

@Injectable()
export class ErrorHandlerClass extends ErrorHandler {

  private classHandler = new ClassHandlerClass();

  private messages: ErrorHandlerMessages = {
    checkMethodArguments: 'Argument(:arguments):  of `:method()` method is undefined.'
  };

  getMessages(messages: ErrorHandlerMessages): void {
    this.messages = messages;
  }

  http(error): void {
    if (error instanceof HttpErrorResponse) {
      console.error('Backend returned status code: ', error.status);
      console.error('Response body:', error.message);
    } else {
      console.error('An error occurred:', error);
    }
  }

  checkMethodArguments(t: object, args: any, expect?: undefined, message?: string): this {
    const invoked = this.classHandler.invoked.arguments(t, args, 3);
    let errorMessage: string | undefined;
    // Define `errorMessage`.
    if (message) {
      errorMessage = message;
    } else {
      const thisMethod = this.classHandler.invoked.name();
      errorMessage = (thisMethod) ? this.messages[thisMethod] : undefined;
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
            throw new Error(errorMessage);
          }
        });
    }

    return this;
  }
}
