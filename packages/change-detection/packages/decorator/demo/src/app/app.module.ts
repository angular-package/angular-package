// external.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSidenavModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// internal.
import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
