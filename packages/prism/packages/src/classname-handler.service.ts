import { ElementRef, Injectable, Renderer } from '@angular/core';
import { difference } from 'lodash-es';

@Injectable()
export class ApClassnameHandlerService {

  constructor(public renderer: Renderer) { }

  remove(element: ElementRef, className: string[], compareClassName?: string[]): this {
    if (compareClassName) {
      const diff = difference(compareClassName, className);
      if (diff instanceof Array) {
        diff.forEach((name: string) => {
          this.renderer.setElementClass(element.nativeElement, name, false);
        });
      }
    } else {
      for (const name in className) {
        if (name) {
          this.renderer.setElementClass(element.nativeElement, name, false);
        }
      }  
    }
    return this;
  }

  set(element: ElementRef, className: string[], compareClassName?: string[]): this {
    if (compareClassName instanceof Array) {
      this.remove(element, className, compareClassName);
    }
    className.forEach((name: string) => {
      this.renderer.setElementClass(element.nativeElement, name, true);
    });
    return this;
  }
}
