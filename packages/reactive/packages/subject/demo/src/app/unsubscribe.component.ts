import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { ApUnsubscribe } from '@angular-package/reactive/unsubscribe';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html'
})
@ApUnsubscribe('subscription') // <----------- Remove arguments to check if it is closing all subscriptions
export class UnsubscribeComponent implements OnDestroy, OnInit {

  subject: Subject<string> = new Subject();
  observable: Observable<string> = this.subject.asObservable();
  subscription: Subscription = this.observable.subscribe({
    next: (value: string) => {
      console.log(value);
    }
  });

  constructor() { }

  ngOnDestroy() {
    console.log(`subscription closed: `, this.subscription.closed);
  }

  ngOnInit() {
    this.subject.next('Subscribe to subject property of component');
  }
}
