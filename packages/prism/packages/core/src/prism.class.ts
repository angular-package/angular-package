/// <reference path="./../../../typings/index.d.ts" />
// external
import {
  ChangeDetectorRef,
  ElementRef,
  Input,
  Injectable,
  Renderer,
  ViewChild,
  Type
} from '@angular/core';

// @angular-package/change-detection
import { ApChangeDetectionProperties, ApChangeDetector } from '@angular-package/change-detection/interface';
import { ApChangeDetectorClass } from '@angular-package/change-detection/change-detector';
import { ComponentLoaderService } from '@angular-package/core/component-loader';
import { ComponentLoaderCommonInterface } from '@angular-package/core/component-loader/interface';

// internal
/// interface
import { ApPrismTemplate } from '../interface';
import { ApObject } from '../interface/src/object.interface';

/// type
import { CallbackType } from '../type/src/prism.type';

/// service
import { PrismService } from './prism.service';
import { ApAttributeHandlerService } from '../../src/attribute-handler.service';
import { ApClassnameHandlerService } from '../../src/classname-handler.service';

import { ApPrismComponent } from '.';
import { PrismContainerComponent } from './prism-container.component';

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
 * @class PrismAClass
 * @implements {ApChangeDetector<ApPrismComponent>}
 */
@Injectable()
export
  abstract class PrismAClass
  implements ApChangeDetector<ApPrismComponent>, ComponentLoaderCommonInterface<ApPrismComponent> {

    // __component?: ComponentRef<T>;
    // __componentPropertyName?: string;
    __create?: <D = PrismContainerComponent>(component: Type<D>) => this;
    __destroy?: () => any;
    // __properties?: string[];
    // __prefix?: string;
    // __suffix?: string;
    __assign?: <S>(p: string | string[], source: S) => void;
    __set?: <PT>(property: string, value: PT) => void;
    __get?: <PT>(property: string) => PT | undefined;
    __subscribe?: (property: string, ...args: any[]) => void;

  /**
   * @type {ElementRef}
   * @memberof PrismAClass
   */
  @ViewChild('codeElement', { read: ElementRef }) codeElement?: ElementRef;

  /**
   * @readme
   * @type {ElementRef}
   * @memberof PrismAClass
   */
  @ViewChild('preElement', { read: ElementRef }) preElement?: ElementRef;

  /**
   * Whether to use Web Workers to improve performance and avoid blocking the UI when highlighting very large chunks of code.
   * False by default (why? - http://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
   * @readme
   */
  @Input() async?: boolean;

  /**
   * Store last attribute value.
   * @tested
   * @type {(ApPrismTemplate<ApObject<string>> | null)}
   * @memberof PrismAClass
   */
  lastAttribute: ApPrismTemplate<ApObject<string>> | null = null;

  /**
   * To add or remove the specified list of attributes with `string` value to `pre`, `code` HTMLElement.
   * @readme
   * @tested #9
   * @type {(ApPrismTemplate<ApObject<string>> | null)}
   * @memberof PrismAClass
   */
  @Input('attribute') set attribute(attribute: ApPrismTemplate<ApObject<string>> | null) {
    if (attribute) {

      // <pre> attributes.
      if (this.preElement && attribute.pre) {
        this.attributeHandlerService.set(
          this.preElement,
          attribute.pre,
          (this.lastAttribute && this.lastAttribute.pre) ? this.lastAttribute.pre : undefined
        );
      }

      // <code> attributes.
      if (this.codeElement && attribute.code) {  
        this.attributeHandlerService.set(
          this.codeElement,
          attribute.code,
          (this.lastAttribute && this.lastAttribute.code) ? this.lastAttribute.code : undefined
        );
      }  
    }
    this.lastAttribute = Object.assign({}, attribute);
  }

  /**
   * Store last class value.
   * @tested
   * @type {(ApPrismTemplate<string[]> | null)}
   * @memberof PrismAClass
   */
  lastClassValue: ApPrismTemplate<string[]> | null = null;

  /**
   * 
   * @readme
   * @tested #10
   * @type {(ApPrismTemplate<string[]> | null)}
   * @memberof PrismAClass
   */
  @Input('class') set class(classValue: ApPrismTemplate<string[]> | null) {
    if (classValue) {

      // <pre> class.
      if (this.preElement && classValue.pre) {
        this.classNameHandlerService.set(
          this.preElement,
          classValue.pre,
          (this.lastClassValue && this.lastClassValue.pre) ? this.lastClassValue.pre : undefined );
      }

      // <code> class.
      if (this.codeElement && classValue.code) {
        this.classNameHandlerService.set(
          this.codeElement,
          classValue.code,
          (this.lastClassValue && this.lastClassValue.code) ? this.lastClassValue.code : undefined );
      }
    }
    this.lastClassValue = Object.assign({}, classValue);
  }

  /**
   * An optional callback to be invoked after the highlighting is done.
   * Mostly useful when async is true, since in that case, the highlighting is done asynchronously.
   * @readme
   * @tested
   * @type {CallbackType}
   * @memberof PrismAClass
   */
  @Input() callback: CallbackType | undefined;

  /**
   * A string with the code to be highlighted.
   * @readme
   * @tested #13
   * @type {string}
   * @memberof PrismAClass
   */
  @Input() code?: string;

  /**
   * @readme
   * @type {Object}
   * @memberof PrismAClass
   */
  @Input() hooks?: Object;

  /**
   * Valid language identifier.
   * @tested #3 #4 #5
   * @type {string}
   * @memberof PrismAClass
   */
  @Input() language?: string;

  /**
   * @tested #7 #8 #14
   * @type {ApChangeDetectionProperties}
   * @memberof PrismAClass
   */
  _properties?: ApChangeDetectionProperties;
  @Input('properties')
  set properties(properties: ApChangeDetectionProperties | undefined) {
    this._properties = Object.assign({}, this._properties, properties);
    this.prismService.properties = this._properties;
  }
  get properties(): ApChangeDetectionProperties | undefined {
    return this.prismService.properties;
  }

  /**
   * @tested #6
   * @type {ApChangeDetectorClass<ApPrismComponent>}
   * @memberof PrismAClass
   */
  changeDetector?: ApChangeDetectorClass<ApPrismComponent>;

  /** 
   * @tested #8
   * @memberof PrismAClass
   */
  @Input() detection = false; // <--- Required, initialize detection with specified value true or false.

  /**
   * Object properties to interpolate.
   * @tested #15
   * @type {Object}
   * @memberof PrismAClass
   */
  @Input() interpolation?: Object;

  /**
   * @tested
   * @type {boolean}
   * @memberof PrismAClass
   */
  ready?: boolean;

  /**
   * Creates an instance of PrismAClass.
   * @param {ApAttributeHandlerService} attributeHandlerService
   * @param {ApClassnameHandlerService} classNameHandlerService
   * @param {ChangeDetectorRef} changeDetectorRef
   * @param {PrismService} prismService
   * @param {Renderer} renderer
   * @memberof PrismAClass
   */
  constructor(
    public attributeHandlerService: ApAttributeHandlerService,
    public classNameHandlerService: ApClassnameHandlerService,
    public componentLoaderService: ComponentLoaderService<ApPrismComponent>,
    public changeDetectorRef: ChangeDetectorRef,
    public prismService: PrismService,
    public renderer: Renderer
  ) { }

  /**
   * ChangeDetector method.
   * @readme
   * @tested #16
   * @package @angular-package/change-detection
   * @memberof PrismAClass
   */
  _detach(): void { }

  /**
   * ChangeDetector method.
   * @readme
   * @tested #17
   * @package @angular-package/change-detection
   * @memberof PrismAClass
   */
  _detect(): void { }

  /**
   * ChangeDetector method.
   * @readme
   * @tested #18
   * @package @angular-package/change-detection
   * @memberof PrismAClass
   */
  _reattach(): void { }
}
