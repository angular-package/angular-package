import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindPropertyComponent } from './bind-property.component';

describe('BindPropertyComponent', () => {
  let component: BindPropertyComponent;
  let fixture: ComponentFixture<BindPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
