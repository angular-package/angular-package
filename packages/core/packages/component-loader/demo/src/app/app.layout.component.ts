import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './app.layout.component.html',
  styleUrls: ['./app.layout.component.scss']
})
export class AppLayoutComponent {
  @Input() title = 'Demonstration';
  @Input() github = 'https://github.com/angular-package/angular-package/tree/master/packages/core';

  location(url = this.github) {
    window.location.href = url;
  }
}
