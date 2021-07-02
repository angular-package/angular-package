// external
import { ElementRef, Injectable, Renderer } from '@angular/core';
import { difference } from 'lodash-es';

// internal
import { ApPrismTemplate } from '../core/interface';

@Injectable()
export class ApAttributeHandlerService {

  constructor(public renderer: Renderer) { }

  get(element: ElementRef, name: string): string {
    return element.nativeElement.getAttribute(name);
  }

  remove(element: ElementRef, attributes: ApPrismTemplate<any>, compareAttributes?: ApPrismTemplate<any>): this {
    if (compareAttributes) {
      const diff = difference(Object.keys(compareAttributes), Object.keys(attributes));
      if (diff instanceof Array) {
        diff.forEach((name: string) => {
          element.nativeElement.removeAttribute(name);
        });
      }
    } else {
      for (const name in attributes) {
        if (name) {
          element.nativeElement.removeAttribute(name);
        }
      }  
    }
    return this;
  }

  set(element: ElementRef, attributes: ApPrismTemplate<string>, compareAttributes?: ApPrismTemplate<string>): this {
    if (compareAttributes) {
      this.remove(element, attributes, compareAttributes);
    }
    for (const name in attributes) {
      if (name) {
        this.renderer.setElementAttribute(element.nativeElement, name, attributes[name]);
      }
    }
    return this;
  }
}
