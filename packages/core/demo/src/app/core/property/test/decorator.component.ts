// external
import { Component, OnInit } from '@angular/core';
// internal
import { BindProperty } from '../bind';
import { TestService } from './service';

@Component({
  selector: 'ap-core-test',
  template: ``,
  providers: [
    TestService
  ]
})
@BindProperty(['firstname', 'surname' ], 'testService')
export class PropertyDecoratorComponent implements OnInit {

  checker = false;
  checker_true = true;
  checker_false = false;

  firstname = 'my firstname';
  surname = 'my surname';

  data = {
    firstname: 'my firstname',
    surname: 'my surname',
    age: 27
  };

  _age: number;
  _setAge: number = undefined;
  set age(age: number) {
    this._age = age;
    this._setAge = age;
  }
  get age(): number {
    return this._age;
  }

  constructor(public testService: TestService) {
    this.age = 27;
  }

  ngOnInit(): void { }
}
