// external
import { Inject, Injectable, Optional } from '@angular/core';

// internal
import { Property } from '../interface';
import { PREFIX } from './prefix.token';
import { PropertyClass } from './property.class';
import { SUFFIX } from './suffix.token';

/**
 * Component property features.
 * @export
 */
@Injectable()
export class PropertyService extends PropertyClass implements Property {
  /**
   * Creates an instance of PropertyService.
   * @param [prefix] Prefix of new property name.
   * @param [suffix] Suffix of new property name.
   */
  constructor(@Inject(PREFIX) @Optional() prefix?: string, @Inject(SUFFIX) @Optional() suffix?: string) {
    super(prefix, suffix);
  }

}
