import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  github;
  title = '@angular-package/core';

  age = 37;
  name = 'Ścibor';
  surname = 'Rudnicki';
  height = 172;
  weight = 77;
}
