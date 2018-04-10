// @angular-package
import { StoreOriginalClass } from '@angular-package/core/store';
import { PropertyWrapperClass } from '@angular-package/core/property-wrapper';

// internal
import { configureDetector, detectToSetter } from './core';
import { ApChangeDetectionOptions, ApChangeDetectionProperties } from '../interface';

/**
 * Indicate component properties by name whether to detect or not changes on them.
 * @export
 * @template T
 * @param {ApChangeDetectionProperties} properties
 * @param {ApChangeDetectionOptions} [config]
 * @returns {Function}
 */
export function ApChangeDetection<T>(properties: ApChangeDetectionProperties, config?: ApChangeDetectionOptions): Function {
  return function (component: Function): void {
    const wrapper: PropertyWrapperClass = new PropertyWrapperClass();
    const store = new StoreOriginalClass();

    configureDetector<T>(component, properties, config);

    if (properties) {
      wrapper.wrap(
        component,
        Object.keys(properties),
        (property: string, sourcePropertyName: string, source?: T): void => {
          if (source) {
            source['changeDetector'].detect(source, property);
          }
        },
        (property: string) => undefined
      );
    }
  };
}


