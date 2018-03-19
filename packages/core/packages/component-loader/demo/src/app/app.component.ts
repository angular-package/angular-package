import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  age = 37;
  name = 'Ścibor';
  surname = 'Rudnicki';
  height = 172;
  weight = 77;
}
