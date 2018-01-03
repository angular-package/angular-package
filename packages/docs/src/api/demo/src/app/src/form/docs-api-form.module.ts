import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// internal
import { DocsApiFormComponent } from './docs-api-form.component';

/**
 * @export
 * @class DocsApiFormModule
 */
@NgModule({
  declarations: [
    DocsApiFormComponent
  ],
  exports: [
    DocsApiFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class DocsApiFormModule {}
