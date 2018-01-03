import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

// internal
import { DocsApiInputType } from './../docs-api.type';
import { DocsApiHoodClass } from './../docs-api-hood.class';
// import { DocsApiKey } from './'

/**
 * @export
 * @class DocsApiFormComponent
 * @implements {OnInit}
 */
@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-docs-api-form',
  templateUrl: './docs-api-form.component.html'
})
export class DocsApiFormComponent extends DocsApiHoodClass implements OnInit {

  @Input('api') public api: DocsApiInputType = {};
  /*
{
    Directives: [
      { name: '', selector: '', exportedAs: '' }
    ]
  }
  */
  @Input('description') public description: string;
  @Input('import') public import: string;
  @Input('title') public title: string;

  @Output('submitted') public submitted: EventEmitter<any> = new EventEmitter();

  public apiControls: FormArray;
  public form: FormGroup;
  public payLoad: string;
  public types: Array<{ id: string, name: string }> = [];

  items: any;

  constructor(public formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    /*
    this.form = this.formBuilder.group({
      api: this.formBuilder.group({
        name: '',
        selector: '',
        exportedAs: '',
        type: ''
      }),
      description: this.description,
      import: this.import,
      title: this.title
    });

    console.log(this.form);
    */

    this.form = this.formBuilder.group({
      api: this.formBuilder.group(this.buildApiKey(this.api)),
      description: this.description,
      import: this.import,
      title: this.title,
      types: this.formBuilder.array(this.buildTypes())
    });
  }

  buildTypes() {
    const b = [];
    this.types.push({
      id: '', name: ''
    });
    this.types.forEach(element => {
      b.push(this.formBuilder.group(element));
    });
    return b;
  }

  buildApiKey(api: any): any {
    const build = {};
    const buildTypes = [];
    if (api instanceof Object) {
      this.objectKeys(api)
        .forEach((type, typeIndex) => {
          api[type].forEach(element => {
            buildTypes.push(this.formBuilder.group(element));
          });
          build[type] = this.formBuilder.array(buildTypes)
        });
      return build;
    }
  }

  buildApiKeyOld(api: any): Array<any> {
    let test = {};
    let build: Array<any> = [];
    let buildTypes = [];
    if (api instanceof Array) {
      // We are looping api Array. Every item as `types` is an object with unknown key string for example: Directives, Components.
      api.forEach((types, index) => {
        // We are getting this keys by using `objectKeys()` method on every object with api types from array.
        this.objectKeys(types)
          // Next, we are looping types object with already found keys.
          .forEach((type, typeIndex) => {
            // Now, we are looping types with type key to set methods, classes, components, directives.
            if (types[type] instanceof Array) {
              types[type].map((v, i) => {
                buildTypes.push(this.formBuilder.group(v));
              });
              buildTypes.push(this.formBuilder.group({
                name: '',
                selector: '',
                exportedAs: ''
              }));
              test[type] = this.formBuilder.array(buildTypes);
            }
          });
        if (test) {
          build.push(this.formBuilder.group(test));
        }
      });
      console.log(`build`, build);
      return build;
    }
  }

  addItem(form): void {
    this.items = this.form.get('types') as FormArray;
    this.items.push(this.formBuilder.group({
      id: '',
      name: ''
    }));

    form.value.types

    /*

    */
    console.log(this.items);
  }

  createItem() {

  }

  submit(form): boolean {
    console.log(form.value);
    this.addItem(form);
    this.form.updateValueAndValidity();
    /*
    this.payLoad = JSON.stringify(form.value);
    let t = {};
    t['api'] = {
      [form.value.api.type]: [form.value.api]
    };
    console.log(form.value);
    this.submitted.emit(Object.assign({}, form.value , t));
    */
    return false;
  }
}
