import { PropertyWrapperClass } from '@angular-package/core/property-wrapper';

export function ApLinkProperyWithService<S>(properties: string[], serviceName: string, debug = false): Function {
  const propertyClass = new PropertyWrapperClass();
  return function (component: S): void {
    // console.info(component, properties, service);
    if (debug) {

    }
    propertyClass.wrap<S>(component, properties,
      (property: string, sourcePropertyName: string, source?: S) => {
        if (source && !source[sourcePropertyName]) {
          // throw new Error('');
        }
        // this.prismService.properties = this._properties = { ...this._properties, ...properties };

        if (property && sourcePropertyName && source && serviceName && source[serviceName] && source[sourcePropertyName]) {
          /*
          if (property === 'properties') {
            source[serviceName][property] = source['_properties'] = { ...source['_properties'] , ...source[sourcePropertyName] };
            console.info(property, source['_properties'], source[serviceName][property]);
          } else {
            source[serviceName][property] = source[sourcePropertyName];
          }
          */
          source[serviceName][property] = source[sourcePropertyName];
        }
      },
      (property: string, source?: S) => {
        if (source && property && serviceName && source[serviceName]) {
          return source[serviceName][property];
        }
      }
    );
  };
}
