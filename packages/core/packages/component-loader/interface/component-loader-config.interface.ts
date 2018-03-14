import { Type } from '@angular/core';

/**
 * @export
 * @interface ComponentLoaderConfigInterface
 * @template T
 */
export interface ComponentLoaderConfigInterface<T> {
  component: Type<T>;
  componentPropertyName?: string;
  container: string;
  properties?: string[];
  prefix?: string;
  suffix?: string;
}
