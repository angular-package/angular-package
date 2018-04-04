// external
import { Injectable } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

// internal
import { ValidatorsHolderInterface } from '../../interface';

import { availableValidators } from './available-validators.shared';

/**
 * @export
 * @class ValidatorService
 */
@Injectable()
export class ValidatorService {
  availableValidators: Array<string> = availableValidators;
  formControl?: AbstractControl;
  validators: ValidatorsHolderInterface = {};

  /**
   * @param {string} key
   * @returns {boolean}
   * @memberof ValidatorService
   */
  private checkAvailability(key: string): boolean {
    if (key) {
      return this.availableValidators.findIndex(validator => validator === key) > -1;
    } else {
      return false;
    }
  }

  /**
   * @private
   * @param {string} key
   * @param {*} value
   * @param {(Function | null)} validator
   * @returns {this}
   * @memberof ValidatorService
   */
  private patch(key: string, value: any, validator: Function | null): this {
    Object.assign(this.validators, { [key]: validator ? { validator, value } : { value } });
    return this;
  }

  /**
   * Update available validator.
   * @param {string} key
   * @param {*} value
   * @memberof ValidatorService
   */
  patchValidators(key: string, value: any): void {
    // key exists and it is one of available validators
    if (this.checkAvailability(key) === true) {
      if (typeof this[key] === 'function') {
        this
          .patch(key, value, this[key](key, value))
          .set();
      } else {
        throw new Error(`${key} method does not exist in ValidatorService.`);
      }
    }
  }

  private disabled(key: string, value: any): Function | null {
    if (this.formControl) {
      (value === true) ? this.formControl.disable() : this.formControl.enable();
    }
    return null;
  }

  private email(key: string, value: any): Function | null {
    return null;
  }

  private max(key: string, value: any): Function | null {
    return (value > -1) ? Validators.max(value) : null;
  }

  private min(key: string, value: any): Function | null {
    return (value > -1) ? Validators.min(value) : null;
  }

  private maxlength(key: string, value: any): Function | null {
    return (value > -1) ? Validators.maxLength(value) : null;
  }

  private minlength(key: string, value: any): Function | null {
    return (value > -1) ? Validators.minLength(value) : null;
  }

  private nullValidator(key: string, value: any): Function | null {
    return null;
  }

  private pattern(key: string, value: any): Function | null {
    return null;
  }

  private required(key: string, value: any): Function | null {
    return (value === true) ? Validators.required : null;
  }

  private requiredTrue(key: string, value: any): Function | null {
    return null;
  }

  /**
   * @returns {*}
   * @memberof ValidatorService
   */
  set(): this {
    if (this.validators) {
      const setValidators = Object.keys(this.validators).map(key => this.validators[key].validator).filter(validator => validator);
      if (this.formControl) {
        this.formControl.setValidators(setValidators);
      }
    }
    return this;
  }

  setFormControl(formControl: AbstractControl): this {
    this.formControl = formControl;
    return this;
  }
}
