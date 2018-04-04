// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// internal
import { FormElementModule } from './form-element.module';
import { FormElementConfig } from './form-element.service';
import { InputComponent } from './../test/input.component';

@NgModule({
  declarations: [
    InputComponent
  ],
  entryComponents: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FormElementModule.forRoot({
      elements: [
        { name: 'input', component: InputComponent }
      ],
      errorMessages: { }
    }),
    ReactiveFormsModule
  ]
})
export class TestFormElementModule {
  constructor() { }
}


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormElementModule.forRoot(),
    TestFormElementModule,
  ]
})
export class TestHolderFormElementModule {
  constructor() { }
}
