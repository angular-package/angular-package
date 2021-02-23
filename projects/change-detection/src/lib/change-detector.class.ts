import { ChangeDetectorRef } from '@angular/core';

// internals
import { DetectionProperties } from '../interface/detection-properties.interface';

/**
 * Helper class for component.
 */
export abstract class ChangeDetectionHelper {
  public changeDetectorRef?: ChangeDetectorRef;
  public detection = false;
  public properties?: DetectionProperties;
}
