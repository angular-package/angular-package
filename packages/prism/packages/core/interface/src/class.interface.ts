import { ElementRef } from '@angular/core';
import { CallbackType } from '../../type';

export interface PrismClass {
  async?: boolean;
  callback?: CallbackType;
  code?: string;
  codeElement?: ElementRef;
  language?: string;
  interpolation?: Object;
}
