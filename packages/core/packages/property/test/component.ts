import { Component, OnInit } from '@angular/core';

import { PropertyService } from '../src';
import { TargetClass } from './target.class';
import { PropertyProvider } from '../src/property.provider';

@Component({
  selector: 'ap-core-test',
  template: ``,
  providers: [
    PropertyProvider('___', '___')
  ]
})
export class TestPropertyComponent implements OnInit {

  // propertyClass: PropertyService = new PropertyService();
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

  constructor(public propertyService: PropertyService) {
    this.age = 27;
  }

  ngOnInit(): void { }
}
