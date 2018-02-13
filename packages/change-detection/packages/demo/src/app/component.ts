// external
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ApChangeDetection } from '@angular-package/change-detection';
import { ApChangeDetectorAClass } from '@angular-package/change-detection/change-detector';
import { ApPropertiesInterface } from '@angular-package/change-detection/interface';

// internal
import { AddressInterface } from './interface';

@Component({
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-changedetection-component',
  templateUrl: './component.html',
  styleUrls: [ 'component.scss' ]
})
@ApChangeDetection<ChangeDetectionComponent>({
  name: false,
  surname: true
})
export class ChangeDetectionComponent implements ApChangeDetectorAClass {

  public _detection = false; // <--- Required.
  public _properties: ApPropertiesInterface; // --- Not required.

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

  constructor(public changeDetectorRef: ChangeDetectorRef) { }

  update($event) {
    this._properties = this._properties;
    console.log(`update`, $event, this);
  }
}
