import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

import { ComponentLoaderService, ComponentLoader } from '@angular-package/core/component-loader';
import { ComponentLoaderServiceInterface } from '@angular-package/core/component-loader/interface';

@Component({
  selector: 'app-loader-service',
  templateUrl: './loader-service.component.html',
  styleUrls: ['./loader-service.component.css'],
  providers: [
    ComponentLoaderService
  ]
})
@ComponentLoader<DynamicComponent>({
  component: DynamicComponent,
  componentPropertyName: '__component_',
  container: '.container',
  sourceProperty: { prefix: `_`, suffix: `_`},
  properties: [
    'emit',
    'height',
    'surname'
  ]
})
export class LoaderServiceComponent implements ComponentLoaderServiceInterface<DynamicComponent>, OnInit {

  _create: Function;
  _destroy: Function;
  _properties: string[];
  _subscribe: any;

  @Input() public age: number;
  @Input() public name: string;
  @Input() public height: number;

  @Input() set surname(value: string) {
    console.log('surname ORIGINAL: ', value);
  }

  public _weight: number;
  @Input()
  set weight(value: number) {
    this._weight = value;
    if (this.componentLoaderService) {
      this.componentLoaderService.set('weight', this._weight);
    }
  }
  get weight(): number {
    if (this.componentLoaderService) {
      return this.componentLoaderService.get<number>('weight');
    }
  }

  constructor(public componentLoaderService: ComponentLoaderService<DynamicComponent>) { }

  create() {
    this._create();
  }


  confirm() {
    this._subscribe('confirm', (v) => console.log('SUCCESS', v), () => console.log('ERROR'), () =>  console.log('COMPLETED'));
    this['emit'] = 'Emit and get';
  }

  destroy() {
    this._destroy();
  }

  ngOnInit() { }
}
