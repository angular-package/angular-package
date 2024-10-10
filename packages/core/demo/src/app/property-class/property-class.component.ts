import { Component, OnInit } from '@angular/core';

import { PropertyClass } from '../core/property';
import { Setter, Getter } from '../core/property/type';

@Component({
  selector: 'app-property-class',
  templateUrl: './property-class.component.html',
  styleUrls: ['./property-class.component.css']
})
export class PropertyClassComponent implements OnInit {

  propertyClass: PropertyClass = new PropertyClass();

  age = 27;
  firstname = '';
  surname = 'Surname is defined';
  _street = '';
  set street(value: string) {
    this._street = value;
  }
  get street(): string {
    return this._street;
  }

  target = {
    age: 27,
    firstname: '',
    surname: 'Surname is defined',
    street: ''
  };

  constructor() { }

  ngOnInit() {
    this.bindExample();
    this.unbindExample();

    this.bindWithSetterExample();
    this.unbindWithSetterExample();

    this.wrapExample();
    this.unwrapExample();
  }

  bindExample() {
    this.bind(['firstname', 'surname']);
    console.group(`bind ['firstname', 'surname'] to 'target'`);
    this.firstname = 'property-class works!';
    console.log('set this.firstname = ', '"property-class works!"');
    this.surname = 'also surname';
    console.log('set this.surname = ', '"also surname"');

    console.log(`set this.firstname === "${this.firstname}"`);
    console.log(`get this.surname === "${this.surname}"`);
    console.log(`get this.target.firstname === "${this.target.firstname}"`);
    console.log(`get this.target.surname === "${this.target.surname}"`);
    console.groupEnd();
  }

  bindWithSetterExample() {
    this.bind('street');
    console.group(`bind with Setter 'street' to 'target'`);
    this.street = 'Głuszyna';
    console.log('set this.street = ', '"Głuszyna"');

    console.log(`get this.street === "${this.street}"`);
    console.log(`get this._street === "${this._street}"`);
    console.log(`get this.target.street === "${this.target.street}"`);
    console.groupEnd();
  }


  unbindExample() {
    this.unbind(['surname']);
    console.group(`unbind ['surname'] from 'target'`);
    this.surname = 'surname is no longer binded';
    console.log('set this.surname = ', '"surname is no longer binded"');
    console.log(`get this.surname === "${this.surname}"`);
    console.log(`get this.target.surname === "${this.target.surname}"`);
    console.groupEnd();
  }

  unbindWithSetterExample() {
    this.unbind(['street']);
    console.group(`unbind ['street'] from 'target'`);
    this.street = 'street is no longer binded';
    console.log('set this.street = ', '"street is no longer binded"');
    console.log(`get this.street === "${this.street}"`);
    console.log(`get this._street === "${this._street}"`);
    console.log(`get this.target.street === "${this.target.street}"`);
    console.groupEnd();
  }

  unwrapExample() {
    this.unwrap(['age']);
    console.group('unwrap age');
    this.age = 27;
    console.log('set this.age = ', 27);
    console.log(`get this._age === ${this['_age']}`);
    console.log(`get this.age === ${this.age}`);
    console.groupEnd();
  }

  wrapExample() {
    this.wrap(['age']);
    console.group('wrap age');
    this.age = 15;
    console.log('set this.age = ', 15);
    console.log(`get this._age === ${this['_age']}`);
    console.log(`get this.age === ${this.age}`);
    console.groupEnd();
  }

  private bind(properties: string | Array<string>) {
    this.propertyClass.bind(this, properties, this.target);
  }

  private wrap(properties: string | Array<string>, setter?: Setter<this>, getter?: Getter<this>) {
    this.propertyClass.wrap(this, properties, setter, getter);
  }

  private unbind(properties: string | Array<string>) {
    this.propertyClass.unbind(this, properties);
  }

  private unwrap(properties: string | Array<string>) {
    this.propertyClass.unwrap(this, properties);
  }
}
