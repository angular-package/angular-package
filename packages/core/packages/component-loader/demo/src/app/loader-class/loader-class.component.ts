import { Component, OnInit, Input, ComponentFactoryResolver, Type } from '@angular/core';
import { ComponentLoaderClass } from '@angular-package/core/component-loader';

// internal
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-loader-class',
  templateUrl: './loader-class.component.html',
  styleUrls: ['./loader-class.component.css']
})
export class LoaderClassComponent extends ComponentLoaderClass<DynamicComponent> implements OnInit {

  __prefix = '_';
  __suffix = '_';

  @Input() public age: number;
  @Input() public name: string;
  @Input() public height: number;
  @Input() public surname: string;
  @Input() public weight: number;

  constructor(public componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }

  ngOnInit() {
    this.componentPropertyName('myComponentName');
  }

  subscribe(property: string, ...args): void {
    this.__subscribe(property, ...args);
  }

  componentPropertyName(name: string): void {
    this.__componentPropertyName = name;
  }

  assign(p: string | string[]): void {
    this.__assign(p, this);
  }

  create() {
    this.__create(DynamicComponent);
    this.__link(['surname', 'age']);
    return this;
  }

  destroy(): void {
    this.__destroy();
  }
}
