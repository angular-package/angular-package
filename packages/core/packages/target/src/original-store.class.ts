// external
import { Injectable } from '@angular/core';
import * as _ from 'lodash-es';

// internal
import { CycleHookType } from '../../src/type';
import { CycleHookInterface, GetterSetterStoreInterface } from '../../src/interface';

export class OriginalStoreClass implements CycleHookInterface, GetterSetterStoreInterface {

  getter = {};
  setter = {};

  ngAfterContentInit?: Function;
  ngAfterContentChecked?: Function;
  ngAfterViewInit?: Function;
  ngAfterViewChecked?: Function;
  ngDoCheck?: Function;
  ngOnInit?: Function;
  ngOnDestroy?: Function;
  ngOnChanges?: Function;

  public cycleHook(target: Function, names: CycleHookType[]): OriginalStoreClass {
    if (names instanceof Array) {
      _.each(names, (name: string) => {
        if (name) {
          this[name] = target.prototype[name];
        }
      });
    }
    return this;
  }

  public setterGetter(target: Function, properties: string | string[]): OriginalStoreClass {
    if (properties instanceof Array) {
      _.each(properties, (property: string) => this.merge(target, property));
    } else {
      this.merge(target, properties);
    }
    return this;
  }

  private merge(target: Function, property: string): void {
    _.merge(this, {
      getter: {
        [property]: target.prototype.__lookupGetter__(property)
      },
      setter: {
        [property]: target.prototype.__lookupSetter__(property)
      }
    });
  }
}
