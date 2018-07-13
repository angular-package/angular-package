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

  observable$: Observable<number>;
 
  data: {
    firstname: string,
    surname: string,
    age: number,
    active: boolean
  };

  constructor() {
    this.data = {
      firstname: this.firstname,
      surname: this.surname,
      age: this.age,
      active: this.active
    };
  }

  ngOnInit(): void { }
}
