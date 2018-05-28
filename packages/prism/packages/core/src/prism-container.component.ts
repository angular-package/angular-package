// external
import { Component, OnInit } from '@angular/core';

// internal
import { PrismInputClass } from './prism-input.class';

/**
 * @export
 * @class PrismContainerComponent
 * @extends {PrismInputClass}
 * @implements {OnInit}
 */
@Component({
  selector: 'ap-prism-container',
  templateUrl: './prism-container.component.html'
})
export
  class PrismContainerComponent
  extends PrismInputClass
  implements OnInit {

  ngOnInit(): void {
    // console.info(this);
  }
}
