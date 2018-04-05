import { ApChangeDetectionProperties } from './properties.interface';

/**
 * Available possibilites when extends component.
 * @export
 * @abstract
 * @class ApChangeDetectionInterface
 */
export interface ApChangeDetection {
  _detection: boolean;
  _properties?: ApChangeDetectionProperties;

  _detach?: Function;
  _detect?: Function;
  _reattach?: Function;
}
