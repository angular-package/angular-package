import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-docsapiform-types',
  templateUrl: './types.component.html'
})
export class DocsApiFormTypesComponent implements OnInit {
  public form: FormGroup;

  @Input('types') public types: Array<string> = [];

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({ name: '' });
  }

  submit(form: FormGroup): void {
    this.types.push(form.value.name);
  }
}
