import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ap-core-test-component',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  firstname = 'Eve';
  surname = 'Eve';
  age = 127;
  active = false;
  removed = true;
  additional = null;
  additional_information = null;
  place = undefined;

  observable$: Observable<number>;
 
  data: {
    firstname: string,
    surname: string,
    age: number,
    active: boolean
  };

  componentNull = null;
  componentUndefined = undefined;
  componentContain = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;

  constructor() {
    this.data = {
      firstname: this.firstname,
      surname: this.surname,
      age: this.age,
      active: this.active
    };
  }

  setFirstname(value: string): void {
    this.firstname = value;
  }

  ngOnInit(): void { }
}
