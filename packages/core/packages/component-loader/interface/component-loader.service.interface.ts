import { ComponentLoaderService } from '../src/component-loader.service';

export interface ComponentLoaderServiceInterface<T> {

  __component?: any;
  __componentPropertyName?: string;
  __properties?: string[];

  __assign?: (p: string | Array<string>, prefix: any, suffix: any, source: any) => void;
  __create?: () => ComponentLoaderService<T>;
  __destroy?: () => void;
  __get?: <N>(property: string) => N | undefined;
  __subscribe?: (property: string, ...args: any[]) => void;

  componentLoaderService: ComponentLoaderService<T>;
}
