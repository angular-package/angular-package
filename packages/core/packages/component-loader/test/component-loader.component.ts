import { Component, ComponentFactoryResolver } from '@angular/core';

import { ComponentLoaderClass } from './../src';


@Component({
  template: '<div #container></div>'
})
export class ComponentLoaderComponent extends ComponentLoaderClass {
  public model = {};
  public key = 'notdefined';
  constructor(c: ComponentFactoryResolver) {
    super(c);
  }
}
