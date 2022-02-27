// @angular/core.
import { Injectable } from '@angular/core';
// Class.
import { ComponentLoader } from './component-loader.class';
/**
 * Service to be provided and injected as a dependency to support the creating of a dynamic component.
 */
@Injectable()
export class ComponentLoaderService<
  DynamicComponent
> extends ComponentLoader<DynamicComponent> {
  /**
   * Finds the property name that contains an instance of `ComponentLoaderService` in the given `object`.
   * @param object An `object` of generic type to find in property key with a `ComponentLoaderService` instance.
   * @returns The return value is a found property name of the provided `object` that contains an instance of `ComponentLoaderService` or
   * undefined.
   * @angularpackage
   */
  public static findServiceKey(object: {
    [k: string]: any;
  }): string | undefined {
    let serviceKey;
    Object.keys(object).forEach(
      (key) =>
        ComponentLoaderService.isService(object[key]) &&
        (serviceKey = key)
    );
    return serviceKey;
  }

  /**
   * Checks whether the given value is an instance of `ComponentLoaderService`.
   * @param value The value of any type to test.
   * @returns The return value is a `boolean` indicating whether the given value is an instance of `ComponentLoaderService`.
   * @angularpackage
   */
  public static isService<DynamicComponent>(
    value: any
  ): value is ComponentLoaderService<DynamicComponent> {
    return typeof value === 'object' && value instanceof ComponentLoaderService;
  }
}
