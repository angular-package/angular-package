import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app.layout.component';

// @angular-package/core/component-loader
import { DynamicComponent } from './core/component-loader/dynamic/dynamic.component';
import { LoaderClassComponent } from './core/component-loader/loader-class/loader-class.component';
import { LoaderServiceComponent } from './core/component-loader/loader-service/loader-service.component';

@NgModule({
  entryComponents: [
    DynamicComponent
  ],
  declarations: [
    AppComponent,
    AppLayoutComponent,
    DynamicComponent,
    LoaderClassComponent,
    LoaderServiceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    // @angular/material
    MatButtonModule, // added
    MatCheckboxModule, // added
    MatIconModule, // added
    MatInputModule, // added
    MatRadioModule, // added
    MatSidenavModule, // added
    MatToolbarModule, // added
    MatTooltipModule // added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
