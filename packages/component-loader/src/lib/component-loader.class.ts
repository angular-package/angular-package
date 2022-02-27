import { ComponentRef, ViewContainerRef, Type } from '@angular/core';
/**
 * Abstract class to handle loading components dynamically.
 */
export abstract class ComponentLoader<DynamicComponent> {
  //#region public instance accessors.
  /**
   * A read-only component of `ComponentRef` type created by a `createComponent()` method.
   * @returns The return value is a component of generic type variable `Dynamic` created by a `ComponentFactory`.
   * @angularpackage
   */
  public get createdComponent(): ComponentRef<DynamicComponent> | undefined {
    return this.#createdComponent;
  }

  /**
   * A read-only creation state of the dynamic component of a `boolean` type, which by default is set to `false`.
   * @returns The return value is a `boolean` type indicating whether the dynamic component is created.
   * @angularpackage
   */
  public get creationState(): boolean {
    return this.#creationState;
  }
  //#endregion public instance accessors.

  //#region private instance properties.
  /**
   * A privately stored component created by a `createComponent()` method.
   * "Provides access to the component instance and related objects, and provides the means of destroying the instance."
   */
  #createdComponent?: ComponentRef<DynamicComponent>;

  /**
   * The creation state of a dynamic component of a `boolean` type.
   */
  #creationState = false;

  /**
   * "Represents a container where one or more views can be attached to a component."
   */
  #viewContainer!: ViewContainerRef;
  //#endregion private instance properties.

  //#region static public methods.
  /**
   * Finds the property name that contains container of `ViewContainerRef` in the given `component`.
   * @param component A component of generic object to look in for the container of `ViewContainerRef`.
   * @returns The return value is the property key of string type that contains `ViewContainerRef` in the given `component` or `undefined`.
   * @angularpackage
   */
  public static findViewContainerKey(component: {
    [k: string]: any;
  }): string | undefined {
    let containerKey: string | undefined;
    for (const [index, key] of Object.keys(component).entries()) {
      if (this.isViewContainer(component[key])) {
        containerKey = key;
        break;
      }
    }
    return containerKey;
  }

  /**
   * Checks whether the `value` is a `ViewContainerRef` type.
   * @param value The `value` of any type to check.
   * @returns The return value is a `boolean` indicating whether the `value` is a container of `ViewContainerRef`.
   * @angularpackage
   */
  public static isViewContainer(value: any): value is ViewContainerRef {
    return Object.prototype.hasOwnProperty.call(value, '_hostLView');
  }
  //#endregion static public methods.

  //#region instance public methods.
  /**
   * Assigns the whole object or its properties indicated by the provided `keys` to the dynamic component.
   * @param object An `object` to assign its properties to the dynamic component.
   * @param keys A rest parameter of property names from the dynamic component to assign from the provided `obj`.
   * @returns The return value is an instance of a child class.
   * @angularpackage
   */
  public assignProperties<
    Obj extends object,
    Key extends keyof DynamicComponent
  >(object: Obj, ...keys: Key[]): this {
    if (Array.isArray(keys) && keys.length > 0) {
      keys.forEach((key) => {
        Object.assign(this.createdComponent?.instance, {
          [key]: object[key as string as keyof Obj],
        });
      });
    } else {
      Object.assign(this.createdComponent?.instance, object);
    }
    return this;
  }

