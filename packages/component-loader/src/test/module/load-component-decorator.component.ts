// @angular/core
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';
// Dynamic component to load of `DynamicComponent` type.
import { DynamicComponent } from './dynamic.component';
// Service.
import { ComponentLoaderService } from '../../lib/component-loader.service';
// Decorator.
import { LoadComponent } from '../../load-component';
/**
 * Use decorator to load dynamic component.
 */
@LoadComponent(DynamicComponent)
@Component({
  template: '<div #newContainer></div>',
  providers: [ComponentLoaderService],
})
export class LoadComponentDecoratorComponent implements AfterViewInit, OnInit {
  @ViewChild('newContainer', { read: ViewContainerRef }) container: any;

  constructor(
    public componentLoaderService: ComponentLoaderService<DynamicComponent>
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {}
}
