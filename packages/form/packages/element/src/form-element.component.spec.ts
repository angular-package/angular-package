import { } from 'jasmine';

// external
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';

// internal
import { FormElementComponent } from './ngx-form-element.component';
import { FormElementService } from './ngx-form-element.service';
import { FormElementModule } from './ngx-form-element.module';
import { ErrorService } from './error.service';
import { ValidatorService } from './validator.service';
import { InputComponent } from './../test/input.component';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});
describe('FormElementComponent', () => {

  let comp: FormElementComponent;
  let fixture: ComponentFixture<FormElementComponent>;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormElementModule.forRoot({
          elements: [
            { name: 'input', component: InputComponent }
          ],
          errorMessages: { }
        })
      ],
      providers: [
        ErrorService,
        FormElementService,
        ValidatorService
      ]
    }).compileComponents();
  }));
  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(FormElementComponent);
    nativeElement = fixture.debugElement.nativeElement;
    comp = fixture.componentInstance;
  });

  it('should create test component', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));
  it('should have div', async(() => {
    expect(nativeElement.querySelector('div')).toBeTruthy();
  }));
});
