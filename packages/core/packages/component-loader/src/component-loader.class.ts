// external
import { Inject, ViewChild, ViewContainerRef, Type} from '@angular/core';

// internal
import { ComponentLoaderCommonAClass } from './component-loader-common.aclass';
import { ComponentLoaderClassInterface } from '../interface';
import { CallbackSetterType } from '../../connect/type/callback-setter.type';
import { CallbackGetterType } from '../../connect/type/callback-getter.type';

/**
 * Class to handle loading dynamic component.
 * @export
 * @abstract
 * @class ComponentLoaderClass
 */
export
  class ComponentLoaderClass<T>
  extends ComponentLoaderCommonAClass<T>
  implements ComponentLoaderClassInterface<T> {

  /**
   * Container property where Dynamic Component will be put in.
   * @public
   * @type {*}
   * @memberof ComponentLoaderClass
   */
  @ViewChild('container', { read: ViewContainerRef }) public container?: ViewContainerRef;

  /**
   * Connect source(extended) component properties with dynamic component instance by using setters and getters.
   * Because of this you can set dynamic component properties values by providing values in extended component.
   * @param {string[]} [p=this.__properties] Properties to be connected from source component to dynamic component.
   * @memberof ComponentLoaderClass
   */
  public __connect(p: string[] = this.__properties): void {
    this.__wrap(p, this,
      <PT>(property: string, sourcePropertyName: string) => {
        if (this.__set instanceof Function) {
          this.__set<PT>(property, this[sourcePropertyName]);
        }
      },
      <PT>(property: string): any => {
        if (this.__get instanceof Function) {
          return this.__get<PT>(property);
        }
      });
  }

  /**
   * Create in html `#container` resolved component.
   * @param {Type<D>} component Component that will be created.
   * @returns {this}
   * @memberof ComponentLoaderClass
   */
  public __create<D = T>(component: Type<D>): this {
    if (this.container && component) {
      if (!this.__component) {
        this.__component = this.container.createComponent(this.__resolve(component));
      }
    }
    return this;
  }

  /**
   * Destroy component.
   * @returns {*}
   * @memberof ComponentLoaderClass
   */
  public __destroy(): any {
    if (this.__component.instance && this.container) {
      this.__component.destroy();
      this.container.clear();
    }
    return this.__component.instance;
  }
}
