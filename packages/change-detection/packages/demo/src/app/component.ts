// external
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

// @angular-package
import { ApChangeDetection } from '@angular-package/change-detection';
import { ApChangeDetectorClass } from '@angular-package/change-detection/change-detector';
import { ApChangeDetector, ApChangeDetectionProperties } from '@angular-package/change-detection/interface';

// internal
import { AddressInterface } from './interface';
import { PROPERTIES } from './properties';
import { OPTIONS } from './options';

@Component({
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-changedetection-component',
  templateUrl: './component.html',
  styleUrls: [ 'component.scss' ]
})
@ApChangeDetection<ChangeDetectionComponent>(PROPERTIES, OPTIONS)
export
  class ChangeDetectionComponent
  implements ApChangeDetector<ChangeDetectionComponent> {

  // Whether change detection is active or not. If false, change detection status is set to `Detached`.
  // If true, change detection status is set to `CheckOnce` because of OnPush.
  public detection = false; // <--- Required, initialize detection with specified value true or false.
  public changeDetector: ApChangeDetectorClass<ChangeDetectionComponent>; // ChangeDetector instance.
  public _properties: ApChangeDetectionProperties; // --- Not required. Properties that will be detected when true.

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

  constructor(public c: ChangeDetectorRef) { }

  update($event) {
    this._detect();
  }
}
