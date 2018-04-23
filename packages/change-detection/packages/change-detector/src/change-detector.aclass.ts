import { ApChangeDetectionProperties } from '../../src';
import { ApChangeDetectorClass } from './change-detector.class';

/**
 * Available possibilites when extends component.
 * @export
 * @abstract
 * @class ApChangeDetectorAClass
export abstract class ApChangeDetectorAClass<T> {
  // public detection = false;
  // public changeDetector?: ApChangeDetectorClass<T>;
  // public _properties?: ApChangeDetectionProperties = {};

  set detection(detection: boolean) {
    this.changeDetector.detection = detection;
    this.changeDetector.setDetection(this);
  }
  get detection(): boolean {
    return this.changeDetector.detection;
  }

  set _properties(properties: ApChangeDetectionProperties) {
    this.changeDetector.properties = properties;
    this.changeDetector.setDetection(this);
  }
  get _properties(): ApChangeDetectionProperties {
    return this.changeDetector.properties;
  }

  public _detach(): this {
    this.changeDetector.detach(this);
    return this;
  }
  public _detect(): void { }
  public _reattach(): void { }

  constructor(public changeDetector: ApChangeDetectorClass<any> = new ApChangeDetectorClass<T>()) {}
}
*/
