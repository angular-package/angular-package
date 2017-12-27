// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// @ngx
import { ApPrismModule } from '@angular-package/prism';
import { MarkdownModule } from '@ngx-markdown/core';
import { DocsApiComponent } from './docs-api.component';

/**
 * @export
 * @class ApDocsApiModule
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

    // @ngx
    MarkdownModule.forChild()
  ]
})
export class ApDocsApiModule { }
