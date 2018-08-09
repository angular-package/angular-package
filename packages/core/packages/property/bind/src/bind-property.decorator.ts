
// external
import { Injector } from '@angular/core';
// internal
import { PropertyProvider } from '../../src/property.provider';
import { PropertyService } from '../../src/property.service';

/**
 * Bind specified source component properties to the target object, respectively.
 * @export
 * @template S Source component type.
 * @param properties Properties names to bind.
 * @param targetName name of property
 */
export function BindProperty<S>(properties: Array<string>, targetName: string): Function {
  return (source: Function): void => {
    const injector = Injector.create([
      PropertyProvider('_', '_')
    ]);
    const propertyService: PropertyService = injector.get(PropertyService);
    propertyService.bind<S>(source, properties, targetName);
  };
}
