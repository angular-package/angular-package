
// external
import { ElementRef, Injectable, SecurityContext } from '@angular/core';
import {
  DomSanitizer,
  // SafeHtml
} from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
import Prism from 'prismjs';
import * as _ from 'lodash-es';

// internal
import { CallbackType, SanitizedType } from './prism.type';

/**
 * @export
 * @class PrismService
 */
@Injectable()
export class PrismService {

  /**
   * @type {boolean}
   * @memberof PrismService
   */
  _async?: boolean;
  set async(value: boolean | undefined) {
    this._async = value;
  }
  get async(): boolean | undefined {
    return this._async;
  }

  /**
   * @type {(CallbackType | undefined)}
   * @memberof PrismService
   */
  _callback: CallbackType | undefined;
  set callback(value: CallbackType | undefined) {
    this._callback = value;
  }
  get callback(): CallbackType | undefined {
    return this._callback;
  }

    /**
   * code
   * @type {string}
   * @memberof PrismService
   */
  _code: SanitizedType | undefined;
  set code(value: SanitizedType | undefined) {
    this._code = value;
    if (value) {
      value = this.sanitizer.sanitize(SecurityContext.HTML, this.escapeHtml(value));
    }
  }
  get code(): SanitizedType | undefined {
    return this._code;
  }

  /**
   * @type {Object}
   * @memberof PrismService
   */
  _hooks?: Object;
  set hooks(value: Object | undefined) {
    this._hooks = value;
    if (value instanceof Object) {
      _.forEach(value, (element, key) => {
        this.prism.hooks.add(key, element);
      });
    }
  }
  get hooks(): Object | undefined {
    return this._hooks;
  }

  code$: Observable<SanitizedType>;
  language$: Observable<SanitizedType>;

  _interpolation?: Object;
  set interpolation(value: Object | undefined) {
    this._interpolation = value;
  }
  get interpolation(): Object | undefined {
    return this._interpolation;
  }

  /**
   * rxjs property subject['language']
   * @type {string}
   * @memberof PrismService
   */
  _language?: string;
  set language(value: string | undefined) {
    this._language = value;
  }
  get language(): string | undefined {
    return this._language;
  }

  // privates
  private prism = Prism;

  // Define Subject
  private subject$ = {
    code: new Subject<SanitizedType>(),
    language: new Subject<SanitizedType>()
  };

  /**
   * Interpolate with specific template options.
   * @private
   * @memberof PrismService
   */
  private templateOptions = { interpolate: /{{([\s\S]+?)}}/g };

  /**
   * Creates an instance of PrismService.
   * @param {DomSanitizer} sanitizer 
   * @memberof PrismService
   */
  constructor(private sanitizer: DomSanitizer) {
    this.code$ = this.subject$.code.asObservable();
    this.language$ = this.subject$.language.asObservable();
  }

  /**
   * @param {ElementRef} codeElementRef
   * @memberof PrismService
   */
  highlightElement(codeElementRef: ElementRef): void {
    if (codeElementRef instanceof ElementRef) {
      this.interpolate(codeElementRef);
      this.prism.highlightElement(codeElementRef.nativeElement, this.async, this.callback);
    }
  }

  /**
   * @param {string} string
   * @returns {string}
   * @memberof PrismService
   */
  interpolate(codeElementRef: ElementRef): ElementRef {
    if (this.interpolation && codeElementRef instanceof ElementRef) {
      codeElementRef.nativeElement.innerHTML = _.template(codeElementRef.nativeElement.innerHTML, this.templateOptions)(this.interpolation);
    }
    return codeElementRef;
  }

  /**
   * @private
   * @param {string} unsafe
   * @returns {SanitizedType}
   * @memberof PrismService
   */
  private escapeHtml(unsafe: string): SanitizedType {
    return unsafe
         .replace(/&/g, '&amp;')
         .replace(/</g, '&lt;')
         .replace(/>/g, '&gt;')
         .replace(/"/g, '&quot;')
         .replace(/'/g, '&#039;');
  }
}
