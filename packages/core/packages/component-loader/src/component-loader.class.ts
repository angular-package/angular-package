// external
import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

// internal
import { ComponentType } from '../../type';
import { ComponentLoaderCommonAClass } from './component-loader-common.aclass';
import { ComponentLoaderClassInterface } from '../interface';

/**
 * Angular 2+ class extend for component with ability to handle loading dynamic component that is available in entryComponents.
 * @export
 * @abstract
 * @class ComponentLoaderClass
 */
@Injectable()
export class ComponentLoaderClass extends ComponentLoaderCommonAClass implements ComponentLoaderClassInterface {

  /**
   * Container property where Dynamic Component will be put in.
   * @public
   * @type {*}
   * @memberof ComponentLoaderClass
   */
  @ViewChild('container', { read: ViewContainerRef }) public container: any;

  /**
   * Creates an instance of ComponentLoaderClass.
   * @param {ComponentFactoryResolver} componentFactoryResolver
   * @memberof ComponentLoaderClass
   */
  constructor(public componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }

  /**
   * Create in html `#container` resolved component.
   * @public
   * @param {component} component
   * @returns {this}
   * @memberof ComponentLoaderClass
   */
  public __create(component: ComponentType<any>): this {
    if (this.container && component) {
      if (!this.__component) {
        this.__component = this.container.createComponent(this.__resolve(component));
      }
    }
    return this;
  }

  /**
   * Destroy component.
   * @public
   * @returns {null}
   * @memberof ComponentLoaderClass
   */
  public __destroy(): null {
    if (this.__component) {
      this.__component.destroy();
      this.__component = null;
    }
    return this.__component;
  }
}
