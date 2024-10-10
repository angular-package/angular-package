import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponent } from './dynamic.component';
import { ComponentLoaderClassComponent } from './component-loader-class.component';
import { ComponentLoaderDecoratorComponent } from './component-loader-decorator.component';
import { ComponentLoaderServiceComponent } from './component-loader-service.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DynamicComponent,
    ComponentLoaderClassComponent,
    ComponentLoaderDecoratorComponent,
    ComponentLoaderServiceComponent
  ],
  entryComponents: [DynamicComponent]
})
export class TestModule { }
