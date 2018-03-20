import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// internal
import { DocsApiFormComponent } from './docs-api-form.component';
import { DocsApiFormTableComponent } from './table';
import { DocsApiFormTypesComponent } from './types';

const IMPORTEXPORTS = [
  DocsApiFormComponent,
  DocsApiFormTableComponent,
  DocsApiFormTypesComponent
];

/**
 * @export
 * @class DocsApiFormModule
 */
@NgModule({
  declarations: IMPORTEXPORTS,
  exports: IMPORTEXPORTS,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
    // FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class DocsApiFormModule {}
