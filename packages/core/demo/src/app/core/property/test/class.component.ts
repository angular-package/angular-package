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

  // target = new TargetClass();
  target: { firstname: string, surname: string} = {
    firstname: undefined,
    surname: undefined
  };
  targetObject = new TargetClass('Initial firstname', 'Initial surname');

  constructor() {
    /*
    this.propertyClass.bind(this, 'firstname', 'target');
    this.firstname = 'new firstname';
    console.log(this.firstname, this.target.firstname);

    this.propertyClass.clear(this, 'firstname');
    this.firstname = 'cleared firstname';
    console.log(this.firstname, this.target.firstname);

    this.propertyClass.bind<PropertyClassComponent, Object>(this, ['firstname'], this.target);
    this.propertyClass.wrap(this, ['surname']);

    this.age = 27;
    this.surname = 'bbbb';
    */
  }

  ngOnInit(): void { }
}
