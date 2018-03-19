import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

import { ComponentLoaderService } from './..';
import { ComponentLoaderServiceInterface, ComponentLoaderConfigInterface, ComponentLoaderCommonInterface } from '../interface';
import { DynamicComponent } from './dynamic.component';


@Component({
  template: '<div class="container"></div>',
  providers: [
    ComponentLoaderService
  ]
})
export class ComponentLoaderServiceComponent
  implements ComponentLoaderCommonInterface<DynamicComponent>, OnInit {
  __prefix = '_';
  __suffix = '_';

  public model = {};
  public key = 'defined';

  constructor(public componentLoaderService: ComponentLoaderService<DynamicComponent>) { }

  get __component() {
    return this.componentLoaderService.__component;
  }
  __assign(p) {
    this.componentLoaderService.__assign(p, this);
  }
  __link(properties?: string[]): this {
    this.componentLoaderService.__link(properties, this);
    return this;
  }

  __createSimple(): ComponentLoaderService<DynamicComponent> {
    return this.componentLoaderService.init({
      component: DynamicComponent,
      container: '.container',
    });
  }

  __create(): this {
    this.componentLoaderService.init({
      component: DynamicComponent,
      componentPropertyName: '__component__', // <-- optional
      container: '.container',
      properties: [ 'key', 'model' ],
      prefix: this.__prefix, //  <-- optional
      suffix: this.__suffix // <-- optional
    }, this);
    return this;
  }

  __destroy() {
    this.componentLoaderService.__destroy();
  }
  __subscribe(property, ...args): void {
    this.componentLoaderService.__subscribe(property, ...args);
  }

  ngOnInit() { }
}
