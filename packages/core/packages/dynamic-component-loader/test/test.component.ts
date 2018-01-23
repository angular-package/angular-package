import { Component, ComponentFactoryResolver } from '@angular/core';

import { DynamicComponentClass } from './../src/core.dynamic-component.class';

@Component({
  selector: 'test-component',
  template: '<div #container></div>'
})
export class TestComponent extends DynamicComponentClass {
  public model = {};
  public key = 'notdefined';
  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
  public component() {
    return this.__get('__component');
  }
  public create(component: any): void {
    this.__create(component);
  }
  public destroy(): void {
    this.__destroy();
  }
  public set(property: string | Array<string>) {
    this.__set(property);
  }
  public subscribe(property: string, callback?: any, error?: any, complete?: any): void {
    this.__subscribe(property, callback, error, complete);
  }
}
