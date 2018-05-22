import { PropertyWrapperClass } from '@angular-package/core/property-wrapper';

export function ApLinkProperyWithService<S>(properties: string[], service: string): Function {
  return function (component: S): void {
    new PropertyWrapperClass().wrap<S>(
      component,
      properties,
      (property: string, sourcePropertyName: string, source?: S) => {
        if (source && service) {
          source[service][property] = source[sourcePropertyName];
        }
      },
      (property: string, source?: S) => {
        if (source && source[service]) {
          return source[service][property];
        }
      }
    );
  };
}
