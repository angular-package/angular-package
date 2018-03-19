import { Type, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ComponentLoaderCommonInterface } from '.';

/**
 * @export
 * @interface ComponentLoaderClassInterface
 * @extends {ComponentLoaderCommonAClass<T>}
 * @template T
 */
export interface ComponentLoaderClassInterface<T> extends ComponentLoaderCommonInterface<T> {
  componentFactoryResolver: ComponentFactoryResolver;
  container?: ViewContainerRef;
  __link?: (p: string[]) => void;
}
