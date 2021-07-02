// external
import {

} from 'jasmine';

// import { DebugElement, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
// import { By } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

// internal
import { TestComponent } from './test.component';
import { TestModule } from './test.module';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('TestComponent', () => {

  let comp: TestComponent;
  // let debugElement: DebugElement;
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

    // get from fixture
    comp = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    // debugElement = fixture.debugElement;
  });

  it('should be defined', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));

  it('should have `ap-prism` html tag', async(() => {
    expect(nativeElement.querySelector('ap-prism')).toBeTruthy();
  }));
  it('should have `language` property defined', async(() => {
    expect(comp.language).toBe('html');
  }));
});
