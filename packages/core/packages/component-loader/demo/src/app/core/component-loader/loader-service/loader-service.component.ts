import { Component, OnInit, Input, ChangeDetectorRef, Type } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

import { ComponentLoaderService, ComponentLoader } from '@angular-package/core/component-loader';
import { ComponentLoaderCommonInterface } from '@angular-package/core/component-loader/interface';

@Component({
  selector: 'app-loader-service',
  templateUrl: './loader-service.component.html',
  styleUrls: ['./loader-service.component.css'],
  providers: [
    ComponentLoaderService
  ]
})
export class LoaderServiceComponent implements OnInit {

  // __component: any;
  // __componentPropertyName: string;
  // __properties: string[];

  __create?: () => this;
  __destroy?: () => any;

  // __assign: (p: string | Array<string>, prefix: any, suffix: any, source: any) => void;
  // __create: () => ComponentLoaderService<DynamicComponent>;
  // __destroy: () => void;
  // __get: <N>(property: string) => N | undefined;
  // __subscribe: (property: string, ...args: any[]) => void;

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
      this.componentLoaderService.__set('weight', this._weight);
    }
  }
  get weight(): number {
    if (this.componentLoaderService) {
      return this.componentLoaderService.__get<number>('weight') || this._weight;
    }
  }

  constructor(public componentLoaderService: ComponentLoaderService<DynamicComponent>) { }

  create() {
    this.componentLoaderService.init({
      component: DynamicComponent,
      componentPropertyName: '__component_',
      container: '.container',
      prefix: '_',
      properties: [
        'name',
        'height',
        'weight',
        'surname'
      ],
      suffix: '_'
    }, this);
    this.componentLoaderService.__subscribe(
      'confirm', (v) => console.log('SUCCESS', v), () => console.log('ERROR'), () => console.log('COMPLETED'));
  }

  confirm() {
    this['emit'] = 'Emit and get';
  }

  destroy() {
    this.componentLoaderService.__destroy();
  }

  ngOnInit() {
  }
}
