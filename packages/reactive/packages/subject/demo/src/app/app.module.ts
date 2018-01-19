import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// internal
import { AppComponent } from './app.component';
import { SubjectAsyncComponent } from './subject/async/subject-async.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectHolderComponent } from './subject/subject-holder.component';
import { UnsubscribeComponent } from './unsubscribe.component';
import { SubjectService } from './subject/subject.service';
import { SubjectBehaviorComponent } from './subject/behavior/subject-behavior.component';
import { SubjectReplayComponent } from './subject/replay/subject-replay.component';
import { LogsComponent } from './logs/logs.component';

const routes: Routes = [
  { path: 'subject', component: SubjectHolderComponent },
  { path: 'subject-async', component: SubjectAsyncComponent },
  { path: 'subject-behavior', component: SubjectBehaviorComponent },
  { path: 'subject-replay', component: SubjectReplayComponent },
  { path: 'unsubscribe', component: UnsubscribeComponent }
];

/**
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,

    // examples
    SubjectAsyncComponent,
    SubjectBehaviorComponent,
    SubjectReplayComponent,
    SubjectComponent,

    SubjectHolderComponent,
    UnsubscribeComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
