import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe-holder',
  templateUrl: './subscribe-holder.component.html'
})
export class SubscribeHolderComponent implements OnDestroy, OnInit {
  inputPropSG = 'Lorem ipsum InputPropSG';
  inputProp = 5333;

  constructor() { }

  ngOnInit() {
    console.log(`ngOnInit from Component`);
  }
  ngOnDestroy() {
    console.log(`ngOnDestroy from Component`);

  }
  update(input: any) {
    this[input['name']] = input['value'];
  }
}
