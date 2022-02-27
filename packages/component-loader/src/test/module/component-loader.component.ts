import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { ComponentLoader } from '../../lib/component-loader.class';
import { DynamicComponent } from './dynamic.component';

@Component({
  template: '<div #newContainer></div>',
})
export class ComponentLoaderComponent
  extends ComponentLoader<DynamicComponent>
  implements AfterViewInit
{
  @ViewChild('newContainer', { read: ViewContainerRef }) container: any;

  firstName = '';
  lastName = '';
  age = 27;
  birthDay = 1;
  birthMonth = 2;
  birthYear = 2050;
  happy = false;
  justBirthDay = 555;
  model = {
    defined: true,
  };

  constructor() {
    super();
  }

  public ngAfterViewInit(): void {
    this.createComponent(DynamicComponent, this.container);
  }
}
