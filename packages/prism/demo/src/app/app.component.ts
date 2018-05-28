// app.component.html
import { Component } from '@angular/core';
import { ApPrismTemplate } from '@angular-package/prism/core/interface';  // <----- Import interface to configure code or pre tag.
import { ApObject } from '@angular-package/prism/core/interface/src/object.interface';  // <----- Import interface for objects.

// Import line-numbers prism plugin.
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';  // <----- Import `line-numbers` plugin.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  attribute: ApPrismTemplate<ApObject<string>> = {  // <----- Add `data-start` attribue to `<pre>` tag.
    pre: {
      'data-start': '-5'
    }
  };
  class: ApPrismTemplate<string[]> = {              // <----- `class` property to add class to `<pre`> tag.
    pre: ['line-numbers']
  };
  title = 'app';
  language = 'html';                                // <----- Add property with language.
  content = '<p>test {{language}}</p>';             // <----- HTML content to be highlighted by prism.
  interpolate = {
    language: this.language                         // <----- Interpolate property `language` in `content`.
  };
}
