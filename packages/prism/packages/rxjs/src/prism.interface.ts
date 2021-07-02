// internal
import { CallbackType, SanitizedType } from './prism.type';

export interface PrismInterface {
  async?: boolean;
  callback?: CallbackType;
  code?: SanitizedType;
  language?: string;
  interpolation?: Object;
}
