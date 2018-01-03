import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SubscribeComponent } from './subscribe.component';
import { SubscribeHolderComponent } from './subscribe-holder.component';
import { UnsubscribeComponent } from './unsubscribe.component';

const routes: Routes = [
  { path: 'subscribe', component: SubscribeHolderComponent },
  { path: 'unsubscribe', component: UnsubscribeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SubscribeComponent,
    SubscribeHolderComponent,
    UnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
