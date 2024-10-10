// external
import {
  ComponentRef,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

// internal
import { ComponentLoaderCommonClass } from './component-loader-common.class';
import { ComponentLoader } from '../interface';

/**
 * Class to handle loading dynamic component.
 * @export
 */
export
  class ComponentLoaderClass<T>
  extends ComponentLoaderCommonClass<T>
  implements ComponentLoader<T> {

  /**
   * Container property where Dynamic Component will be put in.
   */
  @ViewChild('container', { read: ViewContainerRef }) container?: ViewContainerRef;

  /**
   * Bind source component properties with dynamic component instance by using setters and getters.
   * @param [properties=this.__properties] Properties to be linked in source component with dynamic component.
   */
  __bind(properties: Array<string> = this.__properties): void {
    if (this.propertyClass && this.__component) {
      this.propertyClass.bind(this, properties, this.__component.instance);
    }
  }

  /**
   * Create in html `#container` resolved component.
   * @param component Component that will be created.
   */
  __create(component: Type<T>): this {
    if (!this.__component && this.container && component) {
      this.__component = this.container.createComponent(this.__resolve(component));
    }

    return this;
  }

  /**
   * Destroy component.
   */
  __destroy(): ComponentRef<T> | undefined {
    if (this.__component && this.container) {
      this.__component.destroy();
      this.__component = undefined;
      this.container.clear();
    }

    return this.__component;
  }

  /**
   * Link source component properties with dynamic component instance by using setters and getters.
   * @param [properties=this.__properties] Properties to be linked in source component with dynamic component.
   */
  __link(properties: Array<string> = this.__properties): this {
    this.__wrap(properties, this,
      <PT>(property: string, source: Function | this = this, sourcePropertyName?: string) => {
        if (this.__set instanceof Function && source && sourcePropertyName) {
          this.__set<PT>(property, this[sourcePropertyName]);
        }
      },
      <PT>(property: string): any => {
        if (this.__get instanceof Function) {
          return this.__get<PT>(property);
        }
      });

    return this;
  }
}
