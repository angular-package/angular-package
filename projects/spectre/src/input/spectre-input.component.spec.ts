import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectreInputComponent } from './spectre-input.component';

describe('SpectreInputComponent', () => {
  let component: SpectreInputComponent;
  let fixture: ComponentFixture<SpectreInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpectreInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectreInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
