import { ComponentLoaderConfigInterface } from '../interface';
import { StoreOriginalClass } from '../../store';
import { ComponentLoaderService } from '../src';

/**
 * Decorator to wrap `ComponentLoaderService` methods and to connect properties to dynamic component.
 * @export
 * @param {ComponentLoaderConfigInterface} config
 * @returns {Function}
 */
export function ComponentLoader<T>(config: ComponentLoaderConfigInterface): Function {
  return function (source: Function): void {
    if (config.sourceProperty) {
      if (!config.sourceProperty.prefix) {
        Object.assign(config.sourceProperty, { prefix: '_' });
      }
      if (!config.sourceProperty.suffix) {
        Object.assign(config.sourceProperty, { suffix: '' });
      }
    } else {
      Object.assign(config, { sourceProperty: { prefix: '_', suffix: ''} });
    }

    Object.defineProperties(source.prototype, {

      __assign: {
        value: function __assign(p: string | Array<string>, prefix = '', suffix = '', s: any): void {
          this.componentLoaderService.assign(p, prefix, suffix, (s === undefined) ? this : s);
        }
      },

      __component: {
        set: function __component(value: any) {
          this.componentLoaderService.__component = value;
        },
        get: function __component(): any {
          return this.componentLoaderService.__component;
        }
      },

      __componentPropertyName: {
        set: function __componentPropertyName(value: string) {
          this.componentLoaderService.componentPropertyName = value;
        },
        get: function __componentPropertyName(): string {
          return this.componentLoaderService.componentPropertyName;
        }
      },

      __create: {
        /**
         * Helper method to create dynamic component by using `ComponentLoaderService`.
         * @returns {ComponentLoaderService<T>}
         */
        value: function __create(): ComponentLoaderService<T> {
          const loader: ComponentLoaderService<T> = this.componentLoaderService;
          loader
            .init(config)
            .assign(
              undefined,
              (config.sourceProperty) ? config.sourceProperty.prefix : undefined,
              (config.sourceProperty) ? config.sourceProperty.suffix : undefined,
              source
            );
          return loader;
        }
      },

      __destroy: {

        /**
         * Helper method to destroy dynamic component by using `ComponentLoaderService`.
         */
        value: function __destroy(): void {
          this.componentLoaderService.destroy();
        }
      },


      __get: {
        value: function __get<V>(property: string): V | undefined {
          return this.componentLoaderService.__get(property);
        }
      },

      __set: {
        value: function __set<V>(key: string, value: V): void {
          this.componentLoaderService.__set(key, value);
        }
      },

      __subscribe: {
        /**
         * Helper method to directly subscribe to specified property of dynamic component by using `ComponentLoaderService`.
         * @param {string} property
         * @param {...any[]} args
         */
        value: function __subscribe(property: string, ...args: any[]): void {
          this.componentLoaderService.__subscribe(property, ...args);
        }
      }

    });

    // Wrap properties `set` and `get` to connect property with dynamic component.
    if (config.properties instanceof Array) {
      config.properties.forEach((property: string) => {
        const sourcePropertyName =
          (config.sourceProperty) ? `${config.sourceProperty.prefix}${property}${config.sourceProperty.suffix}` : undefined;
        const store = new StoreOriginalClass().setterGetter(source, property);

        // Wrap property.
        if (sourcePropertyName) {
          // Create property with prefix and suffix to be wrapped by original name.
          Object.defineProperty(source.prototype, sourcePropertyName, {
            writable: true
          });

          Object.defineProperties(source.prototype, {
            [property]: {
              get: function () {
                if (store.getter[property]) {
                  return store.getter[property].apply(this, arguments);
                }
                if (this.componentLoaderService) {
                  // return this.componentLoaderService.__get(property);
                  return this.componentLoaderService[property];
                }
              },
              set: function (value) {
                // To remember initial value.
                this[sourcePropertyName] = value;
                // Use old setter.
                if (store.setter[property]) {
                  store.setter[property].apply(this, arguments);
                }
                // Set property value of dynamic component instance from source component.
                if (this.componentLoaderService) {
                  this.componentLoaderService[property] = this[sourcePropertyName];
                  // this.componentLoaderService.__set(property, this[sourcePropertyName]);
                }
              }
            }
          });
        }
      });
    }
  };
}
