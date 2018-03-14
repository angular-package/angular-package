import { ComponentLoaderService } from '../src/component-loader.service';
import { ComponentRef, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ComponentLoaderCommonInterface, ComponentLoaderConfigInterface } from '.';


/**
 * @export
 * @interface ComponentLoaderServiceInterface
 * @extends {ComponentLoaderCommonInterface<T>}
 * @template T
 */
export interface ComponentLoaderServiceInterface<T> extends ComponentLoaderCommonInterface<T> {

  __connect?: <S>(properties: string[], source: S) => this;

  componentFactoryResolver: ComponentFactoryResolver;
  componentPropertyName: string;
  elementRef: ElementRef;
  prefix: string;
  suffix: string;

  init: <S>(config: ComponentLoaderConfigInterface<T>, source?: S) => this;
}
