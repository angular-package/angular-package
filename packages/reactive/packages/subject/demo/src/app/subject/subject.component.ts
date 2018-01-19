import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PartialObserver } from 'rxjs/Observer';
import * as _ from 'lodash';

// @angular-package
import { ApSubject } from '@angular-package/reactive/subject';
import { ApSubjectInterface, ApCompleteType, ApSubscribeType } from '@angular-package/reactive/subject';

// internal
import { AddressInterface } from '../address.interface';

@Component({
  selector: 'app-subject-component',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
@ApSubject<AddressInterface>('address')
// @ApSubject<number>(['age'])
@ApSubject<string>('firstname', 'lastname')
export class SubjectComponent implements ApSubjectInterface, OnDestroy {

  subscribe: ApSubscribeType;
  complete: ApCompleteType;

  address: AddressInterface = { street: 'Cairns central', place: 127 };
  address$: Subject<string>;

  age = 27;
  firstname = 'Martin';
  lastname = 'Einstein';
  lastname$: Subject<string>;

  logs: string[] = [];

  constructor() {
    // Subscribe with `subscribe<T>(propertyName: string, observer: PartialObserver<T>) => void`
    this.subscribe<number>('age', {
      next: v => this.log(`subscribe to age: ${v}`)
    });
    this.subscribe<AddressInterface>('address', {
      next: v => this.log(`subscribe#A to address: ${v['street']} ${v['place']}`)
    });
    this.subscribe<string>('firstname', {
      next: v => this.log(`subscribe to firstname: ${v}`)
    });

    // subscribe to address property changes directly with property suffix $ `address$`.
    this.address$.subscribe({
      next: v => this.log(`subscribe#B to address: ${v['street']} ${v['place']}`)
    });
    this.lastname$.subscribe({
      next: v => this.log(`subscribe to lastname: ${v}`)
    });
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
