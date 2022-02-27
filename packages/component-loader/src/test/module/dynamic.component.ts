import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  template: `Dynamic component created successfully`
})
export class DynamicComponent {

  get justBirthDay(): number {
    return this.birthDay;
  }
  set justBirthDay(value: number) {
    this.birthDay = value;
  }

  get getAge(): number {
    return this.age;
  }

  age = 27;
  assign = 'notassigned';
  birthDay = 1;
  birthMonth = 2;
  birthYear = 2050;
  firstName = 'My first name';
  happy = false;
  key = 'notdefined';
  lastName = 'My last name';
  model = {
    defined: true
  };
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
