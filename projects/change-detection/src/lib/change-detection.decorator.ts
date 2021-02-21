import { FunctionType } from '@angular-package/core/type';

// internal
import { configureDetector } from './configure-detector.func';
import { DetectionProperties } from '../interface/detection-properties.interface';
import { DetectorOptions } from '../interface/detector-options.interface';

export function ChangeDetection<C>(properties: DetectionProperties, options?: DetectorOptions): FunctionType {
  return (component: FunctionType): any => configureDetector<C>(component, properties, options);
}
