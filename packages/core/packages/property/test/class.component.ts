// external
import { Component, OnInit } from '@angular/core';

// internal
import { PropertyClass } from '../src';
import { TargetClass } from './target.class';

@Component({
  selector: 'ap-core-test',
  template: ``
})
export class PropertyClassComponent implements OnInit {

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

  target: { firstname: string, surname: string} = {
    firstname: undefined,
    surname: undefined
  };
  targetObject = new TargetClass('Initial firstname', 'Initial surname');

  constructor() { }

  ngOnInit(): void { }
}
