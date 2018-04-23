// external
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Type, OnInit, ViewContainerRef } from '@angular/core';
import { ApChangeDetector, ApChangeDetectionProperties, ApChangeDetectionOptions } from '../interface';
import { ApChangeDetection } from '..';

const PROPERTIES: ApChangeDetectionProperties = {
  surname: true
};

const OPTIONS: ApChangeDetectionOptions = {
  detach: '_detach'
};

@Component({
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="firstname">{{firstname}}</div>
    <div class="surname">{{surname}}</div>
    <div class="age">{{age}}</div>
  `
})
@ApChangeDetection(PROPERTIES, OPTIONS)
export class DecoratorTestComponent implements ApChangeDetector<DecoratorTestComponent> {
  // Crucial proprety.
  detection = false;
  _properties: ApChangeDetectionProperties;

  public firstname = 'Martin';
  public surname = 'Greg';
  public age = 27;

  constructor(public c: ChangeDetectorRef) { }

  _detach() { }
  _detect() { }
  _reattach() { }
}
