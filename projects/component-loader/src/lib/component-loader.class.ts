// external
import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ViewContainerRef
} from '@angular/core';

import { PropertyClass } from '@angular-package/property';
import { Types } from '@angular-package/type';

// internal
import { ComponentLoader} from '../interface/component-loader.interface';
import { Type } from '@angular/core';

// const.
export const COMPONENT_PROPERTY_NAME = 'componentRef';

/**
 * Create, destroy methods to ease handle dynamic component and its properties.
 * @export
 */
export abstract class ComponentLoaderClass<C> implements ComponentLoader<C> {

  // Resolved component.
  private $$componentFactory: ComponentFactory<C>;
  // Get resolved component.
  get resolved(): ComponentFactory<C> {
    return this.$$componentFactory;
  }

  // Container name for resolved component.
  protected container: ViewContainerRef;

  // Property name with prefix and suffix for resolved component instance.
  private $$componentPropertyName = COMPONENT_PROPERTY_NAME;
  get componentPropertyName(): string {
    return this.$$componentPropertyName;
  }
  set componentPropertyName(value: string) {
    this.$$propertyClass.set<ComponentLoaderClass<C>, any>(this, '$$componentPropertyName', this.$$propertyClass.name(value), 'string');
  }

  // Properties to link with resolved component.
  set properties(value: Array<string>) {
    this.$$propertyClass.properties = value;
  }
  get properties(): Array<string> {
    return this.$$propertyClass.properties;
  }

  // Class for store and link resolved component properties.
  private $$propertyClass = new PropertyClass();

  /**
   * @param componentFactoryResolver https://angular.io/api/core/ComponentFactoryResolver
   */
  constructor(public componentFactoryResolver: ComponentFactoryResolver) { }

  /**
   * Create resolved component in `container`.
   */
  public create(): this {
    if (!this[this.componentPropertyName] && this.container && this.resolved) {
      this.$$propertyClass.set<ComponentLoaderClass<C>, any>(this, this.componentPropertyName,
        this.container.createComponent(this.resolved));
    }
    return this;
  }

  /**
   * Destroy resolved component and return `undefined` if true.
   */
  public destroy(): ComponentRef<C> | undefined {
    if (this[this.componentPropertyName] && this.container) {
      this[this.componentPropertyName].destroy();
      this[this.componentPropertyName] = undefined;
      this.container.clear();
    }
    return this[this.componentPropertyName];
  }

  /**
   * Get resolved component instance property value.
   * @param name Resolved component instance property name.
   */
  public getProperty<KeyValue>(name: string): KeyValue {
    if (this[this.componentPropertyName]) {
      // if property instance exists.
      if ('instance' in this[this.componentPropertyName]) {
        return this[this.componentPropertyName].instance[name];
      }
    }
  }

  /**
   * Link defined properties with resolved component.
   * @param source Source
   */
  public link<Source>(source: Source): this {
    if (Array.isArray(this.properties)) {
      this.properties.forEach((name: any) =>
        this.$$propertyClass.wrap(source, name,
          (key: string): any => this.getProperty<C>(key),
          (value: any) => this.setProperty<any>(name, value)));
    } else {
      throw new Error(`
        abstract class ComponentLoaderClass<C> implements ComponentLoader<C>
        public link<Source>(source: Source): this
        Problem: Method need to have \`public properties: Array<string>\` property defined.
        Quick fix: Define \`properties\` in $yourInstanceClass.properties = ['your-property-name', 'your-property-name-next'] then use link().
      `);
    }
    return this;
  }

  /**
   * Resolve component.
   * @param component Component to resolve.
   */
  public resolve(component: Type<C>): this {
    this.$$componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    return this;
  }

  /**
   * Set resolved component instance property value.
   * @param name Resolved component instance property name.
   * @param value Resolved component instance property value.
   * @param type Resolved component instance property type to guard.
   */
  public setProperty<Key extends keyof C>(name: Key, value: C[Key], type?: Types<C>): this {
    if (this[this.componentPropertyName]) {
      // if property instance exists.
      if ('instance' in this[this.componentPropertyName]) {
        this.$$propertyClass.set<C, Key>(this[this.componentPropertyName].instance, name, value, type);
      }
    }
    return this;
  }

  /**
   * Set default resolved component values for linked properties.
   * @param source Source component for default values.
   */
  public setProperties<Source>(source: Source): this {
    this.properties.forEach((name: string) => this.setProperty<any>(name, source[this.$$propertyClass.name(name)]));
    return this;
  }
}
