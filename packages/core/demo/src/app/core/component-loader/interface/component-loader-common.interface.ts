import {
  ComponentRef,
  Type
} from '@angular/core';

/**
 * @export
 * @template T Type of component to load.
 */
export interface ComponentLoaderCommon<T> {

  __component?: ComponentRef<T>;
  __componentPropertyName?: string;
  __create?: ((component: Type<T>) => this);
  __destroy?: (() => any);
  __properties?: Array<string>;
  __prefix?: string;
  __suffix?: string;

  __assign?: (<S>(p: string | Array<string>, source: S) => void);
  __set?: (<PT>(property: string, value: PT) => void);
  __get?: (<PT>(property: string) => PT | undefined);
  __subscribe?: ((property: string, ...args: Array<any>) => void);

}
