import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  api = {
    body: [
      {
        name: 'config', type: `PackageConfigInterface | undefined
        { border?: string; body_font_size?: string; box_shadow?: string; source_font_size?: string; }`,
        description: 'Style some css.'
      },
      { name: 'css', type: 'string', description: 'View code tab **css**.' },
      { name: 'html', type: 'string', description: 'View code tab **html**.' },
      {
        name: 'launch', type: `LaunchInterface | undefined
        { border?: string; body_font_size?: string; box_shadow?: string; source_font_size?: string; }`,
        description: 'Link to another website with example.'
      },
      { name: 'title', type: 'string', description: 'Title of example.' },
      { name: 'ts', type: 'string', description: 'View code tab **ts**.' }
    ],
    description: 'All @input()',
    header: [
      'Name', 'Type', 'Description'
    ],
    title: '@ngx-docs/example properties'
  };
  sidenavMode: 'side';
  title = '@ngx-docs/example package.';
  launch = {
    location: 'https://plnkr.co/edit/?p=preview',
    tooltip: `Edit in plunker`
  };
  html = `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Company (disabled)" disabled value="Google">
  </mat-form-field>

  <table class="example-full-width" cellspacing="0"><tr>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="First name">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="Long Last Name That Will Be Truncated">
    </mat-form-field></td>
  </tr></table>

  <p>
    <mat-form-field class="example-full-width">
      <textarea matInput placeholder="Address">1600 Amphitheatre Pkwy</textarea>
    </mat-form-field>
    <mat-form-field class="example-full-width">
      <textarea matInput placeholder="Address 2"></textarea>
    </mat-form-field>
  </p>

  <table class="example-full-width" cellspacing="0"><tr>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="City">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="State">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput #postalCode maxlength="5" placeholder="Postal Code" value="94043">
      <mat-hint align="end">{{postalCode.value.length}} / 5</mat-hint>
    </mat-form-field></td>
  </tr></table>
</form>
  `;
  ts = `
import {Component} from '@angular/core';

/**
 * @title Inputs in a form
 */
@Component({
  selector: 'input-form-example',
  templateUrl: 'input-form-example.html',
  styleUrls: ['input-form-example.css'],
})
export class InputFormExample {}
  `;
  css = `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
  `;

  form: FormGroup;
  formComponent: FormGroup;
  payload: string;

  config = {
    border: '1px solid #d72000',
    body_font_size: '0.875em',
    box_shadow: '0 0 15px #bfbfbf',
    source_font_size: '0.875em'
  };

  sizeTypes = ['em', 'px', 'rem'];

  /**
   * Creates an instance of AppComponent.
   * @param {FormBuilder} formBuilder
   * @memberof AppComponent
   */
  constructor(public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstname: 'Ścibor',
      lastname: 'Rudnicki',
      address: 'Głuszyna',
      address2: '253',
      city: 'Poznań',
      postalCode: '61-329'
    });

    this.formComponent = formBuilder.group({
      // config
      config: formBuilder.group({
        border: this.config.border,
        body_font_size: this.config.body_font_size,
        box_shadow: this.config.box_shadow,
        source_font_size: this.config.source_font_size
      }),

      selected: formBuilder.group({
        body_font_size: '0.875',
        body_font_size_in: 'em',

        source_font_size: '0.875',
        source_font_size_in: 'em'
      }),

      // rest
      css: this.css,
      html: this.html,
      launch: formBuilder.group({
        location: this.launch.location,
        tooltip: this.launch.tooltip
      }),
      title: this.title,
      ts: this.ts
    });
  }

  /**
   * @param {any} e
   * @param {any} sidenav
   * @memberof AppComponent
   */
  cancel(e, sidenav): void {
    e.preventDefault();
    sidenav.close();
  }

  /**
   * @param {any} form
   * @returns {boolean} false
   * @memberof AppComponent
   */
  submit(form): boolean {
    this.payload = JSON.stringify(form.value);
    console.log(this.payload);
    return false;
  }

  /**
   * @param {any} form
   * @returns {boolean} false
   * @memberof AppComponent
   */
  submitComponent(form): boolean {
    console.log(JSON.stringify(form.value));
    console.log(form.value);

    for (const key in form.value) {
      if (key) {
        this[key] = form.value[key];
        if (key === 'config') {
          this[key] = Object.assign({}, this[key], {
            body_font_size: `${form.value.selected.body_font_size}${form.value.selected.body_font_size_in}`,
            source_font_size: `${form.value.selected.source_font_size}${form.value.selected.source_font_size_in}`
          });
        }
      }
    };
    return false;
  }
}
