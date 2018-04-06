// external
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ApChangeDetection } from '@angular-package/change-detection';
import { ApChangeDetectorAClass, ApChangeDetectorClass } from '@angular-package/change-detection/change-detector';
import {
  ApChangeDetector,
  ApChangeDetectionProperties
} from '@angular-package/change-detection/interface';

// internal
import { AddressInterface } from './interface';
import { PROPERTIES } from './properties';
import { CONFIG } from './config';

@Component({
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-changedetection-component',
  templateUrl: './component.html',
  styleUrls: [ 'component.scss' ]
})
@ApChangeDetection<ChangeDetectionComponent>(PROPERTIES, CONFIG)
export
  class ChangeDetectionComponent
  implements ApChangeDetector<ChangeDetectionComponent> {

  public detection = false; // <--- Required.
  public changeDetector: ApChangeDetectorClass<ChangeDetectionComponent>;
  public properties: ApChangeDetectionProperties; // --- Not required.

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

  public _detach(): void { }
  public _detect(): void { }
  public _reattach(): void { }

  constructor(public c: ChangeDetectorRef) {
    console.log(this);
  }

  update($event) {
    this._detect();
  }
}
