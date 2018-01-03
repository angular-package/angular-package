import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribe } from '@angular-package/reactive/decorator/unsubscribe';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html'
})
@Unsubscribe()
export class UnsubscribeComponent implements OnDestroy, OnInit {

  subject: Subject<string> = new Subject();
  observable: Observable<string> = this.subject.asObservable();
  subscription: Subscription = this.observable.subscribe({
    next: (value: string) => {
      console.log(`subscribe`, value);
    }
  });

  constructor() { }

  ngOnDestroy() {
    console.log(this);
  }

  ngOnInit() {
    this.subject.next('aaaa');
  }
}
