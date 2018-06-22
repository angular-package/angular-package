import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  firstname = 'Eve';
  surname = 'Eve';
  age = 127;
  active = false;
  removed = true;

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
