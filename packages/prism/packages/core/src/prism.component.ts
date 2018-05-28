// external
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';

// @angular-package
import { ApChangeDetection } from '@angular-package/change-detection';
import {
  // ComponentLoader,
  ComponentLoaderService
} from '@angular-package/core/component-loader';
import { ApAttributeHandlerService } from '../../src/attribute-handler.service';
import { ApClassnameHandlerService } from '../../src/classname-handler.service';
import { ApLinkProperyWithService } from '../../src/property.decorator';

// internal
import { PROPERTIES_CHANGE_DETECTION } from './properties.change-detection';
import { PROPERTIES_LINK } from './properties.link';
import { PrismClass } from './prism.class';
import { PrismService } from './prism.service';
// import { PrismContainerComponent } from './prism-container.component';

/**
 * @export
 * @class ApPrismComponent
 * @extends {PrismClass}
 * @implements {AfterViewInit}
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'apPrism',
  preserveWhitespaces: false,
  providers: [
    ApAttributeHandlerService,
    ApClassnameHandlerService,
    ComponentLoaderService,
    PrismService
  ],
  selector: 'ap-prism',
  templateUrl: './prism.component.html'
})
/*  
@ComponentLoader<PrismContainerComponent>({
  component: PrismContainerComponent,
  container: '.container',
  properties: PROPERTIES_LINK
})  
*/
@ApLinkProperyWithService<ApPrismComponent>(PROPERTIES_LINK, 'prismService', true)
@ApChangeDetection<ApPrismComponent>(PROPERTIES_CHANGE_DETECTION)
//#region "component"  
export
  class ApPrismComponent
  extends PrismClass
  implements AfterViewInit {
  
  ngAfterViewInit() {
    /*
    if (this.__create instanceof Function) {
      this.__create(PrismContainerComponent);
    }
    */
    this.ready = true;
  }
}
//#endregion component
