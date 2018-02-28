import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponent } from './dynamic.component';
import { ComponentLoaderComponent } from './component-loader.component';
import { LoaderTestComponent } from './loader-decorator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DynamicComponent,
    ComponentLoaderComponent,
    LoaderTestComponent
  ],
  entryComponents: [DynamicComponent]
})
export class TestModule { }
