// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// internal
import { DynamicComponent } from './dynamic.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DynamicComponent
  ],
  entryComponents: [DynamicComponent]
})
export class TestModule { }
