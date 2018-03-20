import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-docsapiform-table',
  templateUrl: './table.component.html'
})
export class DocsApiFormTableComponent implements OnInit {

  @Input('body') public body: Array<any>;
  @Input('header') public header: Array<string> = ['Name', 'Description'];
  @Input('title') public title = 'Properties/Methods';

  public form: FormGroup;
  public formBody: FormGroup;
  public formHeader: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  private buildBody() {
    const build = {};
    if (this.header.length > 0) {
      this.header.forEach((value, index) => {
        if (value) {
          build[value.toLowerCase()] = '';
        }
      });
    }
    return this.formBuilder.group(build);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: this.title
    });
    this.formHeader = this.formBuilder.group({
      header: this.formBuilder.array(this.header)
    });
    this.formBody = this.formBuilder.group({
      body: this.formBuilder.array([
        this.buildBody()
      ])
    });

    const body = this.formBody.get('body') as FormArray;
    this.body = body.value;
  }

  addToHeader(name: string): void {
    const header = this.formHeader.get('header') as FormArray;
    header.push(this.formBuilder.control(name));
  }

  addToBody(bodyRow: any): void {
    const body = this.formBody.get('body') as FormArray;
    body.push(this.formBuilder.control(bodyRow));
  }

  public submit(form: FormGroup, type: string): void {
    let body = this.formBody.get('body') as FormArray;
    if (type === 'header') {
      console.log(form.value, body);

      // this.addToHeader();
      /*
      const header = this.formHeader.get('header') as FormArray;
      this.header = header.value;
      // add more header
      if (form.value.header[form.value.header.length - 1]) {
        header.push(this.formBuilder.control(''));
      }
      */
    }

    if (type === 'body') {
      console.log(form.value);
      // body.push(this.buildBody());
    }
  }
}
