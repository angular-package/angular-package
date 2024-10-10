import { Type } from '@angular/core';

/**
 * @export
 * @template T Component type to load.
 */
export interface ComponentLoaderConfig<T> {
  component: Type<T>;
  componentPropertyName?: string;
  container: string;
  properties?: Array<string>;
  prefix?: string;
  suffix?: string;
}
