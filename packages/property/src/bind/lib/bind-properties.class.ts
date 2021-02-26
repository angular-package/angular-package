// Internals.
import { PropertyClass } from '../../lib/property.class';

// @angular-package/type
import { FunctionType } from '@angular-package/type';

/*
property => object
properties => object
property => objects
properties => objects
*/

export class BindPropertiesClass {

  private properties: PropertyClass;

  /**
   *
   * @param properties Names of properties to bind.
   */
  constructor(properties: Array<string> | string) {
    if (properties !== undefined) {
      this.properties = new PropertyClass((typeof properties === 'string') ? [properties] : properties);
    }
    return this;
  }

  /**
   * Bind properties to target.
   * @param to Bind to target.
   */
  public to(to: string): FunctionType {
    return (from) => {
      this.properties.bind(from, to);
    };
  }
}
