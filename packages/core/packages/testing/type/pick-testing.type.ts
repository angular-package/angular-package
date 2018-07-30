import { TestingClass } from '../src';

export type PickTesting<T> = Pick<TestingClass<T>,
  'attribute' |
  'be' |
  'before' |
  'class' |
  'clear' |
  'componentInstance' |
  'contain' |
  'debugElement' |
  'nativeElement' |
  'not' |
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
