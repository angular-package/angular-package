import { DetectionProperties } from '../interface/detection-properties.interface';
import { ChangeDetectorRef } from '@angular/core';

/**
 * Helper class for component.
 */
export abstract class ChangeDetectionHelper {
  public changeDetectorRef?: ChangeDetectorRef;
  public detection = false;
  public properties?: DetectionProperties;
}
