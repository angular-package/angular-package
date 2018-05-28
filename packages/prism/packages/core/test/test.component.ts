import { AfterViewInit, Component, OnInit, ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';

import { ApPrismProperties } from '../src/prism.class';
import { CallbackType } from '../../rxjs/src/prism.type';
import { ApPrismTemplate } from '../interface';
import { ApPrismComponent } from '../../core';
import { ApObject } from '../interface/src/object.interface';

@Component({
  templateUrl: `./test.component.html`
})
export class TestComponent implements AfterViewInit, OnInit {

  @ViewChildren(ApPrismComponent) prismComponent: QueryList<ApPrismComponent>;

  attribute: ApPrismTemplate<ApObject<string>> = {
    pre: {
      'pre-data-attr': '1',
      'pre-data-attr-1': '2',
      'pre-data-attr-2': '3',
    },
    code: {
      'code-data-attr': '1',
      'code-data-attr-1': '2',
      'code-data-attr-2': '3',
    }
  };
  className: ApPrismTemplate<string[]> = {
    code: ['code-class1', 'code-class2'],
    pre: ['pre-class1', 'pre-class2']
  };

  code = {
    content: `<p align="center">{{interpolated}}</p>`,
    css: `.myCss { text-align: center; }`,
    html: `<p align="center" style="">My p {{interpolated}}</p>`
  };
  detection = true;
  // hooks
  language = 'html';
  text = 'ng-content-visible';
  interpolated = `<span class="my-class">${this.text}</span>`;
  properties: ApPrismProperties = {
    language: false
  };

  id = {
    'async': false,
    'attribute': false,
    'class': false,
    'code_detection': false,
    'code_properties': false,
    'ng_content': false,
    'code_css': false,
    'code_html': false,
    'code_interpolation': false
  };

  constructor() { }

  callback: CallbackType = (element: Element) => {
    if (element) {
      // console.info(element);
    }
  }

  ngAfterViewInit() {
    this.prismComponent.forEach((item: ApPrismComponent) => {
      if (item) {
        // console.info(item.preElement);
      }
    });
  }

  ngOnInit() {
  }
}
