import { TestingClass } from '../src';

export type Testing<T> = Pick<TestingClass<T>,
  'attribute' |
  'be' |
  'before' |
  'class' |
  'clear' |
  'componentInstance' |
  'contain' |
  'debugElement' |
  'nativeElement' |
  'defined' |
  'equal' |
  'falsy' |
  'get' |
  'null' |
  'selector' |
  'set' |
  'subscribe' |
  'truthy' |
  'undefined'
  >;
