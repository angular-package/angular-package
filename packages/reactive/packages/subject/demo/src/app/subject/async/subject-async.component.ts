// external
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// @angular-package
import { ApSubjectAsync } from '@angular-package/reactive/subject/async';

// internal
import { AddressInterface } from '../../address.interface';

@Component({
  selector: 'app-subject-async',
  templateUrl: './subject-async.component.html',
  styleUrls: ['./subject-async.component.scss']
})
@ApSubjectAsync<string>('firstname')
@ApSubjectAsync<number>('age')
export class SubjectAsyncComponent implements OnInit {

  age: any;
  firstname: any;
  lastname: any;
  address: any;

  logs: string[] = [];

  constructor() { }

  ngOnInit() {
    this.initFirstname();
    this.initAge();
  }

  initFirstname() {
    this.firstname = 'First name';
    this.firstname = 'Second name';
    this.firstname = 'Third name';
    this.firstname = 'Last name';
    this.firstname.subscribe({
      next: v => console.log(`firstname:`, v)
    });
    this.firstname.complete();
  }

  initAge() {
    this.age = 1;
    this.age = 2;
    this.age = 3;

    this.age.subscribe({
      next: v => console.log(`age:`, v)
    });

    setTimeout(() => {
      this.age = 27;
      this.age.complete();
    }, 2000);
  }

  log(v) {
    console.log(v);
    this.logs.push(v);
  }
}
