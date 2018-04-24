// external
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Type, OnInit } from '@angular/core';
import { ApChangeDetectorClass } from '../';
import { ApChangeDetector, ApChangeDetectionProperties } from '../../interface';

@Component({
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="firstname">{{firstname}}</div>
    <div class="surname">{{surname}}</div>
    <div class="age">{{age}}</div>
  `
})
export class ClassTestComponent {
  public changeDetector: ApChangeDetectorClass<ClassTestComponent>;
  public firstname = 'Martin';
  public surname = 'Greg';
  public age = 27;

  set detection(detection: boolean) {
    this.changeDetector.detection = detection;
    this.changeDetector.setDetection(this);
  }
  get detection(): boolean {
    return this.changeDetector.detection;
  }

  set properties(properties: any) {
    this.changeDetector.properties = properties;
    this.changeDetector.detectToSetter(this);
  }
  get properties(): any {
    return this.changeDetector.properties;
  }

  constructor(public c: ChangeDetectorRef) {
    this.changeDetector = new ApChangeDetectorClass<ClassTestComponent>(this) as ApChangeDetectorClass<ClassTestComponent>;
    this.detection = false;
  }
}
