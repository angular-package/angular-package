// external
import { NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';

// internal
import { PrismComponent } from './prism.component';
import { ApPrismRxjsModule } from './prism.module';
import { PrismService } from './prism.service';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('PrismComponent', () => {

  let comp: PrismComponent;
  let debugElement: any;
  let fixture: ComponentFixture<PrismComponent>;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ApPrismRxjsModule ]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(PrismComponent);

    // get from fixture
    comp = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    debugElement = fixture.debugElement;
  });
  it('should be defined.', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));
  it('should have `pre` html element defined.', async(() => {
    expect(nativeElement.querySelector('pre')).toBeTruthy();
  }));
  it('should have pre > code html.', async(() => {
    comp.language = 'html';
    comp.code = `<p align="center">This is my paragraph</p>`;
    fixture.detectChanges();
    expect(nativeElement.querySelector('pre > code')).toBeTruthy();
  }));
  it('should have tag `code` with class `language-html` and sanitized innerHTML.', async(() => {
    comp.language = 'html';
    comp.code = `<p align="center">This is my paragraph</p>`;
    comp.ngAfterViewInit();
    fixture.detectChanges();
    comp.code$.subscribe({
      next: code => expect(nativeElement.querySelector('span[class*="token tag"]')).toBeTruthy()
    });
    expect(nativeElement.querySelector('code[class*="language-html"]')).toBeTruthy();
    expect(nativeElement.querySelector('code[class*="language-html"]').innerHTML)
      .toContain('<span class="token tag"><span class="token punctuation">&lt;</span>p</span>');
  }));
  it('should have interpolation working.', async(() => {
    comp.language = 'html';
    comp.interpolation = {
      interpolated: 'INTERPOLATED SUCCESSFULLY'
    };
    comp.code = `<p align="center">This is my {{interpolated}} paragraph</p>`;
    comp.ngAfterViewInit();
    fixture.detectChanges();
    comp.code$.subscribe({
      next: code => expect(nativeElement.querySelector('code[class*="language-html"]').innerHTML)
        .toContain(comp.interpolation['interpolated'])
    });
    expect(nativeElement.querySelector('code[class*="language-html"]')).toBeTruthy();
    expect(nativeElement.querySelector('code[class*="language-html"]').innerHTML)
      .toContain('<span class="token tag"><span class="token punctuation">&lt;</span>p</span>');
  }));
});
