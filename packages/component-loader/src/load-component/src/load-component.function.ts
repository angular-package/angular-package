// @angular/core
import { AfterViewInit, OnInit, Type, Injectable } from '@angular/core';
// Service.
import { ComponentLoaderService } from '../../lib/component-loader.service';
// Interface.
import { LoadComponentConfig } from '../interface/load-component-config.interface';
/**
 * The function for the `LoadComponent` decorator to handle loading dynamic component.
 * @param component The dynamic component to load.
 * @param target The target component from the decorator.
 * @param config An optional configuration for loading the dynamic component of `DynamicComponent`.
 * @returns The return value is the `LoadComponent` class that extends the decorator `target` component.
 */
export function loadComponent<DynamicComponent>(
  component: Type<DynamicComponent>,
  target: any,
  config?: LoadComponentConfig<DynamicComponent>
): any {
  @Injectable()
  class LoadComponent extends target implements AfterViewInit, OnInit {
    /**
     * An instance of the `ComponentLoaderService` from the decorator target component.
     */
    #service!: ComponentLoaderService<DynamicComponent>;

    /**
     * `ngOnInit()`.
     */
    ngOnInit(): void {
      // Sets the `ComponentLoaderService` by using the provided `service` key from the config.
      if (
        typeof config === 'object' &&
        Object.prototype.hasOwnProperty.call(config, 'service')
      ) {
        typeof config?.service === 'string' &&
          ComponentLoaderService.isService(this[config.service]) &&
          (this.#service = this[config.service]);

        // If `ComponentLoaderService` is still undefined then try to pick it from the decorator target component.
      } else if (typeof this.#service === 'undefined') {
        const service = ComponentLoaderService.findServiceKey(this);
        typeof service === 'string' && (this.#service = this[service]);
      }

      // Executes original `ngOnInit()`.
      super.ngOnInit?.apply(this, arguments);
    }

    /**
     * `ngAfterViewInit()`.
     */
    ngAfterViewInit(): void {
      // Determines the container.
      typeof config === 'object' &&
      Object.prototype.hasOwnProperty.call(config, 'container')
        ? typeof config.container === 'string' &&
          this.#service.setViewContainer(this[config.container])
        : this.#service.pickViewContainer(this);

      // Creates the dynamic component.
      this.#service.createComponent(component);

      // Links the dynamic component properties with the `this` component.
      typeof config === 'object' &&
        Object.prototype.hasOwnProperty.call(config, 'properties') &&
        Array.isArray(config.properties) &&
        this.#service.linkProperties(config.properties, this);

      // Executes original `ngAfterViewInit()`.
      super.ngAfterViewInit?.apply(this, arguments);
    }
  }
  return LoadComponent;
}
