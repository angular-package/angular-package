import {
  ComponentFactoryResolver,
  // ComponentRef,
  ElementRef
} from '@angular/core';

// import { ComponentLoaderService } from '../src/component-loader.service';
import { ComponentLoaderCommon, ComponentLoaderConfig } from '.';

/**
 * @export
 * @extends {ComponentLoaderCommon<T>}
 * @template T Type of component to load.
 */
export interface ComponentLoaderS<T> extends ComponentLoaderCommon<T> {

  __link?: (<S>(properties: Array<string>, source: S) => this);

  componentFactoryResolver: ComponentFactoryResolver;
  componentPropertyName: string;
  elementRef: ElementRef;
  prefix: string;
  suffix: string;

  init: (<S>(config: ComponentLoaderConfig<T>, source?: S) => this);
}
