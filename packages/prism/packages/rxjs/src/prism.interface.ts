// external
import { ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

// internal
import { CallbackType, SanitizedType } from './prism.type';

export interface PrismInterface {
  async: boolean;
  callback?: CallbackType | undefined;
  code?: SanitizedType | undefined;
  language: string;
  interpolation: Object | undefined;
}
