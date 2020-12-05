import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectreComponent } from './spectre.component';
import { SpectreModule } from './spectre.module';

describe('SpectreComponent', () => {
  let component: SpectreComponent;
  let fixture: ComponentFixture<SpectreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpectreModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
