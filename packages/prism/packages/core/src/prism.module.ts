// @angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// internal
import { ApPrismComponent } from './prism.component';
// import { PrismContainerComponent } from './prism-container.component';

// common
const COMMON_DECLARATIONS_EXPORTS = [ 
  ApPrismComponent,
  // PrismContainerComponent
];

/**
 * Angular Module for Prism
 * @export
 * @class PrismModule
 */
@NgModule({
  declarations: COMMON_DECLARATIONS_EXPORTS,
  // entryComponents: [ PrismContainerComponent ],
  exports: COMMON_DECLARATIONS_EXPORTS,
  imports: [ CommonModule ]
})
export class ApPrismModule { }
