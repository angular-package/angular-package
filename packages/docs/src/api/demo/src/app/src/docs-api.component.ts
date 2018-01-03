// external
import { Component, ChangeDetectionStrategy, Input, OnInit, ViewEncapsulation } from '@angular/core';

// internal
import { DocsApiInputType } from './docs-api.type';
import { DocsApiHoodClass } from './docs-api-hood.class';

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
export class DocsApiComponent extends DocsApiHoodClass implements OnInit {

  @Input('api') public api: DocsApiInputType;
  @Input('description') public description: string;
  @Input('import') public import: string;
  @Input('title') public title: string;

  constructor() {
    super();
  }

  ngOnInit() { }


  /**
   * @param {Array<any>} array
   * @returns {boolean}
   * @memberof DocsApiComponent
   */
  isArray(array: Array<any>): boolean {
    return Array.isArray(array);
  }
}
