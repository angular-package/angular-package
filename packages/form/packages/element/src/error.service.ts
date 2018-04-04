// external
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// internal
import { availableValidators } from './available-validators.shared';

// interface
export interface ErrorSourceInterface {
  message: string;
  originalError: any;
}

/**
 * ErrorService to get formControl errors and transform to specific error message.
 * @export
 * @class ErrorService
 */
@Injectable()
export class ErrorService {
  private availableValidators: Array<string> = availableValidators;
  private errorSource: Subject<ErrorSourceInterface> = new Subject<ErrorSourceInterface>();

  /**
   * Subscribe to errorSource asObservable.
   * @type {*}
   * @memberof ErrorService
   */
  public errors: Observable<ErrorSourceInterface>;

  // private
  private error?: ErrorSourceInterface;
  private formControl?: AbstractControl;

  constructor() {
    this.errors = this.errorSource.asObservable();
  }

  /**
   * @memberof ErrorService
   */
  public check(): void {
    if (this.formControl && this.formControl['errors']) {
      this.availableValidators.forEach((validator, index) => {
        if (this.formControl && this.formControl.hasError(validator)) {
          if (typeof this[validator] === 'function') {
            this.error = {
              message: this[validator](),
              originalError: this.formControl.errors
            };
          }
        }
      });
      this.errorSource.next(this.error);
    }
  }

  required() {
    return `Required`;
  }

  max() {
    if (this.formControl && this.formControl.errors) {
      return `Maximum value is ${this.formControl.errors.max.max} (${this.formControl.errors.max.actual})`;
    }
  }

  maxlength() {
    if (this.formControl && this.formControl.errors) {
      return `Maximum length is ${this.formControl.errors.maxlength.requiredLength} (${this.formControl.errors.maxlength.actualLength})`;
    }
  }

  min() {
    if (this.formControl && this.formControl.errors) {
      return `Minimum value is ${this.formControl.errors.min.min} (${this.formControl.errors.min.actual})`;
    }
  }

  minlength() {
    if (this.formControl && this.formControl.errors) {
      return `Minimum length is ${this.formControl.errors.minlength.requiredLength} (${this.formControl.errors.minlength.actualLength})`;
    }
  }

  setFormControl(formControl: AbstractControl): this {
    this.formControl = formControl;
    return this;
  }
}
