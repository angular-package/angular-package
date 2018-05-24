// app.component.html
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  language = 'html';                          // <----- Add property with language.
  content = '<p>test {{language}}</p>';       // <----- HTML content to be highlighted by prism.
  interpolate = {
    language: this.language                   // <----- Interpolate property `language` in `content`.
  };
}
