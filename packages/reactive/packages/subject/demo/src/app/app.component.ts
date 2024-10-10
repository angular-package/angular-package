// external
import { Component } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subject } from 'rxjs/Subject';

// @angular-package
import { ApSubject } from '@angular-package/reactive/subject';

import { ApSubjectInterface } from '@angular-package/reactive/subject/src/subject.interface'; // [1] implements in component
import { ApCompleteType } from '@angular-package/reactive/subject/src/complete.type'; // [2] add to component with implement
import { ApSubscribeType } from '@angular-package/reactive/subject/src/subscribe.type'; // [3] add to component with implement

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@ApSubject<string>('name')
@ApSubject<number>('age')
export class AppComponent implements
  ApSubjectInterface, // <------- [1] implemented
  OnDestroy {

  complete: ApCompleteType; // <--- [2] defined complete function
  subscribe: ApSubscribeType; // <--- [3] defined subscribe function

  public age_: number;
  set age(value: number) {
    this.age_ = value;
  }
  get age(): number {
    return this.age_;
  }

  public name: string;
  public name$: Subject<string>;

  constructor() {
    // First way by using subscribe function.
    this.subscribe('age', {
      next: v => console.log(`age(${v}) _age(${this['_age']}) age_(${this['age_']})`)
    });
    this.age = 3;
    this.age = 6;
    this.age = 9;
    this.age = 27;

    // Second way of subscribe directly to Subject.
    this.name$.subscribe({
      next: v => console.log(`name(${v}) _name(${this['_name']})`)
    });
    this.name = 'M';
    this.name = 'Ma';
    this.name = 'Mart';

    // From now name$ observable is complete.
    this.completed('name');

    // Subscribe is no longer working.
    this.name = 'Mart';
    this.name = 'Marti';
    this.name = 'Martin';
  }

  ngOnDestroy() { }

  completed(property: string) {
    if (property) {
      this.complete(property);
    }
  }
}
