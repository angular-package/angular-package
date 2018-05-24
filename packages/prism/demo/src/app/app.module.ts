// @angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// @angular-package/prism
import { ApPrismModule } from '@angular-package/prism/core'; // <----- Import module.

// internal
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApPrismModule                   // <----- Add to NgModule imports.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
