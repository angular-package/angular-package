import { ComponentType } from '../../type';

export interface ComponentLoaderConfigInterface {
  component: ComponentType<any>;
  componentPropertyName?: string;
  container: string;
  properties: string[];
  sourceProperty?: { prefix: string, suffix: string };
}
