import { Type } from '@angular/core';
/**
 * @export
 * @template Component Component to load.
 */
export interface ComponentLoaderConfig<Component> {
  component: Type<Component>;
  componentPropertyName?: {
    prefix?: string;
    name: string;
    suffix?: string;
  };
  container: string;
  properties?: Array<keyof Component>;
}
