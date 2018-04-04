import { } from 'jasmine';

// external
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';

// internal
import { FormElementComponent } from './form-element.component';
import { FormElementModule } from './form-element.module';
import { FormElementService } from './form-element.service';
import { ValidatorService } from './validator.service';

import { TestHolderFormElementModule } from './form-element.module.test';
import { config } from './../test/config';
import { model } from './../test/model';
import { InputComponent } from '../test/input.component';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('FormElementModule', () => {

  let comp: FormElementComponent<InputComponent>;
  let fixture: ComponentFixture<FormElementComponent<InputComponent>>;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TestHolderFormElementModule
      ],
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(FormElementComponent);
    nativeElement = fixture.debugElement.nativeElement;
    comp = fixture.componentInstance;
  });

  it('should create FormElementComponent', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));
  it('should have div', async(() => {
    expect(nativeElement.querySelector('div')).toBeTruthy();
  }));
  it('should have properties defined equal to config', async(() => {
    comp.config = config[0];
    for (const property in config[0]) {
      if (property) {
        expect(comp[property]).toEqual(config[0][property]);
      }
    }
  }));
  it('should have properties defined in property `__component` instance', async(() => {
    comp.config = config;
    comp.ngOnInit();
    for (const property in config) {
      if (property) {
        expect(comp.get('__component').instance[property]).toEqual(config[property]);
      }
    }
  }));
  it('should have subscribe to cancelled, changed, submitted EventEmitter', async(() => {
    comp.config = config;
    comp.ngOnInit();
    comp.subscribe('cancelled', (result: any) => {
      expect(result).toBe('cancelled !');
    }, (error: any) => {
    }, (complete: any) => {
    });
    comp.subscribe('changed', (result: any) => {
      expect(result).toBe('changed !');
    }, (error: any) => {
    }, (complete: any) => {
    });
    comp.subscribe('submitted', (result: any) => {
      expect(result).toBe('submitted !');
    }, (error: any) => {
    }, (complete: any) => {
    });
    comp.cancelled.subscribe((result: any) => {
      expect(result).toBe('cancelled !');
    }, (error: any) => {
    }, (complete: any) => {
    });
    comp.changed.subscribe((result: any) => {
      expect(result).toBe('changed !');
    }, (error: any) => {
    }, (complete: any) => {
    });
    comp.submitted.subscribe((result: any) => {
      expect(result).toBe('submitted !');
    }, (error: any) => {
    }, (complete: any) => {
    });
    comp.get('__component').instance['cancelled'].emit('cancelled !');
    comp.get('__component').instance['changed'].emit('changed !');
    comp.get('__component').instance['submitted'].emit('submitted !');
  }));
  it('should have subscribe to custom EventEmitter', async(() => {
    comp.config = config;
    comp.ngOnInit();
    comp.subscribe('custom', (result: any) => {
      expect(result).toBe('customitted !');
    }, (error: any) => {
    }, (complete: any) => {
    });
    comp.get('__component').instance['custom'].emit('customitted !');
  }));
  it('should have div#container created', async(() => {
    comp.config = config;
    comp.ngOnInit();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div#container')).toBeDefined();
  }));
});
