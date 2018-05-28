/// <reference path="./../../../typings/index.d.ts" />
// external
import {
  ChangeDetectorRef,
  ElementRef,
  Injectable,
  Renderer,
  ViewChild
} from '@angular/core';

// @angular-package/change-detection
import { ApChangeDetector } from '@angular-package/change-detection/interface';
import { ApChangeDetectorClass } from '@angular-package/change-detection/change-detector';
import { ComponentLoaderService } from '@angular-package/core/component-loader';
// import { ComponentLoaderCommonInterface } from '@angular-package/core/component-loader/interface';

// internal
/// service
import { PrismService } from './prism.service';
import { ApAttributeHandlerService } from '../../src/attribute-handler.service';
import { ApClassnameHandlerService } from '../../src/classname-handler.service';

import { ApPrismComponent } from '.';
// import { PrismContainerComponent } from './prism-container.component';
import { PrismInputClass } from './prism-input.class';

export interface ApPrismProperties {
  async?: boolean;
  attribute?: boolean;
  callback?: boolean;
  class?: boolean;
  code?: boolean;
  hooks?: boolean;
  interpolation?: boolean;
  language?: boolean;
}

/**
 * @export
 * @abstract
 * @class PrismClass
 * @extends {PrismInputClass}
 * @implements {ApChangeDetector<ApPrismComponent>}
 */
@Injectable()
export
  abstract class PrismClass
  extends PrismInputClass
  implements ApChangeDetector<ApPrismComponent> {
    // , ComponentLoaderCommonInterface<ApPrismComponent> 

  /**
   * @type {ElementRef}
   * @memberof PrismClass
   */
  @ViewChild('codeElement', { read: ElementRef }) codeElement?: ElementRef;

  /**
   * @readme
   * @type {ElementRef}
   * @memberof PrismClass
   */
  @ViewChild('preElement', { read: ElementRef }) preElement?: ElementRef;

  /**
   * @tested #6
   * @type {ApChangeDetectorClass<ApPrismComponent>}
   * @memberof PrismClass
   */
  changeDetector?: ApChangeDetectorClass<ApPrismComponent>;

  /**
   * @tested
   * @type {boolean}
   * @memberof PrismClass
   */
  ready?: boolean;

  /**
   * Creates an instance of PrismClass.
   * @param {ApAttributeHandlerService} attributeHandlerService 
   * @param {ApClassnameHandlerService} classNameHandlerService 
   * @param {ComponentLoaderService<ApPrismComponent>} componentLoaderService 
   * @param {ChangeDetectorRef} changeDetectorRef 
   * @param {PrismService} prismService 
   * @param {Renderer} renderer 
   * @memberof PrismClass
   */
  constructor(
    public attributeHandlerService: ApAttributeHandlerService,
    public classNameHandlerService: ApClassnameHandlerService,
    public componentLoaderService: ComponentLoaderService<ApPrismComponent>,
    public changeDetectorRef: ChangeDetectorRef,
    public prismService: PrismService,
    public renderer: Renderer
  ) {
    super(
      attributeHandlerService,
      classNameHandlerService,
      changeDetectorRef,
      prismService
    );
  }
}
