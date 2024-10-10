import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ap-core-testmany-component',
  templateUrl: './test.component.html'
})
export class TestManyComponent implements OnInit {
  firstname = 'Martin';
  surname = 'Martin';
  age = 721;
  active = true;
  removed = false;
  additional = 1;
  additional_information = '';
  place = 'Place';

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

  ngOnInit(): void { }
}
