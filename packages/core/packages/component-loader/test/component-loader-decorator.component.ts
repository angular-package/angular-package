import { Component } from '@angular/core';

import { ComponentLoader, ComponentLoaderService } from '..';
import { ComponentLoaderCommon } from '../interface';
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
export class ComponentLoaderDecoratorComponent implements ComponentLoaderCommon<DynamicComponent> {

  model = {};
  key = 'notdefined';
  surname = 'MySurname';

  // LoaderService.
  __component: any;
  __properties: Array<string>;

  // LoaderService.
  __assign: <S>(p: string | Array<string>, s?: S) => void;
  __create: () => this;
  __destroy: () => void;
  __subscribe: (property: string, ...args: Array<any>) => void;

  constructor(public componentLoaderService: ComponentLoaderService<DynamicComponent>) { }
}
