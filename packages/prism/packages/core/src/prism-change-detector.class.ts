import { ComponentLoaderCommonInterface } from '@angular-package/core/component-loader/interface';

/**
 * Extends with `@angular-package/change-detection` available methods and properties.
 * @export
 * @abstract
 * @class PrismChangeDetectorClass
 * @implements {ComponentLoaderCommonInterface<T>}
 * @template T 
 */
export
  abstract class PrismChangeDetectorClass<T>
  implements ComponentLoaderCommonInterface<T> {

  // __component?: ComponentRef<T>;
  // __componentPropertyName?: string;
  __create?: <D = T>(component: D) => this;
  __destroy?: () => any;
  // __properties?: string[];
  // __prefix?: string;
  // __suffix?: string;
  __assign?: <S>(p: string | string[], source: S) => void;
  __set?: <PT>(property: string, value: PT) => void;
  __get?: <PT>(property: string) => PT | undefined;
  __subscribe?: (property: string, ...args: any[]) => void;

  /**
   * ChangeDetector method.
   * @readme
   * @tested #16
   * @package @angular-package/change-detection
   * @memberof PrismChangeDetectorClass
   */
  _detach(): void { }

  /**
   * ChangeDetector method.
   * @readme
   * @tested #17
   * @package @angular-package/change-detection
   * @memberof PrismChangeDetectorClass
   */
  _detect(): void { }

  /**
   * ChangeDetector method.
   * @readme
   * @tested #18
   * @package @angular-package/change-detection
   * @memberof PrismChangeDetectorClass
   */
  _reattach(): void { }
}
