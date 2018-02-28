import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderClassComponent } from './loader-class.component';

describe('LoaderClassComponent', () => {
  let component: LoaderClassComponent;
  let fixture: ComponentFixture<LoaderClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
