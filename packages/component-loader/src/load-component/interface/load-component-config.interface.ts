/**
 * An optional configuration shape for the `LoadComponent` decorator.
 */
export interface LoadComponentConfig<DynamicComponent> {
  /**
   * An optional string-type property name of the decorator target component that contains the `ViewContainerRef`.
   */
  container?: string;

  /**
   * An optional object of property names of `DynamicComponent` that are going to be linked with the decorator target component.
   */
  properties?: Array<keyof DynamicComponent>;

  /**
   * An optional property name of a `string` type of the decorator target component that contains an instance of  `ComponentLoaderService`.
   */
  service?: string;
}
