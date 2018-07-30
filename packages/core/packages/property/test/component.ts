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

  _age: number;
  _setAge: number = undefined;
  set age(age: number) {
    this._age = age;
    this._setAge = age;
  }
  get age(): number {
    return this._age;
  }

  target = new TargetClass();
  targetObject = new TargetClass('Initial firstname', 'Initial surname');

  constructor() {
    this.age = 27;
  }

  ngOnInit(): void { }
}
