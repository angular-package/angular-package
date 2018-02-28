import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader-class',
  templateUrl: './loader-class.component.html',
  styleUrls: ['./loader-class.component.css']
})
export class LoaderClassComponent implements OnInit {

  @Input() public age: number;
  @Input() public name: string;
  @Input() public height: number;
  @Input() public surname: string;
  @Input() public weight: number;

  constructor() { }

  ngOnInit() {
  }

}
