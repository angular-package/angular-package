// external
import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { difference } from 'lodash-es';

// internal
import { GenericObject } from '../../interface/generic-object.interface';

@Injectable()
export class AttributeHandlerService {

  constructor(public renderer: Renderer2) { }

  get(element: ElementRef, name: string): string {
    return element.nativeElement.getAttribute(name);
  }

  remove(element: ElementRef, attributes: GenericObject<string>, compareAttributes?: GenericObject<string>): this {
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

  set(element: ElementRef, attributes: GenericObject<string>, compareAttributes?: GenericObject<string>): this {
    if (compareAttributes) {
      this.remove(element, attributes, compareAttributes);
    }
    for (const name in attributes) {
      if (name) {
        this.renderer.setAttribute(element.nativeElement, name, attributes[name]);
      }
    }
    
    return this;
  }
}
