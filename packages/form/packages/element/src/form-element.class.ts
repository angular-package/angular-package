// external
import {
  ComponentFactoryResolver,
  EventEmitter,
  forwardRef,
  Inject,
  Injectable,
  Input,
  Output
} from '@angular/core';
import { ComponentLoaderClass } from '@angular-package/core/component-loader';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

/* TODO: remove when test in karma ... */
import { FormElementInterface } from '../../interface';
import { element } from '../../type';

// internal
import { ErrorService } from './error.service';
import { FormElementService } from './form-element.service';
import { ValidatorService } from './validator.service';

/**
 * @export
 * @abstract
 * @class FormElementClass
 * @extends {DynamicComponentClass}
 */
export abstract class FormElementClass<T> extends ComponentLoaderClass<T> {
  /**
   * Main @Input('config') that is used to assign all possible `properties` specified in its interface.
   * @type {FormElementDataInterface}
   * @memberof FormElementClass
   */
  @Input('config') config?: FormElementInterface;

    /**
   * @type {FormGroup}
   * @memberof FormElementClass
   */
  _formGroup?: FormGroup;
  @Input('form') set formGroup(formGroup: FormGroup | undefined) {
    this._formGroup = formGroup;
  }
  get formGroup(): FormGroup | undefined {
    if (this._formGroup) {
      return this._formGroup;
    }
  }

  /**
   * Property of `any` type for html angular attribute `[(NgModel)]` or for formGroup.
   */
  @Input('model') model?: Object;

  /**
   * @type {formGroupName}
   * @memberof FormElementClass
  _formGroupName: string;
  @Input() set formGroupName(formGroupName: string) {
    this._formGroupName = formGroupName;
    this.__set('formGroupName');
  }
  get formGroupName(): string {
    return this._formGroupName;
  }
  */

  removed = false;

  // Events
  @Output() cancelled: EventEmitter<any> = new EventEmitter();
  @Output() changed: EventEmitter<any> = new EventEmitter();
  @Output() created: EventEmitter<any> = new EventEmitter();
  @Output() destroyed: EventEmitter<any> = new EventEmitter();
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  /**
   * Creates an instance of FormElementClass.
   * @param {ComponentFactoryResolver} componentFactoryResolver
   * @param {FormBuilder} formBuilder
   * @param {FormElementService} formElementService
   * @param {ValidatorService} validatorService
   * @memberof FormElementClass
   */
  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    protected formBuilder: FormBuilder,
    protected formElementService: FormElementService, // @Inject(forwardRef(() => FormElementService))
    protected validatorService: ValidatorService, // @Inject(forwardRef(() => ValidatorService))
    protected errorService: ErrorService
  ) {
    super(componentFactoryResolver);
  }

  /**
   * Dynamically create new component from property `elementComponent`
   * @memberof FormElementClass
   */
  public create(): void {
    if (this.config) {
      const createElement = this.formElementService.find(this.config.element);
      if (createElement) {
        this.__create(createElement);
        this.removed = false;
        // add formGroup if not exists
        if (!this.formGroup) {
          this.formGroup = this.formBuilder.group({});
        }
        // this.__assign<Object>('model', this.model);
        // this.__assign<FormGroup>('formGroup', this.formGroup);
        // this.formGroup.controls[this.config.key] = new FormControl();
        // this.formControl().markAsTouched();
        // this.validatorService.setFormControl(this.formControl());
        // this.errorService.setFormControl(this.formControl());

        // assign config to __component instance
        if (this.config) {
          /*
          Object.keys(this.config).forEach((prop, index) => {
            this.validatorService.patchValidators(prop, this.config[prop]);

            if (this.config[prop] instanceof Object) {
              Object.keys(this.config[prop]).forEach(subprop => {
                this.validatorService.patchValidators(subprop, this.config[prop][subprop]);
              });
            }

            // assign to created __component instance
            // this.__assign(prop, this.config[prop]);
          });
          */

          this.__subscribe('cancelled', this.onCancelled);
          this.__subscribe('changed', this.onChanged);
          this.__subscribe('submitted', this.onSubmitted);

          // subscribe to valueChanges in formGroup
          // this.formControl().valueChanges.subscribe(model => this.updateValueAndValidity());
          // this.formControl().statusChanges.subscribe(() => { });

          this.created.emit(true);
          this.destroyed.emit(false);
        }
      } else {
        throw new Error(`
          You need to define FormElementConfig for example as below:
          FormElementModule.forRoot({
              elements: [
                { name: 'input', component: YourInputComponent },
                { name: 'select', component: YourSelectComponent }
              ]
            }),
        `);
      }
    }
  }

  /**
   * returns form control of specified key
   * @param {string} [key]
   * @returns {AbstractControl}
   * @memberof FormElementClass
   */
  public formControl(key?: string): AbstractControl | undefined {
    if (this.config && this.formGroup) {
      return this.formGroup.controls[key ? key : this.config.key];
    }
  }

  public get(property: string): any {
    return this.__get(property);
  }

  /**
   * On submit emit event `cancelled` and if property `destroy.onCancelled` is true remove `__component` instance
   * @private
   * @memberof FormElementClass
   */
  private onCancelled = (result: any) => {
    this.cancelled.emit(result);
    if (this.config && this.config.destroy && this.config.destroy.onCancelled === true) {
      this.remove(this.config.destroy.onCancelled);
    }
  }

  /**
   * On submit emit event `changed` and if property `destroy.onChanged` is true remove `__component` instance
   * @private
   * @memberof FormElementClass
   */
  private onChanged = (result: any) => {
    if (result) {
      this.changed.emit(result);
    }
    if (this.config && this.config.destroy && this.config.destroy.onChanged === true) {
      this.remove(true);
    }
  }

  /**
   * On submit emit event `submitted` and if property `destroy.onSubmitted` is true remove `__component` instance
   * @private
   * @memberof FormElementClass
   */
  private onSubmitted = (result: any) => {
    if (result) {
      this.submitted.emit(result);
    }
    if (this.config && this.config.destroy && this.config.destroy.onSubmitted === true) {
      this.remove(true);
    }
  }

  /**
   * If true destroy created component in property `__component` and set to null
   * @public
   * @param {boolean} [destroy]
   * @memberof FormElementClass
   */
  public remove(destroy?: boolean): void {
    if (destroy === true) {
      this.__destroy();
      this.removed = true;

      // remove form control
      this.removeFormControl();

      // emit created and destroyed
      this.created.emit(false);
      this.destroyed.emit(true);
    }
  }

  /**
   * Remove formGroup control using formGroup.removeControl with setTimeout
   * @memberof FormElementClass
   */
  removeFormControl() {
    setTimeout(() => {
      // this.formGroup.removeControl(this.config.key);
    });
  }

  /**
   * Subscribe to `__component` instance specific `property` name.
   * @param {string} property
   * @param {*} [callback]
   * @param {*} [error]
   * @param {*} [complete]
   * @memberof FormElementClass
   */
  subscribe(property: string, callback?: any, error?: any, complete?: any): void {
    this.__subscribe(property, callback, error, complete);
  }

  /**
   * formGroup updateValueAndValidity with setTimeout
   * @memberof FormElementClass
   */
  updateValueAndValidity() {
    setTimeout(() => {
      // this.formGroup.updateValueAndValidity();
    });
  }
}
