import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApPrismRxjsModule } from './../../src/rxjs/prism.module';
import { TestComponent } from './test.component';

export const declarations = [
  TestComponent
];
export const imports = [
  CommonModule,
  ApPrismRxjsModule
];

@NgModule({
  declarations,
  imports
})
export class TestModule { }
