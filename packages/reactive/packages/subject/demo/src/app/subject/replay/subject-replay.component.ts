import { Component } from '@angular/core';

// @angular-package
import { ApSubjectReplay } from '@angular-package/reactive/subject/replay';
import { ApCompleteType, ApSubjectInterface, ApSubscribeType } from '@angular-package/reactive/subject';

@Component({
  selector: 'app-subject-replay',
  styleUrls: ['./subject-replay.component.scss'],
  templateUrl: './subject-replay.component.html'
})
@ApSubjectReplay<number>(5, 500, 'age', 'homeNumber')
@ApSubjectReplay<string>(5, 1000, 'firstname', 'lastname')
export class SubjectReplayComponent implements ApSubjectInterface {

  complete: ApCompleteType;
  subscribe: ApSubscribeType;

  age: number;
  homeNumber: number;
  firstname: string;

  constructor() {

    this.age = 1;
    this.age = 2;
    this.age = 3;
    this.age = 4;
    this.age = 5;
    this.age = 6;

    this.subscribe<number>('age', {
      next: (v: number) => console.log(v)
    });
  }
}
