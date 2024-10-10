import {
  Component,
  // ComponentFactoryResolver,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  // selector: 'dynamic-component',
  template: `Dynamic component created succesfully`
})
export class DynamicComponent {
  __prefix: string;
  __suffix: string;
  key = 'notdefined';
  assign = 'notassigned';
  model = {
    defined: true
  };
  age = 27;

  wrapped = false;

  @Output() event: EventEmitter<any> = new EventEmitter();

  emit(): void {
    this.event.emit('event');
  }

  emitComplete(): void {
    this.event.complete();
  }

  emitError(): void {
    this.event.error({
      error: new Error('event error')
    });
  }
}
