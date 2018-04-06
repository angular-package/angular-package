import { ApChangeDetectionProperties } from '../../src';
import { ApChangeDetectorClass } from './change-detector.class';

/**
 * Available possibilites when extends component.
 * @export
 * @abstract
 * @class ApChangeDetectorAClass
 */
export abstract class ApChangeDetectorAClass<T> {
  public detection = false;
  public changeDetector?: ApChangeDetectorClass<T>;

  public _properties?: ApChangeDetectionProperties = {};

  public _detach(): void { }
  public _detect(): void { }
  public _reattach(): void { }
}
