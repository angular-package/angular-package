// external
import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material';

// internal
import { FormElementComponent } from './form-element.component';
import { FormElementConfig, FormElementService } from './form-element.service';

/**
 * To dynamic create HTML Form Elements.
 * @export
 * @class FormElementModule
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCommonModule
  ],
  declarations: [ FormElementComponent ],
  exports: [ FormElementComponent ]
})
export class FormElementModule {
  /**
   * forRoot with config parameter with all possible form elements to create.
   * @static
   * @param {FormElementConfig} config
   * @returns {ModuleWithProviders}
   * @memberof FormElementModule
   */
  static forRoot(@Optional() @Inject(FormElementConfig) config?: FormElementConfig): ModuleWithProviders {
    return {
      ngModule: FormElementModule,
      providers: [
        FormElementService,
        { provide: FormElementConfig, useValue: config, multi: true }
      ]
    };
  }

  /**
   * @static
   * @returns
   * @memberof FormElementModule
   */
  static forChild(config: FormElementConfig): ModuleWithProviders {
    return {
      ngModule: FormElementModule,
      providers: [
        {provide: FormElementConfig, useValue: config, multi: true}
      ]
    };
  }
}
