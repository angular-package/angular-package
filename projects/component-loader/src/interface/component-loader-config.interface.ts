import { Type } from '@angular/core';

/**
 * @export
 * @template C Component type to load.
 */
export interface ComponentLoaderConfig<C> {
  component?: Type<C>;
  componentPropertyName?: {
    prefix?: string;
    name?: string;
    suffix?: string;
  };
  container: string;
  properties?: Array<string>;
}
