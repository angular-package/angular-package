// internal
import { ComponentType } from '../../type';

export interface ComponentLoaderClassInterface {
  container: any;
  __create: (component: ComponentType<any>) => this;
  __destroy: () => null;
}
