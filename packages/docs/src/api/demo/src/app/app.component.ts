import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  api: any;
  description: string;
  import: string;
  title: string;

  submit(form) {
    console.log(`submitted`, form);
    for (const key in form) {
      if (form.hasOwnProperty(key)) {
        const element = form[key];
        this[key] = element;
      }
    }
    return false;
  }
}
