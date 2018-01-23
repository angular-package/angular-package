// external
import { NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';

// internal
import { DynamicComponent } from './../test/dynamic.component';
import { TestComponent } from './../test/test.component';
import { TestModule } from './../test/test.module';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('TestComponent', () => {

  let comp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
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
  it('should have __component null', async(() => {
    expect(comp.component()).toBeNull();
  }));
  it('this.__component should be null', async(() => {
    expect(comp.component()).toBeNull();
  }));
  it('this.__component should be created', async(() => {
    comp.create(DynamicComponent);
    expect(comp.component).toBeDefined();
  }));
  it('this.__component.instance model should be defined', async(() => {
    comp.create(DynamicComponent);
    expect(comp.component().instance.model).toBeDefined();
  }));
  it('this.model should be changed', async(() => {
    comp.create(DynamicComponent);
    comp.model = { test: 'changed' };
    expect(comp.model).toEqual({ test: 'changed' });
  }));
  it('__component instance model with key argument should be changed', async(() => {
    comp.create(DynamicComponent);
    comp.model = { defined: false };
    comp.set('model');
    expect(comp.component().instance.model).toEqual({ defined: false });
  }));
  it('__component instance model and key with array argument should be changed', async(() => {
    comp.create(DynamicComponent);
    comp.model = { defined: false };
    comp.set([
      'key',
      'model'
    ]);
    expect(comp.component().instance.key).toBe('notdefined');
    expect(comp.component().instance.model).toEqual({ defined: false });
  }));
  it('__component instance subscribe to event EventEmitter', async(() => {
    comp.create(DynamicComponent);
    comp.subscribe('event',
      (generatorOrNext: any) => {
        expect(generatorOrNext).toBe('event');
      },
      (error: any) => { },
      (complete: any) => { }
    );
    comp.component().instance.emit();
  }));
  it('__component instance subscribe to event EventEmitter and emit complete', async(() => {
    comp.create(DynamicComponent);
    comp.subscribe('event',
      (result: any) => { },
      (error: any) => { },
      (complete: any) => {
        console.info(`complete`);
      }
    );
    comp.component().instance.emitComplete();
  }));
  it('this.__component should be destroyed', async(() => {
    comp.create(DynamicComponent);
    comp.destroy();
    expect(comp.component()).toBeNull();
  }));
});
