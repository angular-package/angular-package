import { ComponentFixture, TestBed } from '@angular/core/testing';
// Module.
import { TestModule } from './module/test.module';
// Component.
import { ComponentLoaderServiceComponent } from './module/component-loader-service.component';
// Testing.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';

const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();

testing.describe('ComponentLoaderServiceComponent', () => {
  let component: ComponentLoaderServiceComponent;
  let fixture: ComponentFixture<ComponentLoaderServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLoaderServiceComponent ],
      imports: [ TestModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLoaderServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  testing.it('should create', () => {
    expect(component).toBeTruthy();
    toBe.defined(component);
  });
});

