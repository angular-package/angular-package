import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html'
})
export class TestComponent {
  config = { box_shadow: '0 0 15px #bfbfbf', border: '1px solid #d72000' };
  title = 'Inputs in a form';
  launch = { location: 'https://plnkr.co/edit/?p=preview', tooltip: `Edit in plunker` };
  html = `html`;
  ts = `ts`;
  css = `css`;

  form: FormGroup;
  payload: string;
}
