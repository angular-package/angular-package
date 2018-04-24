
// external
import { ElementRef, Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { PartialObserver } from 'rxjs/Observer';
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

  // Define Subject
  private subject = {
    code: new Subject<SanitizedType>(),
    language: new Subject<SanitizedType>()
  };

  /**
   * @type {boolean}
   * @memberof PrismService
   */
  public _async: boolean;
  set async(value: boolean) {
    this._async = value;
  }
  get async(): boolean {
    return this._async;
  }

  /**
   * @type {(CallbackType | undefined)}
   * @memberof PrismService
   */
  public _callback: CallbackType | undefined;
  set callback(value: CallbackType | undefined) {
    this._callback = value;
  }
  get callback(): CallbackType | undefined {
    return this._callback;
  }

  /**
   * Interpolate with specific template options.
   * @private
   * @memberof PrismService
   */
  private templateOptions = { interpolate: /{{([\s\S]+?)}}/g };


  /**
   * code
   * @type {string}
   * @memberof PrismService
   */
  public _code: SanitizedType | undefined;
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
  public _hooks: Object;
  set hooks(value: Object) {
    this._hooks = value;
    if (value instanceof Object) {
      _.forEach(value, (element, key) => {
        this.prism.hooks.add(key, element);
      });
    }
  }
  get hooks(): Object {
    return this._hooks;
  }

  public code$: Observable<SanitizedType> = this.subject.code.asObservable();
  public language$: Observable<SanitizedType> = this.subject.language.asObservable();

  public _interpolation?: Object | undefined;
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
  public _language: string;
  set language(value: string) {
    this._language = value;
  }
  get language(): string {
    return this._language;
  }

  // privates
  private prism = Prism;

  constructor(private sanitizer: DomSanitizer) { }

  /**
   * @param {ElementRef} codeElementRef
   * @memberof PrismService
   */
  public highlightElement(codeElementRef: ElementRef): void {
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
  public interpolate(codeElementRef: ElementRef): ElementRef {
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
