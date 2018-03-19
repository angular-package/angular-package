import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

import { ComponentLoaderClass } from './../src';
import { DynamicComponent } from './dynamic.component';


@Component({
  template: '<div #newcontainer></div>'
})
export class ComponentLoaderClassComponent extends ComponentLoaderClass<DynamicComponent> {

  __prefix = '_';
  __suffix = '_';

  public model = {};
  public key = 'defined';

  _wrappedGet = false;
  _wrappedSet = false;

  // All logic can be placed here.
  public _wrapped: boolean;
  set wrapped(value: boolean) {
    this._wrappedSet = true;
    this._wrapped = value;
  }
  get wrapped(): boolean {
    this._wrappedGet = true;
    return this._wrapped;
  }

  @ViewChild('newcontainer', { read: ViewContainerRef }) public container: any;

  constructor(c: ComponentFactoryResolver) {
    super(c);
  }

  public create() {
    this.__create(DynamicComponent);
  }
}
