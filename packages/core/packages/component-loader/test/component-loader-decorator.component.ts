import { Component, ComponentFactoryResolver } from '@angular/core';

import { ComponentLoaderService, ComponentLoader } from './..';
import { ComponentLoaderServiceInterface, ComponentLoaderCommonInterface } from '../interface';
import { DynamicComponent } from './dynamic.component';

const config = {
  component: DynamicComponent,
  container: '.container',
  prefix: '_',
  suffix: '',
  properties: [
    'key',
    'surname'
  ]
};

@Component({
  template: '<div class="container"></div>',
  providers: [
    ComponentLoaderService
  ]
})
@ComponentLoader<DynamicComponent>(config)
export class ComponentLoaderDecoratorComponent implements ComponentLoaderCommonInterface<DynamicComponent> {

  public model = {};
  public key = 'notdefined';
  public surname = 'MySurname';

  // LoaderService.
  __component: any;
  __properties: string[];

  constructor(public componentLoaderService: ComponentLoaderService<DynamicComponent>) { }

  // LoaderService.
  __assign: <S>(p: string | string[], s?: S) => void;
  __create: () => this;
  __destroy: () => void;
  __subscribe: (property: string, ...args: any[]) => void;
}

