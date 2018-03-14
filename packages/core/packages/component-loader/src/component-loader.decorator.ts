import { ComponentLoaderConfigInterface } from '../interface';
import { ComponentLoaderService } from './component-loader.service';
import { ConnectClass } from '../../connect';

/**
 * Decorator to wrap `ComponentLoaderService` methods and to connect properties to dynamic component.
 * @export
 * @param {ComponentLoaderConfigInterface} config
 * @returns {Function}
 */
export function ComponentLoader<T>(config: ComponentLoaderConfigInterface<T>): Function {
  return function (source: Function): void {
    const connectClass: ConnectClass = new ConnectClass(config.prefix, config.suffix);

    // Connect component methods with loaderService methods.
    Object.defineProperties(source.prototype, {

      __assign: {
        value: function __assign(p: string | string[]): void {
          this.componentLoaderService.__assign(p, this);
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
        value: function __create(): any {
          this.componentLoaderService.init(config, this);
          return this;
        }
      },

      __destroy: {
        value: function __destroy(): void {
          this.componentLoaderService.__destroy();
        }
      },

      __get: {
        value: function __get(property: string): any {
          return this.componentLoaderService.__get(property);
        }
      },

      __prefix: {
        set: function __prefix(value: any) {
          this.componentLoaderService.prefix = value;
        },
        get: function __prefix(): any {
          return this.componentLoaderService.prefix;
        }
      },

      __properties: {
        set: function __properties(value: any) {
          this.componentLoaderService.properties = value;
        },
        get: function __properties(): any {
          return this.componentLoaderService.properties;
        }
      },

      __set: {
        value: function __set(property: string, value: any): void {
          this.componentLoaderService.__set(property, value);
        }
      },

      __suffix: {
          set: function __suffix(value: any) {
            this.componentLoaderService.suffix = value;
          },
          get: function __suffix(): any {
            return this.componentLoaderService.suffix;
          }
      },

      __subscribe: {
        value: function __subscribe(property: string, ...args: any[]): void {
          this.componentLoaderService.__subscribe(property, ...args);
        }
      }

    });

    if (config.properties) {
      connectClass.wrap<T>(source, config.properties,
        (targetPropertyName: string, sourcePropertyName: string, s?: T): void => {
          if (s) {
            if (s['__set'] instanceof Function) {
              s['__set'](targetPropertyName, s[sourcePropertyName]);
            }
          }
        },
        (targetPropertyName: string, s?: T): any => {
          if (s) {
            if (s['__get'] instanceof Function) {
              return s['__get'](targetPropertyName);
            }
          }
      });
    }
  };
}
