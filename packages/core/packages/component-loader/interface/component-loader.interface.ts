import {
  ComponentFactoryResolver,
  ViewContainerRef
} from '@angular/core';
import { ComponentLoaderCommon } from '.';

/**
 * @export
 * @extends {ComponentLoaderCommonAClass<T>}
 * @template T Type of component to load.
 */
export interface ComponentLoader<T> extends ComponentLoaderCommon<T> {
  componentFactoryResolver: ComponentFactoryResolver;
  container?: ViewContainerRef;
  __bind: ((p: Array<string>) => void) | undefined;
}
