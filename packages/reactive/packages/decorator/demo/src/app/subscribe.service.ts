import { Injectable } from '@angular/core';
import { Subscribe } from '@angular-package/reactive/decorator/subscribe';
import { Observable } from 'rxjs/Observable';

export interface ServiceInterface {
  age: number;
  firstname: string;
  surname: string;
}

/**
 * @export
 * @class SubscribeService
 */
@Injectable()
@Subscribe<ServiceInterface>(['service', 'serviceNext'])
@Subscribe<number>(['serviceNumber', 'serviceNumberNext'])
@Subscribe<string>(['serviceString', 'serviceStringNext'])
export class SubscribeService {
  public ngOnInit: Function; // add ngOnInit with type Function.
  public service: ServiceInterface = {
    age: 27,
    firstname: 'Ścibor',
    surname: 'Rudnicki'
  };
  public service$: Observable<ServiceInterface>;

  /**
   * Creates an instance of SubscribeService.
   * @memberof SubscribeService
   */
  constructor() {
    console.log(`ngOnInit()`);
    this.ngOnInit(); // call ngOnInit in constructor.
  }
}
