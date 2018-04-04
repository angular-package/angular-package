import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  AsyncValidatorFn
} from '@angular/forms';
import * as _ from 'lodash-es';

export interface ControlsConfigInterface {
  [key: string]: any;
}

export type ValidatorType = ValidatorFn | ValidatorFn[];
export type AsyncValidatorType = AsyncValidatorFn | AsyncValidatorFn[];

/**
 * @export
 * @class FormService
 */
@Injectable()
export class FormService {

  form?: FormGroup;

  get controls() {
    if (this.form) {
      return this.form.controls;
    }
  }

  instance(formBuilder: FormBuilder): FormService {
    return new FormService(formBuilder);
  }

  constructor(public formBuilder: FormBuilder) { }

  // init(controlsConfig: ControlsConfigInterface, extra?: ControlsConfigInterface): this {
  build(controlsConfig: any): this {

    _.mapValues(controlsConfig, (element: any, key: any, collection: any) => {

      // if object.
      if (typeof element === 'object') {
        // if Array.
        if (element instanceof Array) {
          collection[key] = this.buildFormArray(element);
        } else {
          _.mapValues(element, (subElement: any, subKey: any, subCollection: any) => {

            // if object.
            if (typeof subElement === 'object') {
              // if Array.
              if (subElement instanceof Array) {
                subCollection[subKey] = this.buildFormArray(subElement);
              } else {

                _.
                mapValues(subElement, (nextElement: any, nextKey: any, nextCollection: any) => {
                  // if object.
                  if (typeof nextElement === 'object') {
                    // if Array.
                    if (nextElement instanceof Array) {
                      nextCollection[nextKey] = this.buildFormArray(nextElement);
                    } else {
                      nextCollection[nextKey] = this.group(nextElement);
                    }
                  }
                });
                subCollection[subKey] = this.group(subElement);
              }
            }
          });
          collection[key] = this.group(element);
        }
      }
    });
    this.form = this.group(controlsConfig);
    console.log(this.form);
    return this;
  }

  buildFormArray(element: any[]): FormArray {
    const buildArray: any[] = [];
    element.forEach((item) => {
      if (typeof item === 'object') {
        buildArray.push(this.group(item));
      } else if (typeof item === 'string') {
        buildArray.push(this.control(item));
      }
    });
    return this.array(buildArray);
  }


  public addArray(name: string, controlsConfig: any[] = [], validator?: ValidatorFn, asyncValidator?: AsyncValidatorFn): this {
    if (this.form) {
      this.form.addControl(name, this.array(controlsConfig, validator, asyncValidator));
    }
    return this;
  }

  public addToArray(path: string | (string | number)[], value: any): void {
    const array = this.get(path) as FormArray;
    array.push(value);
  }

  public removeFromArray() {

  }

  public addControl(name: string, formState: Object, validator?: ValidatorType, asyncValidator?: AsyncValidatorType): this {
    if (this.form) {
      this.form.addControl(name, this.control(formState, validator, asyncValidator));
    }
    return this;
  }

  public addGroup(name: string, controlsConfig: ControlsConfigInterface, extra?: ControlsConfigInterface): this {
    if (this.form) {
      this.form.addControl(name, this.group(controlsConfig, extra));
    }
    return this;
  }

  /*
  addGroup(name: string, value: any = {}): void {
    this.form.addControl(name, this.formBuilder.group(value));
  }
  */

  public removeControl(name: string): this {
    if (name) {
      if (this.form) {
        this.form.removeControl(name);
      }
    }
    return this;
  }

  array(controlsConfig: any[], validator?: ValidatorFn, asyncValidator?: AsyncValidatorFn): FormArray {
    return this.formBuilder.array(controlsConfig, validator, asyncValidator) as FormArray;
  }

  control(formState: Object, validator?: ValidatorType, asyncValidator?: AsyncValidatorType): FormControl {
    return this.formBuilder.control(formState, validator, asyncValidator) as FormControl;
  }

  group(controlsConfig: ControlsConfigInterface, extra?: ControlsConfigInterface): FormGroup {
    return this.formBuilder.group(controlsConfig, extra) as FormGroup;
  }

  get(path: string | (string | number)[]): AbstractControl | undefined {
    if (this.form) {
      return this.form.get(path) as AbstractControl;
    }
  }
}
