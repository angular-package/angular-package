// external
import { 

} from 'jasmine';

// import { NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { DebugElement } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
// import { By } from '@angular/platform-browser';
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';

// internal
import { TestComponent } from './test.component';
import { TestModule } from './test.module';
import { TestingClass } from '../../../test/test.class';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('TestComponent', () => {

  let comp: TestComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<TestComponent>;
  let nativeElement: HTMLElement;
  let test: TestingClass;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: false }
      ]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    comp = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    debugElement = fixture.debugElement;
    test = new TestingClass(debugElement);
  });

  // Main.
  it('should be defined', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));
  it('should have `ap-prism` html tag', async(() => {
    comp.id.ng_content = true;
    fixture.detectChanges();
    expect(nativeElement.querySelector('ap-prism')).toBeTruthy();
  }));
  it('should have `language` property defined', async(() => {
    expect(comp.language).toBe('html');
  }));

  // <ng-content></ng-content>.
  it('it should have `ng-content` highlighted and interpolated.', () => {
    comp.id.ng_content = true;
    fixture.detectChanges();
    test.selector('ap-prism[id="ng-content"]').toContain(comp.text);
  });
  it('should have component `ng-content` changed.', async(() => {
    comp.id.ng_content = true;
    comp.code.content = `<p align="left">{{interpolated}}</p>`;
    fixture.detectChanges();
    test.selector('ap-prism[id="ng-content"]').toContain(`left`);
  }));

  // @Input('code) - test attributes provided by template.
  /// css
  it('should have component property `code` with css working.', async(() => {
    comp.id.code_css = true;
    fixture.detectChanges();
    test.selector('ap-prism[id="code-css"]').toContain(`text-align`);
  }));
  /// html
  it('should have component property `code` with html working.', async(() => {
    comp.id.code_html = true;
    fixture.detectChanges();
    test.selector('ap-prism[id="code-html"]').toContain(`My p`);
  }));
  /// html + interpolation.
  it('should have component property `code` with html and interpolation working.', async(() => {
    comp.id.code_interpolation = true;
    fixture.detectChanges();
    test.selector('ap-prism[id="code-interpolation"]').toContain('ng-content-visible');
  }));

  /// [class~="something"].
  it('should have [class] set.', async(() => {
    comp.id.class = true;
    fixture.detectChanges();
    comp.className.pre.concat(comp.className.code).forEach(name => {
      test.class(name);
    });
  }));
});
