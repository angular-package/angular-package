import { DebugElement } from '@angular/core';
import { ResultName } from '../type';

export interface Result {
  before?: any;
  query?: DebugElement;
  name?: ResultName;
}
