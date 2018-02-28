import { ComponentFactoryResolver } from '@angular/core';
import { ComponentType } from '../../type';

/**
 * @export
 * @interface ComponentLoaderCommonInterface
 */
export interface ComponentLoaderCommonInterface {
  __component: any;
  __componentPropertyName: string;
  __properties: string[];
  componentFactoryResolver: ComponentFactoryResolver;

  __assign: (p: string | Array<string>, prefix: any, suffix: any, source: any) => void;
  __get: <T>(property: string) => T | undefined;
  __subscribe: (property: string, ...args: any[]) => void;
}
