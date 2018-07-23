import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

import { ComponentLoaderClass } from '../src';
import { DynamicComponent } from './dynamic.component';

@Component({
  template: '<div #newcontainer></div>'
})
export class ComponentLoaderClassComponent extends ComponentLoaderClass<DynamicComponent> {

  @ViewChild('newcontainer', { read: ViewContainerRef }) container: any;

  __prefix = '_';
  __suffix = '_';

  model = {};
  key = 'defined';

  _wrappedGet = false;
  _wrappedSet = false;

  // All logic can be placed here.
  _wrapped: boolean;
  set wrapped(value: boolean) {
    this._wrappedSet = true;
    this._wrapped = value;
  }
  get wrapped(): boolean {
    this._wrappedGet = true;
    
    return this._wrapped;
  }

  constructor(c: ComponentFactoryResolver) {
    super(c);
  }

  create(): void {
    this.__create(DynamicComponent);
  }
}