  /**
   * Creates component from the given `component` or the stored factory, and loads its host view into the provided or stored existing
   * container. The state of a destroyed component is stored in the property `created`, and its value is set to `false` when the component
   * was successfully destroyed.
   * @param componentType An optional `class` of a `DynamicComponent` type.
   * @param viewContainer A container of `ViewContainerRef` type to load component host view to it. By default, it uses the value set by
   * `setContainer()` method.
   * @returns The return value is an instance of a child class.
   * @angularpackage
   */
  public createComponent(
    componentType: Type<DynamicComponent>,
    viewContainer: ViewContainerRef = this.#viewContainer
  ): this {
    ComponentLoader.isViewContainer(viewContainer) &&
      !this.isComponentCreated() &&
      ((this.#createdComponent = viewContainer.createComponent(componentType)),
      (this.#creationState = this.isComponentCreated()));
    typeof this.#viewContainer === 'undefined' &&
      (this.#viewContainer = viewContainer);
    return this;
  }

  /**
   * Destroys the existing component, all of the data structures associated with it, and clears the container. The state of destroying
   * component is stored in the property `created`, and its value is set to `false` when the component was successfully destroyed.
   * @returns The return value is a `boolean` type indicating whether the method successfully destroyed a privately stored component.
   * @angularpackage
   */
  public destroyComponent(): boolean {
    // Stores the result of destroying the component. Should be `false`.
    this.isComponentCreated() &&
      // "Destroys the component instance and all of the data structures associated with it."
      (this.#createdComponent?.destroy(),
      // Sets #component to `undefined`.
      (this.#createdComponent = undefined),
      // "Destroys all views in this container."
      this.#viewContainer.clear());
    this.#creationState = typeof this.#createdComponent === 'undefined';
    return this.#creationState;
  }

  /**
   * Gets the value of the property indicated by the provided `key` from the dynamic component.
   * The method checks the existence of an instance of the dynamic component and its provided `key`.
   * @param key The `key` of an instance of a `DynamicComponent` to get the property value.
   * The value is being checked against the proper `key` and its existence in the instance of a dynamic component.
   * @returns The return value is the value of the indicated property from the instance of a dynamic component.
   * @angularpackage
   */
  public getPropertyValue<Key extends keyof DynamicComponent>(
    key: Key
  ): DynamicComponent[Key] | undefined {
    return this.#createdComponent?.instance[key];
  }

  /**
   * Checks whether the dynamic component is created by using the method `createComponent()`. The result of the check is stored in the
   * `created` accessor.
   * @returns The return value is a `boolean` indicating whether the dynamic component is already created.
   * @angularpackage
   */
  public isComponentCreated(): boolean {
    return typeof this.#createdComponent === 'object';
  }

  /**
   * The method links the dynamic component properties of specified names to properties of the same names of the given `target` object. It
   * means the dynamic component properties pick the value from the target object property.
   * @param names Dynamic component property names of an `Array` of a generic type variable `Name` to link with the given target object.
   * @param target Target object of generic type variable `Target` to link with the dynamic component properties of the given `names`.
   * @returns The return value is an instance of child class.
   * @angularpackage
   */
  public linkProperties<
    Target extends object,
    Name extends keyof DynamicComponent
  >(names: Name[], target: Target): this {
    names.forEach((name) => this.linkProperty(name, target));
    return this;
  }

  /**
   * Links the dynamic component property of a specified name to a property of the same name of the given `target` object. It means the
   * dynamic component property picks the value from the target object property.
   * @param name Dynamic component property name of a generic type variable `Name` to link with the given target object.
   * @param target Target object of generic type variable `Target` to link with the dynamic component property of the given `name`.
   * @returns The return value is an instance of child class.
   * @angularpackage
   */
  public linkProperty<
    Target extends object,
    Name extends keyof DynamicComponent
  >(name: Name, target: Target): this {
    Object.defineProperty(this.#createdComponent?.instance, name, {
      get(): DynamicComponent[Name] {
        const key = name as any;
        return target[key as keyof Target] as any;
      },
    });
    return this;
  }

  /**
   * Picks the container of a `ViewContainerRef` from the given `component`.
   * @param component A component of generic object to find container key.
   * @returns The return value is an instance of a child class.
   * @angularpackage
   */
  public pickViewContainer(component: { [k: string]: any }): this {
    const key = ComponentLoader.findViewContainerKey(component);
    return (
      typeof key === 'string' && this.setViewContainer(component[key] as any),
      this
    );
  }

  /**
   * Sets the `value` of a property indicated by the provided `key` of an instance of a `DynamicComponent`.
   * @param key The `key` of a property from the instance of a `DynamicComponent` to set its value.
   * @param value The `value` of a captured type from the property of `DynamicComponent` instance to set.
   * @returns The return value is an instance of a child class.
   * @angularpackage
   */
  public setPropertyValue<Key extends keyof DynamicComponent>(
    key: Key,
    value: DynamicComponent[Key]
  ): this {
    Object.assign(this.#createdComponent?.instance, {
      [key]: value,
    });
    return this;
  }

  /**
   * Sets the given `container` of a `ViewContainerRef` when its property `_hostLView` is found.
   * @param container "Represents a container where one or more views can be attached to a component."
   * @returns The return value is an instance of a child class.
   * @angularpackage
   */
  public setViewContainer(container: ViewContainerRef): this {
    return (
      ComponentLoader.isViewContainer(container) &&
        (this.#viewContainer = container),
      this
    );
  }

  /**
   * The method unlinks the dynamic component properties of specified names from the `target` object. It means the dynamic component
   * property no longer picks the value from the target object property.
   * @param names A rest parameter of the dynamic component property names of a generic type variable `Name` to unlink from the target
   * object.
   * @returns The return value is an instance of child class.
   * @angularpackage
   */
  public unlinkProperties<Name extends keyof DynamicComponent>(
    ...names: Name[]
  ): this {
    names.forEach((name) =>
      Object.defineProperty(this.#createdComponent?.instance, name, {
        writable: true,
        value: this.#createdComponent?.instance[name],
      })
    );
    return this;
  }
  //#endregion instance public methods.
}
