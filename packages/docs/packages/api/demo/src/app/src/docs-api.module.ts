// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// @ngx
import { PrismModule } from '@ngx-prism/core';
import { MarkdownModule } from '@ngx-markdown/core';
import { DocsApiComponent } from './docs-api.component';
import { DocsApiFormModule } from './form';

/**
 * @export
 * @class DocsApiModule
 */
@NgModule({
  declarations: [
    DocsApiComponent
  ],
  exports: [
    DocsApiComponent
  ],
  imports: [
    // external
    CommonModule,
    FlexLayoutModule,

    // @ngx
    DocsApiFormModule,
    MarkdownModule.forChild()
  ]
})
export class DocsApiModule { }
