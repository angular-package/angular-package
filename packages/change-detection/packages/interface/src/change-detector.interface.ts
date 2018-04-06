import { ApChangeDetectorClass } from '../../change-detector';
import { ApChangeDetectionProperties } from './properties.interface';

/**
 * Available possibilites when extends component.
 * @export
 * @abstract
 * @class ApChangeDetectionInterface
 */
export interface ApChangeDetector<T> {
  detection: boolean;
  changeDetector?: ApChangeDetectorClass<T>;

  _properties?: ApChangeDetectionProperties;
  _detach?: Function;
  _detect?: Function;
  _reattach?: Function;
}
