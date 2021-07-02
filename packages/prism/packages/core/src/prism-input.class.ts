// @angular
import { Input, ChangeDetectorRef, Injectable } from '@angular/core';

// @angular-package
import { ApChangeDetectionProperties } from '@angular-package/change-detection';

// internal
import { ApAttributeHandlerService } from '../../src/attribute-handler.service';
import { ApClassnameHandlerService } from '../../src/classname-handler.service';
import { ApPrismTemplate } from '../interface';
import { ApObject } from '../interface/src/object.interface';
import { PrismService } from './prism.service';
import { CallbackType } from '../type';
// import { PrismContainerComponent } from './prism-container.component';
import { PrismChangeDetectorClass } from './prism-change-detector.class';
import { ApPrismComponent } from '.';

/**
 * All available `@Input` to be used in component.
 * @export
 * @abstract
 * @class PrismInputClass
 */
@Injectable()
export
  abstract class PrismInputClass
  extends PrismChangeDetectorClass<ApPrismComponent> {

  /**
   * Whether to use Web Workers to improve performance and avoid blocking the UI when highlighting very large chunks of code.
   * False by default (why? - http://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
   * @readme
   */
  @Input() async?: boolean;

  /**
   * To add or remove the specified list of attributes with `string` value to `pre`, `code` HTMLElement.
   * @readme
   * @tested #9
   * @type {(ApPrismTemplate<ApObject<string>> | null)}
   * @memberof PrismInputClass
   */
  @Input() attribute?: ApPrismTemplate<ApObject<string>> | null;

  /**
   * @readme
   * @tested #10
   * @type {(ApPrismTemplate<string[]> | null)}
   * @memberof PrismInputClass
   */
  @Input() class?: ApPrismTemplate<string[]> | null;

  /**
   * An optional callback to be invoked after the highlighting is done.
   * Mostly useful when async is true, since in that case, the highlighting is done asynchronously.
   * @readme
   * @tested
   * @type {(CallbackType | undefined)}
   * @memberof PrismInputClass
   */
  @Input() callback: CallbackType | undefined;

  /**
   * A string with the code to be highlighted.
   * @readme
   * @tested #13
   * @type {string}
   * @memberof PrismInputClass
   */
  @Input() code?: string;

  /** 
   * @tested #8
   * @package property used from @angular-package/change-detection
   * @memberof PrismInputClass
   */
  @Input() detection = false; // <--- Required, initialize detection with specified value true or false.

  /**
   * @readme
   * @type {Object}
   * @memberof PrismInputClass
   */
  @Input() hooks?: Object;

  /**
   * Valid language identifier.
   * @tested #3 #4 #5
   * @type {string}
   * @memberof PrismInputClass
   */
  @Input() language?: string;

  /**
   * @tested
   * @package property used from @angular-package/change-detection
   * @type {ApChangeDetectionProperties}
   * @memberof PrismInputClass
   */
  _properties?: ApChangeDetectionProperties;

  /**
   * @tested #7 #8 #14
   * @type {ApChangeDetectionProperties}
   * @memberof PrismInputClass
   */
  @Input('properties')
  set properties(properties: ApChangeDetectionProperties | undefined) {
    this.prismService.properties = this._properties = { ...this._properties, ...properties };
  }
  get properties(): ApChangeDetectionProperties | undefined {
    return this.prismService.properties;
  }

  /**
   * Object properties to interpolate.
   * @tested #15
   * @type {Object}
   * @memberof PrismInputClass
   */
  @Input() interpolation?: Object;

  constructor(
    public attributeHandlerService: ApAttributeHandlerService,
    public classNameHandlerService: ApClassnameHandlerService,
    public changeDetectorRef: ChangeDetectorRef,
    public prismService: PrismService
  ) {
    super();
  }
}
