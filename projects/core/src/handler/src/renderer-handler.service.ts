import { ElementRef, Injectable, Renderer2 } from '@angular/core';

@Injectable()
export class RendererHandlerService {

  constructor(public renderer: Renderer2) { }

  removeClass(element: ElementRef, className: Array<string>, compareClassName?: Array<string>): this {
    if (className instanceof Array) {
      if (compareClassName instanceof Array) {
        compareClassName.filter(predicate => !className.includes(predicate)).forEach(name => {
          this.renderer.removeClass(element, name);
        });
      } else {
        className.forEach(name => {
          this.renderer.removeClass(element, name);
        });
      }
    }

    return this;
  }

  setClass(element: ElementRef, className: Array<string>, compareClassName?: Array<string>): this {
    if (element && className instanceof Array) {
      if (compareClassName instanceof Array) {
        this.removeClass(element, className, compareClassName);
      }
      className.forEach((name: string) => {
        if (name) {
          this.renderer.addClass(element, name);
        }
      });
    }

    return this;
  }
}
