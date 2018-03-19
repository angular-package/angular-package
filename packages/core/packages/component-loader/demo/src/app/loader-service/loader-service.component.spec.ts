import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderServiceComponent } from './loader-service.component';

describe('LoaderServiceComponent', () => {
  let component: LoaderServiceComponent;
  let fixture: ComponentFixture<LoaderServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
