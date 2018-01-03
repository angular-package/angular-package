import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subscribe } from '@angular-package/reactive/decorator';

@Component({
  selector: 'app-subscribe-component',
  templateUrl: './subscribe.component.html'
})
@Subscribe<string>(['prop', 'inputPropSG'])
@Subscribe<number>(['inputProp'])
export class SubscribeComponent implements OnDestroy, OnInit {

  prop = 'Because it is';
  @Input('inputProp') inputProp: number;

  _inputPropSG: string;
  @Input('inputPropSG') set inputPropSG(value: string) {
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

  constructor() { }

  ngOnDestroy() {
    console.log(this);
  }

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
  }

  update(input: any) {
    this[input['name']] = input['value'];
  }
}
