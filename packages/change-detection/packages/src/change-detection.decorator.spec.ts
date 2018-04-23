// Make describe visible.
import { } from 'jasmine';

// external
import { NO_ERRORS_SCHEMA, ViewChild, ComponentRef } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { TestBed, async, inject, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';

// internal
import { DecoratorTestComponent } from '../../test/decorator.component';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('ApChangeDetection', () => {

  let comp: DecoratorTestComponent;
  let fixture: ComponentFixture<DecoratorTestComponent>;
  let debugElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DecoratorTestComponent
      ],
      providers: [
        // { provide: ComponentFixtureAutoDetect, useValue: true} // detectChanges.
      ]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorTestComponent);
    debugElement = fixture.debugElement;
    comp = fixture.componentInstance;
    spyOn(comp, '_detach').and.callThrough();
    spyOn(comp, '_reattach').and.callThrough();
    spyOn(comp['changeDetector'], 'detect').and.callThrough();
  });

  it('should create test component', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));
  it('should have changeDetector.cd equal "c"', async(() => {
    expect(comp['changeDetector'].cd).toEqual('c');

  }));
  it('should have detection falsy.', async(() => {
    expect(comp['changeDetector'].detection).toBeFalsy();
  }));
  it('should have detection true.', async(() => {
    comp.detection = true;
    expect(comp['changeDetector'].detection).toBeTruthy();
  }));
  it('should be changed when surname change.', async(() => {
    comp.surname = 'Changed';
    expect(debugElement.nativeElement.textContent).toContain(comp.surname);
    comp.surname = 'aaaa';
    expect(debugElement.nativeElement.textContent).toContain(comp.surname);
  }));

  it('should not be changed when surname change.', async(() => {
    comp._properties = {
      firstname: false,
      surname: false,
      age: true
    };
    comp.surname = 'Changed';
    expect(debugElement.nativeElement.textContent).not.toContain(comp.surname);
    expect(comp['changeDetector'].detect).toHaveBeenCalled();
  }));
  it('should add new property name to properties.', async(() => {
    comp._properties = {
      firstname: false
    };
    comp.firstname = 'firstname_changed';
    expect(debugElement.nativeElement.textContent).not.toContain(comp.firstname);
    comp._properties = {
      ...comp._properties,
      surname: true
    };
    comp.surname = 'surname_changed';
    expect(debugElement.nativeElement.textContent).toContain(comp.surname);
    expect(comp['changeDetector'].detect).toHaveBeenCalled();
  }));
  it('should remove property name from properties and setter.', async(() => {
    comp._properties = {
      firstname: true,
      surname: true
    };
    comp.firstname = 'firstname_changed';
    expect(debugElement.nativeElement.textContent).toContain(comp.firstname);
    comp._properties = {
      surname: true
    };
    comp.firstname = 'Martin';
    expect(debugElement.nativeElement.textContent).not.toContain(comp.firstname);
    expect(comp['changeDetector'].detect).toHaveBeenCalled();
  }));

  /*
    comp._detach()
  */
  it('should have access to default component method _detach().', async(() => {
    comp.detection = true;
    comp._detach();
    expect(comp.detection).toBeFalsy();
    expect(comp._detach).toHaveBeenCalled();
  }));

  /*
    comp._reattach()
  */
  it('should have access to default component method _reattach().', async(() => {
    comp.detection = false;
    comp._reattach();
    expect(comp.detection).toBeTruthy();
    expect(comp._reattach).toHaveBeenCalled();
  }));
});
