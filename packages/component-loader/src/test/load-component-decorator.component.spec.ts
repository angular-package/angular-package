import { ComponentFixture, TestBed } from '@angular/core/testing';
// Testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';

import { TestModule } from './module/test.module';
import { LoadComponentDecoratorComponent } from './module/load-component-decorator.component';

const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();

testing.describe('LoadComponentDecoratorComponent', () => {
  let component: LoadComponentDecoratorComponent;
  let fixture: ComponentFixture<LoadComponentDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadComponentDecoratorComponent],
      imports: [TestModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadComponentDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  testing.it('should create', () => {
    toBe.defined(component);
    expect(component).toBeTruthy();
  });
});
