// external
import { ComponentFactoryResolver, Injectable } from '@angular/core';

// internal
import { ComponentLoaderClass } from './component-loader.class';

/**
 * Service to make handle loading dynamic component easier.
 * It is created with https://medium.com/@caroso1222/angular-pro-tip-how-to-dynamically-create-components-in-body-ba200cc289e6.
 * @extends {ComponentLoaderService}
 * @template C Component type to load.
 */
@Injectable()
export class ComponentLoaderService<C> extends ComponentLoaderClass<C> {
  /**
   * Creates an instance of ComponentLoaderService.
   * @param componentFactoryResolver https://angular.io/api/core/ComponentFactoryResolver
   */
  constructor(public componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
