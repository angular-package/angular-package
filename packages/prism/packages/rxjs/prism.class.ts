/// <reference path="./../../typings/index.d.ts" />
// external
import {
  ElementRef,
  Input,
  Injectable,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import Prism from 'prismjs';
import * as _ from 'lodash-es';

// internal
import { PrismInterface } from './prism.interface';
import { CallbackType, SanitizedType } from './prism.type';
import { PrismService } from './prism.service';

/**
 * @export
 * @abstract
 * @class PrismClass
 * @implements {PrismInterface}
 */
@Injectable()
export abstract class PrismClass implements PrismInterface {

  protected change = false;

  /**
   * Whether to use Web Workers to improve performance and avoid blocking the UI when highlighting very large chunks of code.
   * False by default (why? - http://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
   */
  @Input('async') set async(value: boolean) {
    this.prismService.async = value;
  }
  get async(): boolean {
    return this.prismService.async;
  }

  /**
   * An optional callback to be invoked after the highlighting is done.
   * Mostly useful when async is true, since in that case, the highlighting is done asynchronously.
   * @memberof PrismClass
   */
  @Input('callback') set callback(value: CallbackType | undefined) {
    this.prismService.callback = value;
  }
  get callback(): CallbackType | undefined {
    return this.prismService.callback;
  }

  /**
   * A string with the code to be highlighted.
   * @type {string}
   * @memberof PrismClass
   */
  @Input('code') set code(value: SanitizedType | undefined) {
    if (value) {
      if (typeof (value) === 'string') {
        this.prismService.code = value;
      } else {
        throw new Error(`Property \`code\` should be \`string\` instead of provided \`${typeof (value)}\``);
      }
    } else {
      this.prismService.code = value;
    }
  }
  get code(): SanitizedType | undefined {
    return this.prismService.code;
  }

  /**
   * @type {Object}
   * @memberof PrismClass
   */
  @Input('hooks') set hooks(value: Object) {
    this.prismService.hooks = value;
  }
  get hooks(): Object {
    return this.prismService.hooks;
  }

  /**
   * Valid language identifier.
   * @type {string}
   * @memberof PrismClass
   */
  @Input('language') set language(value: string) {
    if (value) {
      if (typeof (value) === 'string') {
        this.prismService.language = value;
      } else {
        throw new Error(`Property \`language\` should be \`string\` instead of provided \`${typeof (value)}\``);
      }
    } else {
      throw new Error('Missing property `language`.');
    }
  };
  get language(): string {
    return this.prismService.language;
  }

  /**
   * Object properties to interpolate.
   * @type {(Object | undefined)}
   * @memberof PrismClass
   */
  @Input('interpolation') set interpolation(value: Object | undefined) {
    this.prismService.interpolation = value;
  }
  get interpolation(): Object | undefined {
    return this.prismService.interpolation;
  }

  /**
   * "The element containing the code. It must have a class of language-xxxx to be processed, where xxxx is a valid language identifier."
   * @type {ElementRef}
   * @memberof PrismClass
   */
  @ViewChild('codeElementRef') public codeElementRef: ElementRef;

  /**
   * Creates an instance of PrismClass.
   * @param {PrismService} prismService
   * @memberof PrismClass
   */
  constructor(public prismService: PrismService) { }

  /**
   * Observe changes with specific `prop`. If found any, set property `change` to `true`.
   * @protected
   * @param {(string | string[])} prop
   * @param {SimpleChanges} changes
   * @memberof PrismClass
   */
  protected onChanges(prop: string | string[], changes: SimpleChanges): void {
    if (changes) {
      _.each(changes, (value: any, key: string) => {
        if (prop instanceof Array) {
          _.each(prop, (propName) => {
            if (key === propName) {
              if (changes[key].currentValue !== changes[key].previousValue && changes[key].firstChange === false) {
                this.change = true; // changes have been found, set property `change` to `true`.
              }
            }
          });
        } else {
          switch (key) {
            case prop:
              if (changes[key].currentValue !== changes[key].previousValue && changes[key].firstChange === false) {
                this.change = true; // changes have been found, set property `change` to `true`.
              }
            break;
          }
        }
      });
    }
  }
}
