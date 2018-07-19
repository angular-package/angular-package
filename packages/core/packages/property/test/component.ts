import { Component, OnInit } from '@angular/core';

import { PropertyClass } from '../src';
import { TargetClass } from './target.class';

@Component({
  template: ``
})
export class TestPropertyComponent implements OnInit {

  propertyClass: PropertyClass = new PropertyClass();
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

  _age = 27;
  set age(age: number) {
    this._age = age;
  }
  get age(): number {
    return this._age;
  }

  target = new TargetClass();

  constructor() {}

  ngOnInit(): void { }
}
