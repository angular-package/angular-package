import { PropertyClass } from '../../src';

export function BindProperty<S>(properties: Array<string>, serviceName: string, debug = false): Function {
  const propertyClass = new PropertyClass();

  return (component: S): void => {
    // console.info(component, properties, service);
    if (debug) {

    }
    propertyClass.wrap<S>(component, properties,
      (property: string, sourcePropertyName: string, source?: Function | S) => {
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
      (property: string, source?: Function | S) => {
        if (source && property && serviceName && source[serviceName]) {
          return source[serviceName][property];
        }
      }
    );
  };
}
