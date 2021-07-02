// external
import { Component, ChangeDetectionStrategy, Input, OnInit, ViewEncapsulation } from '@angular/core';

// internal
import { DocsApiInterface } from './docs-api.interface'; // import typescript interface

/**
 * @export
 * @class DocsApiComponent
 * @implements {OnInit}
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-docs-api',
  templateUrl: './docs-api.component.html'
})
export class DocsApiComponent implements OnInit {

  @Input('body') body: Array<DocsApiInterface>;
  @Input('description') description: string;
  @Input('header') header: Array<string>;
  @Input('title') title: string;

  constructor() {}

  ngOnInit() { }
}
