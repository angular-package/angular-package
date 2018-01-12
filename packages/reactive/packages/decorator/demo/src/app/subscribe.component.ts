import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subscribe } from '@angular-package/reactive/decorator/subscribe';
import { Unsubscribe } from '@angular-package/reactive/decorator/unsubscribe';
import { SubscribeService, ServiceInterface } from './subscribe.service';

/**
 * @export
 * @class SubscribeComponent
 * @implements {AfterViewInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-subscribe-component',
  templateUrl: './subscribe.component.html'
})
@Subscribe<string>(['prop', 'inputPropSG'])
@Subscribe<number>(['inputProp'])
@Unsubscribe([
  'service',
  'serviceNext',
  'serviceNumber',
  'serviceNumberNext',
  'serviceString',
  'serviceStringNext'
])
export class SubscribeComponent implements AfterViewInit, OnDestroy, OnInit {

  set service(value: ServiceInterface) {
    this.subscribeService.service = value;
  }
  get service(): ServiceInterface {
    return this.subscribeService.service;
  }

  // just string component property.
  prop = 'Because it is';

  // input number property
  @Input('inputProp') inputProp: number;

  _inputPropSG: string;
  @Input('inputPropSG')
  set inputPropSG(value: string) {
    this._inputPropSG = value;
  }
  get inputPropSG(): string {
    return this._inputPropSG;
  }

  /**
   * Observable instance to subscribe.
   * @type {Observable<string>}
   * @memberof SubscribeComponent
   */
  public prop$: Observable<string>;
  public inputPropSG$: Observable<string>;

  /**
   *
   * @type {Observable<number>}
   * @memberof SubscribeComponent
   */
  public inputProp$: Observable<number>;

  /**
   * Subscription instance of observable.
   * @type {Subscription}
   * @memberof SubscribeComponent
   */
  public prop$$$: Subscription;
  public inputProp$$$: Subscription;
  public inputPropSG$$$: Subscription;
  public service$$$: Subscription;

  constructor(public subscribeService: SubscribeService) {}

  ngOnDestroy() {
    console.log(this);
  }

  ngAfterViewInit() { }

  ngOnInit() {
    this.prop$$$ = this.prop$.subscribe({
      next: (value: string) => {
        console.log(`subscribe['prop']: `, value, this);
      }
    });
    this.inputPropSG$$$ = this.inputPropSG$.subscribe({
      next: (value: string) => {
        console.log(`subscribe['inputPropSG']: `, value, this);
      }
    });
    this.inputProp$$$ = this.inputProp$.subscribe({
      next: (value: number) => {
        console.log(`subscribe['inputProp']: `, value);
      }
    });
    this.service$$$ = this.subscribeService.service$.subscribe({
      next: (value: ServiceInterface) => {
        console.log(`service`, value);
      }
    });
    this.service = {
      age: 33,
      firstname: 'Atomic',
      surname: 'Kitchen'
    };
  }

  update(input: any) {
    this[input['name']] = input['value'];
  }
}
