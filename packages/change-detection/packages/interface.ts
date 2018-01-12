import { ChangeDetectorClass } from './change-detector.class';

export interface ChangeDetectionInterface {

  /**
   * Status component detection. When true `Detached`, false means `CheckOnce`.
   * @type {boolean}
   * @memberof ChangeDetectionInterface
   */
  detection: boolean;
  properties: PropertiesInterface;
  ready: boolean;
}

export interface LookupItemInterface {
  [key: string]: Function;
}

export interface LookupInterface {
  getter: LookupItemInterface;
  setter: LookupItemInterface;
}

export interface PropertiesInterface {
  [index: string]: boolean;
}
