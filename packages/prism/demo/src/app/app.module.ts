import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSidenavModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @ngx
/*
  package.json: --aot added to ng serve
*/
import { ApPrismModule } from '@angular-package/prism/core';
import { ApDocsExampleModule } from '@angular-package/docs'; // added

// internal
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    // @angular/material
    MatButtonModule, // added
    MatCheckboxModule, // added
    MatInputModule, // added
    MatRadioModule, // added
    MatSidenavModule, // added

    // @angular-package
    ApDocsExampleModule, // added
    ApPrismModule // added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
