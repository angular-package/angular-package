import { ComponentLoaderConfig } from '../interface';
import { PropertyService } from '../../property';

/**
 * Decorator to wrap `ComponentLoaderService` methods and link properties to dynamic component.
 * @export
 * @param config Main configuration.
 */
export function ComponentLoader<T>(config: ComponentLoaderConfig<T>): Function {
  return (source: Function): void => {
    const wrapper: PropertyService = new PropertyService(config.prefix, config.suffix);

    // Wrap component methods with loaderService methods.
    Object.defineProperties(source.prototype, {

      __assign: {
        value: function assign(p: string | Array<string>): void {
          this.componentLoaderService.__assign(p, this);
        }
      },

      __component: {
        set: function component(value: any): void {
          this.componentLoaderService.__component = value;
        },
        get: function component(): any {
          return this.componentLoaderService.__component;
        }
      },

      __componentPropertyName: {
        set: function componentPropertyName(value: string): void {
          this.componentLoaderService.componentPropertyName = value;
        },
        get: function componentPropertyName(): string {
          return this.componentLoaderService.componentPropertyName;
        }
      },

      __create: {
        value: function create(): any {
          this.componentLoaderService.init(config, this);
    
          return this;
        }
      },

      __destroy: {
        value: function destroy(): void {
          this.componentLoaderService.__destroy();
        }
      },

      __get: {
        value: function get(property: string): any {
          return this.componentLoaderService.__get(property);
        }
      },

      __prefix: {
        set: function prefix(value: any): void {
          this.componentLoaderService.prefix = value;
        },
        get: function prefix(): any {
          return this.componentLoaderService.prefix;
        }
      },

      __properties: {
        set: function properties(value: any): void {
          this.componentLoaderService.properties = value;
        },
        get: function properties(): any {
          return this.componentLoaderService.properties;
        }
      },

      __set: {
        value: function set(property: string, value: any): void {
          this.componentLoaderService.__set(property, value);
        }
      },

      __suffix: {
        set: function suffix(value: any): void {
          this.componentLoaderService.suffix = value;
        },
        get: function suffix(): any {
          return this.componentLoaderService.suffix;
        }
      },

      __subscribe: {
        value: function subscribe(property: string, ...args: Array<any>): void {
          this.componentLoaderService.__subscribe(property, ...args);
        }
      }

    });

    if (config.properties) {
      wrapper.wrap<T, any>(source, config.properties,
        (property: string, s?: Function | T | undefined, sourcePropertyName?: string) => {
          if (s && s['__set'] instanceof Function && sourcePropertyName) {
            s['__set'](property, s[sourcePropertyName]);
          }
        },
        (property: string, s?: Function | T | undefined) => {
          if (s && s['__get'] instanceof Function) {
              return s['__get'](property);
          }
        }
      );
    }
  };
}
