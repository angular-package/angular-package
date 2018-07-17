import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { difference } from 'lodash-es';

@Injectable()
export class ClassHandlerService {

  constructor(public renderer: Renderer2) { }

  remove(element: ElementRef, className: Array<string>, compareClassName?: Array<string>): this {
    if (compareClassName) {
      const diff = difference(compareClassName, className);
      if (diff instanceof Array) {
        diff.forEach((name: string) => {
          this.renderer.removeClass(element.nativeElement, name);
        });
      }
    } else {
      for (const name in className) {
        if (name) {
          this.renderer.removeClass(element.nativeElement, name);
        }
      }  
    }

    return this;
  }

  set(element: ElementRef, className: Array<string>, compareClassName?: Array<string>): this {
    if (compareClassName instanceof Array) {
      this.remove(element, className, compareClassName);
    }
    className.forEach((name: string) => {
      this.renderer.addClass(element.nativeElement, name);
    });

    return this;
  }
}
