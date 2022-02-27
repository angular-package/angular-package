// @angular/core
import { Type } from '@angular/core';
// Function.
import { loadComponent } from './load-component.function';
// Interface.
import { LoadComponentConfig } from '../interface/load-component-config.interface';
/**
 * Decorator to handle the `ComponentLoaderService` by automatizing some part of the process of creating a dynamic component.
 * @param component The component of `DynamicComponent` type to load.
 * @param config An optional configuration.
 */
export const LoadComponent =
  <DynamicComponent extends object>(
    component: Type<DynamicComponent>,
    config?: LoadComponentConfig<DynamicComponent>
  ): any =>
  (target: any): any =>
    loadComponent(component, target, config);
