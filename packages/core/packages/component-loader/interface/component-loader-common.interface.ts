import { ComponentFactoryResolver, ComponentRef, Type } from '@angular/core';

/**
 * @export
 * @interface ComponentLoaderCommonInterface
 * @template T
 */
export interface ComponentLoaderCommonInterface<T> {

  __component?: ComponentRef<T>;
  __componentPropertyName?: string;
  __create?: <D = T>(component: Type<D>) => this;
  __destroy?: () => any;
  __properties?: string[];
  __prefix?: string;
  __suffix?: string;

  __assign?: <S>(p: string | string[], source: S) => void;
  __set?: <PT>(property: string, value: PT) => void;
  __get?: <PT>(property: string) => PT | undefined;
  __subscribe?: (property: string, ...args: any[]) => void;

}
