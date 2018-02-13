import { ApPropertiesInterface } from '../src';

/**
 * What possibilites do we have when extends component.
 * @export
 * @abstract
 * @class ApChangeDetectorAClass
 */
export abstract class ApChangeDetectorAClass {
  public _detection = false;
  public _properties?: ApPropertiesInterface = {};

  public _detach(): void { }
  public _detect(): void { }
  public _reattach(): void {}
}
