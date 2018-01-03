// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// @ngx
import { PrismModule } from '@ngx-prism/core';
import { MarkdownModule } from '@ngx-markdown/core';
import { DocsApiComponent } from './docs-api.component';

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
    MarkdownModule.forChild()
  ]
})
export class DocsApiModule { }
