import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApPrismModule } from './../../src/core/prism.module';
import { TestComponent } from './test.component';

export const declarations = [
  TestComponent
];
export const imports = [
  CommonModule,
  ApPrismModule
];

@NgModule({
  declarations,
  imports
})
export class TestModule { }
