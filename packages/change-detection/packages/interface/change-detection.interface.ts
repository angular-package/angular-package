import { ApPropertiesInterface } from './properties.interface';

/**
 * Available possibilites when extends component.
 * @export
 * @abstract
 * @class ApChangeDetectionInterface
 */
export interface ApChangeDetectionInterface {
  _detection: boolean;
  _properties?: ApPropertiesInterface;

  _detach?: Function;
  _detect?: Function;
  _reattach?: Function;
}
