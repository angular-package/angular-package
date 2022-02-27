import {
  Component,
  OnInit,
  AfterViewInit,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';

import { DynamicComponent } from './dynamic.component';
import { ComponentLoaderService } from '../../lib/component-loader.service';

@Component({
  template: '<div #newContainer></div>',
  providers: [ComponentLoaderService],
})
export class ComponentLoaderServiceComponent implements AfterViewInit, OnInit {
  @ViewChild('newContainer', { read: ViewContainerRef }) container: any;

  age = 127;

  constructor(
    public componentLoaderService: ComponentLoaderService<DynamicComponent>
  ) {}

  /**
   *
   */
  ngAfterViewInit(): void {
    this.componentLoaderService
      .pickViewContainer(this)
      .createComponent(DynamicComponent);
  }

  ngOnInit(): void {}
}
