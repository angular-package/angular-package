// ChangeDetectorRef
import { ChangeDetectorRef } from '@angular/core';

// @angular-package
import { PropertyClass } from '@angular-package/core/property';
import { ComponentType } from '@angular-package/core/type';
import { instanceOf, typeGuard, typeObjectGuard } from '@angular-package/core/type/guard';

// internal
import { DetectionProperties } from '../../interface';

/**
 * Find `ChangeDetectorRef` component instance to use it.
 * @method detach(): this
 * @method detect(property: string): this
 * @method reattach(): this
 * @example https://wvvw.dev/docs/angular-package/change-detection
 */
export class ChangeDetectorClass<C> {

  // Change detector instance private property name.
  private changeDetectorProperty$$?: string;
  get changeDetectorProperty(): string {
    return this.find$$();
  }

  // Change detector instance.
  get changeDetector(): ChangeDetectorRef {
    if (this.changeDetectorProperty) {
      return this.component[this.changeDetectorProperty];
    }
  }

  // Component to search change detector.
  get component(): ComponentType<C> {
    return this.component$$;
  }
  set component(component: ComponentType<C>) {
    this.component$$ = component;
  }

  private propertyClass$$: PropertyClass = new PropertyClass();

  /**
   * ChangeDetectorClass instance.
   * @param component$$ Component to handle change detection.
   */
  constructor(private component$$?: ComponentType<C>, public properties?: DetectionProperties) {}

  /**
   * Add detection to setter to specific properties.
   */
  public addDetection(): this {
    if (typeObjectGuard<DetectionProperties>(this.properties)) {
      if (Array.isArray(Object.keys(this.properties))) {
        Object.keys(this.properties).forEach((property: string): any => {
          this.propertyClass$$.wrap<ComponentType<C>, any>(this.component, property, undefined, (): any => this.detect(property));
        });
      }
    }
    return this;
  }

  /**
   * "Detaches this view from the change-detection tree.
   * A detached view is not checked until it is reattached.
   * Use in combination with detectChanges() to implement local change detection checks." - Angular.io
   */
  public detach(): this {
    setTimeout(() => this.changeDetector.detach(), 0);
    return this;
  }

  /**
   * Detect changes in component.
   * "Checks this view and its children.
   * Use in combination with {@link ChangeDetectorRef#detach detach} to implement local change detection checks." - angular.io
   * @param property Detect property if true in properties.
   */
  public detect<Key extends keyof DetectionProperties>(property: Key): this {
    if (typeGuard<string>(property, 'string')) {
      if (instanceOf<ChangeDetectorClass<C>>(this, 'properties')) {
        if (instanceOf<DetectionProperties>(this.properties, property)) {
          if (typeGuard<boolean>(this.properties[property], 'boolean')) {
            if (this.properties[property] === true) {
              setTimeout(() => this.changeDetector.detectChanges(), 0);
            }
          }
        }
      }
    }
    return this;
  }

  /**
   * Reattach component to detection.
   * "Re-attaches the previously detached view to the change detection tree.
   * Views are attached to the tree by default." - angular.io
   */
  public reattach(): this {
    setTimeout(() => this.changeDetector.reattach(), 0);
    return this;
  }

  /**
   * Search for change detector instance in specified component and return its key.
   * @param component Component to find change detector instance.
   */
  private find$$(): string {
    if (this.changeDetectorProperty$$ === undefined) {
      if (typeObjectGuard<C>(this.component)) {
        Object.keys(this.component).forEach((property: string): boolean => {
          if (this.component[property] instanceof Object && instanceOf<ChangeDetectorRef>(this.component[property], 'detectChanges')) {
            this.changeDetectorProperty$$ = property;
            return false;
          }
        });
      }
      if (this.changeDetectorProperty$$ === undefined) {
        throw new Error(`
          Problem: ChangeDetectorClass: couldn't find ChangeDetectorRef instance.
          Quick fix: Add to constructor "public changeDetectorRef: ChangeDetectorRef".
        `);
      }
    }
    return this.changeDetectorProperty$$;
  }
}
