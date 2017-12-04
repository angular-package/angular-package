import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponent } from './dynamic.component';
import { TestComponent } from './test.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DynamicComponent, TestComponent],
  entryComponents: [DynamicComponent]
})
export class TestModule { }
