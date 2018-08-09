import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// internal
import { PropertyClassComponent } from './class.component';
import { PropertyDecoratorComponent } from './decorator.component';
import { PropertyServiceComponent } from './service.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PropertyClassComponent,
    PropertyDecoratorComponent,
    PropertyServiceComponent
  ]
})
export class TestModule { }
