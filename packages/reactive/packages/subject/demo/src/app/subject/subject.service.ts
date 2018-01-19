import { Injectable } from '@angular/core';
import { ApSubject } from '@angular-package/reactive/subject';
import { Observable } from 'rxjs/Observable';

export interface ServiceInterface {
  age: number;
  firstname: string;
  surname: string;
}

/**
 * @export
 * @class SubjectService
 */
@Injectable()
@ApSubject<ServiceInterface>('service')
// @ApSubject<number>(['serviceNumber', 'serviceNumberNext'])
// @ApSubject<string>(['serviceString', 'serviceStringNext'])
export class SubjectService {
  public ngOnInit: Function; // add ngOnInit with type Function.
  public service: ServiceInterface = {
    age: 27,
    firstname: 'Ścibor',
    surname: 'Rudnicki'
  };
  public service$: Observable<ServiceInterface>;

  /**
   * Creates an instance of SubjectService.
   * @memberof SubjectService
   */
  constructor() {
    console.log(`ngOnInit()`);
    // this.ngOnInit(); // call ngOnInit in constructor.
  }
}
