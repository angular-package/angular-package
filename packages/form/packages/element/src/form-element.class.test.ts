import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { FormElementClass } from './../src/form-element.class';
import { FormElementService } from './../src/form-element.service';
import { ValidatorService } from './validator.service';
import { ErrorService } from './error.service';

@Component({
  selector: 'ap-form-element-test-component',
  template: 'test test'
})
export class FormElementTestComponent<T> extends FormElementClass<T> implements OnInit {
// export class FormElementTestComponent implements OnInit {
  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    protected formBuilder: FormBuilder,
    protected formElementService: FormElementService, // @Inject(forwardRef(() => FormElementService))
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
  }

  ngOnInit() { }
}
