import {
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  OnInit,
  OnDestroy,
  OnChanges
} from '@angular/core';

export interface CycleHookMethods {
  ngAfterContentInit?: AfterContentInit;
  ngAfterContentChecked?: AfterContentChecked;
  ngAfterViewInit?: AfterViewInit;
  ngAfterViewChecked?: AfterViewChecked;
  ngDoCheck?: DoCheck;
  ngOnInit?: OnInit;
  ngOnDestroy?: OnDestroy;
  ngOnChanges?: OnChanges;
}
