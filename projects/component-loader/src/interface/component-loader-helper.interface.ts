import { ComponentLoaderService } from '../lib/component-loader.service';
/**
 * @export
 * @template C Type of component to load.
 */
export interface ComponentLoaderHelper<C> {
  create: (source: any) => any;
  destroy: () => any;
  componentLoader: ComponentLoaderService<C>;
}
