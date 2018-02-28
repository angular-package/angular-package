// Make describe visible.
import { } from 'jasmine';

// external
import { NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';

// internal
import { DynamicComponent } from '../test/dynamic.component';
import { ComponentLoaderComponent } from '../test/component-loader.component';
import { TestModule } from '../test/test.module';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('ComponentLoaderComponent', () => {

  let comp: ComponentLoaderComponent;
  let fixture: ComponentFixture<ComponentLoaderComponent>;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLoaderComponent);
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
  it('should have __component undefined', async(() => {
    expect(comp.__component).toBeUndefined();
  }));
  it('this.__component should be created', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__component).toBeDefined();
  }));
  it('this.__component.instance model should be defined', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__component.instance.model).toBeDefined();
  }));
  it('__component instance model with key argument should be changed', async(() => {
    comp.__create(DynamicComponent);
    comp.model = { defined: false };
    comp.__assign('model');
    expect(comp.__component.instance.model).toEqual({ defined: false });
  }));
  it('__component instance model and key with array argument should be changed', async(() => {
    comp.__create(DynamicComponent);
    comp.model = { defined: false };
    comp.__assign([
      'key',
      'model'
    ]);
    expect(comp.__component.instance.key).toBe('notdefined');
    expect(comp.__component.instance.model).toEqual({ defined: false });
  }));
  it('__component instance subscribe to event EventEmitter', async(() => {
    comp.__create(DynamicComponent);
    comp.__subscribe('event',
      (generatorOrNext: any) => {
        expect(generatorOrNext).toBe('event');
      },
      (error: any) => { },
      (complete: any) => { }
    );
    comp.__component.instance.emit();
  }));
  it('__component instance subscribe to event EventEmitter and emit complete', async(() => {
    comp.__create(DynamicComponent);
    comp.__subscribe('event',
      (result: any) => { },
      (error: any) => { },
      (complete: any) => { }
    );
    comp.__component.instance.emitComplete();
  }));
  it('this.__component should be destroyed', async(() => {
    comp.__create(DynamicComponent);
    comp.__destroy();
    expect(comp.__component).toBeNull();
  }));
});
