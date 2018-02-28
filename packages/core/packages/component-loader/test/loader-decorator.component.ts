import { Component, ComponentFactoryResolver } from '@angular/core';

import { ComponentLoaderService, ComponentLoader } from './..';
import { ComponentLoaderServiceInterface } from '../interface';
import { DynamicComponent } from './dynamic.component';

const config = {
  component: DynamicComponent,
  container: '.container',
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
export class LoaderTestComponent implements ComponentLoaderServiceInterface<DynamicComponent> {
  public model = {};
  public key = 'notdefined';
  public surname = 'MySurname';

  // LoaderService.
  __component: any;
  __properties: string[];

  /**
   * Creates an instance of LoaderTestComponent.
   * @param {ComponentLoaderService<DynamicComponent>} componentLoaderService
   * @memberof LoaderTestComponent
   */
  constructor(public componentLoaderService: ComponentLoaderService<DynamicComponent>) { }

  // LoaderService.
  __assign: (p: string | string[], prefix?: string, suffix?, o?) => void;
  __create: () => ComponentLoaderService<DynamicComponent>;
  __destroy: () => void;
  __subscribe: (property: string, ...args: any[]) => void;
}

