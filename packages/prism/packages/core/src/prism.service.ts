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

/**
 * @export
 * @class PrismService
 */
@Injectable()
export class PrismService {
  
  async = false;
  callback?: CallbackType;
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
        if (name) {
          Prism.add(name, hooks[name]);
        }
      }
    }
    if (hooks) {
      this.highlightElement(this.code);
    }
  }
  get hooks() {
    return Prism.hooks.all;
  }

  interpolation?: Object;

  /**
   * 
   * 
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

  properties?: ApChangeDetectionProperties;
  _ready = false;
  set ready(ready: boolean) {
    this._ready = ready;
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
