import { PropertiesInterface } from './interface';

/**
 * @export
 * @abstract
 * @class ChangeDetectorAbstractClass
 */
export abstract class ChangeDetectorAbstractClass {
  public __detection: boolean;
  public __detach(): void {}
  public __detect(): void { }
  public __properties(properties: PropertiesInterface) {}
  public __reattach(): void {}
}
