// external
import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  DoCheck,
  forwardRef,
  Inject,
  KeyValueDiffers,
  KeyValueChangeRecord,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

// internal
import { ErrorService } from './error.service';
import { FormElementClass } from './form-element.class';
import { FormElementService } from './form-element.service';
import { ValidatorService } from './validator.service';
import { FormService } from '../../src/form.service';

// interface
export interface SubscriptionInterface {
  errors?: Subscription;
}

/**
 * Dynamic create HTML Form Elements
 * @export
 * @class FormElementComponent
 * @extends {FormElementClass}
 * @implements {OnInit}
 */
@Component({
  selector: 'ap-form-element',
  templateUrl: './form-element.component.html',
  providers: [
    ErrorService,
    ValidatorService
  ]
})
export class FormElementComponent<T> extends FormElementClass<T> implements AfterViewChecked, AfterViewInit, DoCheck, OnDestroy, OnInit {
  step = 0;

  private differ = {};
  private subscription: SubscriptionInterface = { };

  /**
   * Creates an instance of FormElementComponent.
   * @param {ComponentFactoryResolver} componentFactoryResolver
   * @param {FormBuilder} formBuilder
   * @param {FormElementService} formElementService
   * @param {KeyValueDiffers} keyValueDiffers
   * @param {ChangeDetectorRef} changeDetectorRef
   * @param {ValidatorService} validatorService
   * @param {ErrorService} errorService
   * @memberof FormElementComponent
   */
  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    protected formBuilder: FormBuilder,
    protected formElementService: FormElementService, // @Inject(forwardRef(() => FormElementService))
    private keyValueDiffers: KeyValueDiffers,
    private changeDetectorRef: ChangeDetectorRef,
    protected validatorService: ValidatorService, // @Inject(forwardRef(() => ValidatorService))
    protected errorService: ErrorService
  ) {
    super(
      componentFactoryResolver,
      formBuilder,
      formElementService,
      validatorService,
      errorService
    );
    // KeyValueDiffers
    this.differ = {
      config: this.keyValueDiffers.find({}).create(),
      attributes: this.keyValueDiffers.find({}).create()
    };
  }

  /**
   * Detect changes with differ and assign to `__component` instance, patchValidators and also create or remove instance.
   * @param {*} changes
   * @param {boolean} assign
   * @memberof FormElementComponent
   */
  applyChanges(changes: any, assign: boolean): void {
    // add prop
    changes.forEachAddedItem((record: KeyValueChangeRecord<string, any>) => null);
    // changed
    changes.forEachChangedItem((record: KeyValueChangeRecord<string, any>) => {
      switch (record.key) {
        case 'element':
          // remove form element
          if (record.currentValue === null) {
            this.remove(true);
          } else {
            this.create();
          }
          break;
      }
      this.validatorService.patchValidators(record.key, record.currentValue);
      if (assign === true) {
        // this.__assign<any>(record.key, record.currentValue);
      }
    });
    // removed
    changes.forEachRemovedItem((record: KeyValueChangeRecord<string, any>) => {
      console.log(`forEachRemovedItem`, record.key, record.currentValue);
    });
  }

  ngAfterViewChecked() { }

  ngAfterViewInit() { }

  /**
   * Detect changes on `config` and `config.attributes` property and if any exists, use applyChanges method.
   * Check errors in formControl with errorService.
   * @memberof FormElementComponent
   */
  ngDoCheck() {
    let changes = null;
    changes = this.differ['config'].diff(this.config);
    if (changes) {
      this.applyChanges(changes, true);
    }

    // do not assign attributes to __component instance
    if (this.config) {
      changes = this.differ['attributes'].diff(this.config['attributes']);
      if (changes) {
        this.applyChanges(changes, false);
      }
    }
    this.errorService.check();
  }

  /**
   * On destroy remove subscriptions.
   * @memberof FormElementComponent
   */
  ngOnDestroy() {
    if (this.subscription.errors) {
      this.subscription.errors.unsubscribe();
    }
  }

  /**
   * create form element on init
   * @memberof FormElementComponent
   */
  ngOnInit() {
    this.create();
  }


  /**
   * Subscribe to errorService `errors` property to get formControl errors.
   * @private
   * @memberof FormElementComponent
   */
  private subscribeToErrors() {
    this.subscription.errors = this.errorService.errors.subscribe((error) => {
      this.__assign('error', error);
    });
  }
}
