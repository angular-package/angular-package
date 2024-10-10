import { Component, OnInit } from '@angular/core';

import { BindProperty } from '../core/property';

@Component({
  selector: 'app-bind-property',
  templateUrl: './bind-property.component.html',
  styleUrls: ['./bind-property.component.css']
})
@BindProperty(['firstname'], 'target')
export class BindPropertyComponent implements OnInit {

  firstname = '';

  target = {
    firstname: ''
  };

  constructor() { }

  ngOnInit() {
    this.firstname = 'bind property works!';
    console.log(this);
  }

}
