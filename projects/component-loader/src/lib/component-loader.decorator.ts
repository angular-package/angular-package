import { PropertyClass } from '@angular-package/core';
import { ComponentLoaderConfig } from '../interface';
import { ComponentLoaderService } from './component-loader.service';
import { COMPONENT_PROPERTY_NAME } from './component-loader.class';

import { FunctionType, typeObjectGuard } from '@angular-package/core';

/**
 * Decorator to wrap `ComponentLoaderService` service with passed variables.
 * @export
 * @param config Main configuration.
 */
export function ComponentLoader<C>(config?: ComponentLoaderConfig<C>): FunctionType {
  return (component: FunctionType): any => {
    // TODO: Define component property name.
    // const propertyClass = new PropertyClass();
    // let componentPropertyName;
    // if (typeObjectGuard<ComponentLoaderConfig<C>>(config)) {
    //   if ('componentPropertyName' in config) {
    //     if ('prefix' in config.componentPropertyName) {
    //       propertyClass.prefix(config.componentPropertyName.prefix);
    //     }
    //     if ('suffix' in config.componentPropertyName) {
    //       propertyClass.suffix(config.componentPropertyName.suffix);
    //     }
    //     componentPropertyName = propertyClass.name('name' in config.componentPropertyName
    //       ? config.componentPropertyName.name : COMPONENT_PROPERTY_NAME);
    //   }
    // } else {
    //   componentPropertyName = propertyClass.name(COMPONENT_PROPERTY_NAME);
    // }

    // Wrap component methods with loaderService methods.
    Object.defineProperties(component.prototype, {
      componentLoader: {
        get(): ComponentLoaderService<C> {
          if (this.componentLoaderService) {
            if (typeObjectGuard<ComponentLoaderService<C>>(config)) {
              if ('container' in config) {
                this.componentLoaderService.container = this[config.container];
              }
              if ('properties' in config) {
                this.componentLoaderService.properties = config.properties;
              }
              // Define custom component property name.
              if ('componentPropertyName' in config) {
                if ('prefix' in config.componentPropertyName) {
                  this.componentLoaderService.prefix(config.componentPropertyName.prefix);
                }
                if ('suffix' in config.componentPropertyName) {
                  this.componentLoaderService.suffix(config.componentPropertyName.suffix);
                }
                if ('name' in config.componentPropertyName) {
                  this.componentLoaderService.componentPropertyName = config.componentPropertyName.name;
                }
              }
            }
            return this.componentLoaderService;
          }
        }
      },
      create: {
        value(source: any): void {
          this.componentLoader
            .create()
            .link(source)
            .setProperties(source);
        }
      },
      destroy: {
        value(): void {
          this.componentLoader.destroy();
        }
      },
      // TODO: Define component property name.
      // [componentPropertyName]: {
      //   get(): C {
      //     if (this.componentLoaderService) {
      //       if (this.componentLoaderService[this.componentLoaderService.componentPropertyName]) {
      //         if ('instance' in this.componentLoaderService[this.componentLoaderService.componentPropertyName]) {
      //           return this.componentLoaderService[this.componentLoaderService.componentPropertyName].instance;
      //         }
      //       }
      //     }
      //   }
      // }
    });
  };
}
