import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyClassComponent } from './property-class.component';

describe('PropertyClassComponent', () => {
  let component: PropertyClassComponent;
  let fixture: ComponentFixture<PropertyClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
