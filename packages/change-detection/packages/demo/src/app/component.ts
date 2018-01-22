// external
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ChangeDetection } from '@angular-package/change-detection/decorator';

// internal
import { AddressInterface } from './interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-changedetection-component',
  templateUrl: './component.html',
  styleUrls: [ 'component.scss' ]
})
@ChangeDetection(false, {
  name: true,
  surname: false
})
export class ChangeDetectionComponent implements OnInit, AfterContentInit {

  __detection: boolean;
  __properties: any;

  public _address: AddressInterface;
  @Input('address')
  set address(address: AddressInterface) {
    this._address = address;
  }
  get address(): AddressInterface {
    return this._address;
  }

  _name: string;
  @Input('name')
  set name(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }

  @Input('surname') surname;

  constructor(public changeDetector: ChangeDetectorRef) { }

  ngOnInit() { }
  ngAfterContentInit() { }
  update($event) {
    this.__properties = this.__properties;
    console.log(`update`, $event, this);
  }
}
