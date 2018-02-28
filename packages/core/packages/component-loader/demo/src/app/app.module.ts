import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
// simport { DynamicTesterComponent } from './dynamic-tester/dynamic-tester.component';
import { LoaderServiceComponent } from './loader-service/loader-service.component';
import { LoaderClassComponent } from './loader-class/loader-class.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    // DynamicTesterComponent,
    LoaderServiceComponent,
    LoaderClassComponent
  ],
  entryComponents: [
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
