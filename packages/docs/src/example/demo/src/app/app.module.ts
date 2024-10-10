import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
} from '@angular/material'; // added
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // added
import { FlexLayoutModule } from '@angular/flex-layout'; // added

// @angular-package
import { ApDocsApiModule, ApDocsExampleModule } from '@angular-package/docs'; // added

// internal
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule, // added
    BrowserModule,
    FlexLayoutModule,
    FormsModule, // added
    ReactiveFormsModule,

    ApDocsApiModule,
    ApDocsExampleModule.forRoot({
      border: '1px solid red',
      body_font_size: '0.875em',
      box_shadow: '0 0 30px #aaa',
      source_font_size: '0.875em'
    }), // added

    MatButtonModule, // added
    MatIconModule, // added
    MatInputModule, // added
    MatSelectModule, // added
    MatSidenavModule, // added
    MatSliderModule // added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
