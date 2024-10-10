import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PropertyClassComponent } from './property-class/property-class.component';
import { BindPropertyComponent } from './bind-property/bind-property.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyClassComponent,
    BindPropertyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
