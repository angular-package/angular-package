import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'input-component',
  template: '<div id="container" #container></div>'
})
export class InputComponent {
  key = 'defined';
  public model = {
    defined: true
  };

  @Output() cancelled: EventEmitter<any> = new EventEmitter();
  @Output() changed: EventEmitter<any> = new EventEmitter();
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  @Output() custom: EventEmitter<any> = new EventEmitter();

  emit(event: string): void {
    if (this[event]) {
      this[event].emit({
        emitted: event
      });
    }
  }
}
