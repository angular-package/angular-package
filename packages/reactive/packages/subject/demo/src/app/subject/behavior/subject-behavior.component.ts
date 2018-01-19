import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// @angular-package
import { ApSubjectBehavior } from '@angular-package/reactive/subject/behavior';
import { ApSubjectInterface, ApCompleteType, ApSubscribeType } from '@angular-package/reactive/subject';

// internal
import { AddressInterface } from '../../address.interface';

/**
 * @export
 * @class SubjectBehaviorComponent
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-subject-behavior',
  templateUrl: './subject-behavior.component.html',
  styleUrls: ['./subject-behavior.component.scss']
})
@ApSubjectBehavior<number>('age')
@ApSubjectBehavior<string>('firstname', 'lastname')
export class SubjectBehaviorComponent implements  OnDestroy {

  subscribe: ApSubscribeType;
  complete: ApCompleteType;

  address: AddressInterface = { street: 'Cairns central', place: 127 };

  age = 27;
  age$: BehaviorSubject<number>;
  firstname = 'Martin';
  lastname = 'Einstein';


  logs: string[] = [];

  constructor() {
    this.age$.subscribe({
      next: v => this.log(`Subscribe(age) #A: ${v}`)
    });
    // Subscribe to firstname Observer A.
    this.subscribe('firstname', {
      next: v => this.log(`Subscribe(firstname) #A: ${v}`, )
    });
    this.firstname = 'Next name is';

    this.age = 27;

    this.age$.subscribe({
      next: v => this.log(`Subscribe(age) #B: ${v}`, )
    });
    this.age$.subscribe({
      next: v => this.log(`Subscribe(age) #B: ${v}`, )
    });

    // Subscribe to firstname Observer B.
    this.subscribe('firstname', {
      next: v => this.log(`Subscribe(firstname) #B: ${v}`, )
    });
    this.subscribe('lastname', {
      next: v => this.log(`Subscribe(lastname) #B: ${v}`, )
    });

    this.age$.next(44);
  }

  log(v) {
    console.log(v);
    this.logs.push(v);
  }

    // Use complete function to complete observable specified by `propertyName`.
  completed(propertyName: string): void {
    this.complete(propertyName);
  }

  update(input: any) {
    const value = (input.name === 'place') ? parseInt(input.value, 0) : input.value;
    this.address = Object.assign({}, this.address, { [input.name]: value });
  }

  ngOnDestroy() {
    console.log(this);
  }
}
