import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  age: number;
  set emit(value: string) {
    if (this.confirm) {
      this.confirm.emit(value);
    }
  }
  name: string;
  surname: string;
  height: number;
  weight: number;

  @Output() public confirm: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}
