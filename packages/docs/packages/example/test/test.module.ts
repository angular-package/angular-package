import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, // added
  MatInputModule // added
} from '@angular/material';
// import { FlexLayoutModule } from '@angular/flex-layout';

// @ngx
import { PrismModule } from '@ngx-prism/core';

// internal
import { DocsExampleModule } from './../src/docs-example.module';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    BrowserAnimationsModule, // added
    CommonModule,
    DocsExampleModule, // added
  ],
  exports: [
    TestComponent
  ],
  providers: [],
})
export class TestModule { }
