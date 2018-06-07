import {
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { ComponentLoaderCommonInterface } from '.';

/**
 * @export
 * @extends {ComponentLoaderCommonAClass<T>}
 * @template T Type of component to load.
 */
export interface ComponentLoaderClassInterface<T> extends ComponentLoaderCommonInterface<T> {
  componentFactoryResolver: ComponentFactoryResolver;
  container?: ViewContainerRef;
  __bind: ((p: Array<string>) => void) | undefined;
}
