// external.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSidenavModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// internal.
import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './component';
import { ClassComponent } from './class/class.component';

@Injectable()
export class APErrorHandler implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    // console.log(`aaaa`, error);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent,
    ClassComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    // @angular/material
    MatButtonModule, // added
    MatCheckboxModule, // added
    MatInputModule, // added
    MatRadioModule // added
  ],
  providers: [
    {provide: ErrorHandler, useClass: APErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
