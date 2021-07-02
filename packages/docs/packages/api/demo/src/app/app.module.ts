import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// @ngx
import { MarkdownModule } from '@ngx-markdown/core';

// internal
import { AppComponent } from './app.component';
// import { DocsApiModule, DocsApiFormModule } from './src';
import { ApDocsApiTableFormModule } from './table/form/src/table-form.module';

/**
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    // DocsApiModule,
    // DocsApiFormModule,
    ApDocsApiTableFormModule,
    MarkdownModule.forRoot({
      // this options are defaults when use forChild().
      options: {
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: true,
        sanitize: false,
        smartLists: true,
        smartypants: true
      },
      // template while loading
      loadingTemplate: `<div> Loading ... </div>`
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
