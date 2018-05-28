/// <reference path="./../../../typings/index.d.ts" />

// external
import { ElementRef, Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { template, templateSettings } from 'lodash-es';
import Prism from 'prismjs';

// @angular-package
import { ApChangeDetectionProperties } from '@angular-package/change-detection';

// internal
import { PrismOptions } from '../interface/src/options.interface';
import { CallbackType } from '../type';
import { ApPrismTemplate } from '../interface';
import { ApObject } from '../interface/src/object.interface';
import { ApAttributeHandlerService } from '../../src/attribute-handler.service';
import { ApClassnameHandlerService } from '../../src/classname-handler.service';

/**
 * @export
 * @class PrismService
 */
@Injectable()
export class PrismService {

  /**
   * @memberof PrismService
   */
  async = false;

  /**
   * @type {ApAttributeHandlerService}
   * @memberof PrismService
   */
  attributeHandlerService?: ApAttributeHandlerService;

  /**
   * @type {ApClassnameHandlerService}
   * @memberof PrismService
   */
  classNameHandlerService?: ApClassnameHandlerService;

  /**
   * Store attribute value.
   * @tested
   * @type {(ApPrismTemplate<ApObject<string>> | null)}
   * @memberof PrismInputClass
   */
  _attribute: ApPrismTemplate<ApObject<string>> | null = null;
  set attribute(attribute: ApPrismTemplate<ApObject<string>> | null) {
    if (attribute) {

       // <pre> attributes.
      if (this.preElement && attribute.pre && this.attributeHandlerService) {
        this.attributeHandlerService.set(
          this.preElement,
          attribute.pre,
          (this._attribute && this._attribute.pre) ? this._attribute.pre : undefined
        );
      }

      // <code> attributes.
      if (this.codeElement && attribute.code && this.attributeHandlerService) {  
        this.attributeHandlerService.set(
          this.codeElement,
          attribute.code,
          (this._attribute && this._attribute.code) ? this._attribute.code : undefined
        );
      }  

      this._attribute = Object.assign({}, attribute);
    }
  }

  /**
   * @type {CallbackType}
   * @memberof PrismService
   */
  callback?: CallbackType;

  /**
   * @type {(ApPrismTemplate<string[]> | null)}
   * @memberof PrismService
   */
  _class: ApPrismTemplate<string[]> | null = null;
  set class(value: ApPrismTemplate<string[]> | null) {
    if (value) {

      // <pre> class.
      if (this.preElement && value.pre && this.classNameHandlerService) {
        this.classNameHandlerService.set(
          this.preElement,
          value.pre,
          (this._class && this._class.pre) ? this._class.pre : undefined
        );
      }

      // <code> class.
      if (this.codeElement && value.code && this.classNameHandlerService) {
        this.classNameHandlerService.set(
          this.codeElement,
          value.code,
          (this._class && this._class.code) ? this._class.code : undefined
        );
      }
      this._class = Object.assign({}, value);
    }
  }

  /**
   * @type {ElementRef}
   * @memberof PrismService
   */
  codeElement?: ElementRef;

  /**
   * @type {string}
   * @memberof PrismService
   */
  _code?: string;
  set code(code: string | undefined) {
    this._code = (code) ? code : undefined;
    if (this.ready && this.properties && this.properties.code === true) {
      this.highlightElement(code);
    }
  }
  get code(): string | undefined {
    return this._code;
  }

  /**
   * @memberof PrismService
   */
  set hooks(hooks: Object | undefined) {
    if (hooks instanceof Object) {
      for (const name in hooks) {
        if (name && hooks[name] instanceof Function) {
          Prism.add(name, hooks[name]);
        }
      }
    }
    if (hooks) {
      this.highlightElement(this.code);
    }
  }
  get hooks(): Object | undefined {
    return Prism.hooks.all;
  }

  /**
   * @type {Object}
   * @memberof PrismService
   */
  interpolation?: Object;

  /**
   * @memberof PrismService
   */
  _language?: string;
  set language(language: string | undefined) {
    this._language = language;
    if (language) {
      this.highlightElement(this.code);
    } else {
      throw new Error('Missing property `language`.');
    }
  }
  get language(): string | undefined {
    return this._language;
  }

  /**
   * @type {ElementRef}
   * @memberof PrismService
   */
  preElement?: ElementRef;

  /**
   * @type {ApChangeDetectionProperties}
   * @memberof PrismService
   */
  properties?: ApChangeDetectionProperties;

  /**
   * @memberof PrismService
   */
  _ready = false;
  set ready(ready: boolean) {
    this._ready = ready;
    this.attribute = this._attribute;
    this.class = this._class;
    this.highlightElement(this.code);
  }
  get ready(): boolean {
    return this._ready;
  }

  /**
   * Creates an instance of PrismService.
   * @param {DomSanitizer} sanitizer
   * @memberof PrismService
   */
  constructor(private sanitizer: DomSanitizer) { }

  /**
   * @tested
   * @param {string} [code] 
   * @memberof PrismService
   */
  highlightElement(code?: string): void {
    this.highlight(this.codeElement, {
      async: this.async,
      callback: this.callback,
      code,
      interpolation: this.interpolation
    });
  }

  /**
   * @private
   * @param {string} unsafe
   * @returns
   * @memberof PrismService
   */
  private escapeHtml(unsafe: string) {
    return unsafe
         .replace(/&/g, '&amp;')
         .replace(/</g, '&lt;')
         .replace(/>/g, '&gt;')
         .replace(/"/g, '&quot;')
         .replace(/'/g, '&#039;');
  }

  /**
   * 
   * 
   * @private
   * @param {ElementRef} [el] 
   * @param {PrismOptions} [options] 
   * @memberof PrismService
   */
  private highlight(el?: ElementRef, options?: PrismOptions): void {
    // Always need to have el.
    if (this.ready === true && el instanceof ElementRef && options) {
      if (options.code) {
        el.nativeElement.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, this.escapeHtml(options.code));
      }
      // Perform interpolate.
      if (options.interpolation) {
        el.nativeElement.innerHTML = this.interpolate(el.nativeElement.innerHTML, options.interpolation);
      }
      // Perform prism highlight code.
      Prism.highlightElement(el.nativeElement, options.async, options.callback);
    }
  }

  /**
   * @private
   * @param {string} string
   * @param {Object} interpolation
   * @returns {string}
   * @memberof PrismService
   */
  private interpolate(string: string, interpolation: Object): string {
    if (interpolation && interpolation instanceof Object) {

      // Use custom template delimiters.
      templateSettings.interpolate = /{{([\s\S]+?)}}/g;

      return template(string)(interpolation);
    }
    return string;
  }
}
