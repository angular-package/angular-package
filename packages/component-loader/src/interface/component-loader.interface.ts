import { ComponentRef } from '@angular/core';

/**
 * @export
 * @template C Type of component to load.
 */
export interface ComponentLoader<C> {
  component?: ComponentRef<C>;
  create?: () => this;
  destroy?: () => ComponentRef<C> | undefined;
}
