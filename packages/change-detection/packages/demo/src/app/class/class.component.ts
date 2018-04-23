import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { ApChangeDetectorClass } from '@angular-package/change-detection/change-detector';

@Component({
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  changeDetector: ApChangeDetectorClass<ClassComponent>;

  firstname = 'Firstname';
  surname = 'Surname';
  age = 27;

  constructor(public c: ChangeDetectorRef) {
    this.changeDetector = new ApChangeDetectorClass<ClassComponent>(this, {
      firstname: true,
      surname: false,
      age: false
    });
    // this.changeDetector.detection = false;
    // this.changeDetector.setDetection(this);
  }
  detect() {
    this.changeDetector.detect(this);
  }

  ngOnInit() {
    console.log(this);
  }

  update($event) {
    this.detect();
    console.log($event);
  }
}
