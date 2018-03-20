
// external
import { NO_ERRORS_SCHEMA, ViewChild, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';

import { ApPrismModule } from '@angular-package/prism';
import { DocsExampleComponent } from './docs-example.component';

export let PACKAGE_CONFIG_TOKEN = new InjectionToken<any>('package.config');

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('DocsExampleComponent', () => {

  let comp: DocsExampleComponent;
  let debugElement: any;
  let fixture: ComponentFixture<DocsExampleComponent>;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DocsExampleComponent
      ],
      imports: [
        CommonModule,

        // @angular/material
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatTooltipModule,

        // @ngx-prism,
        // DocsExampleModule,
        ApPrismModule
      ],
      providers: [
        { provide: PACKAGE_CONFIG_TOKEN, useValue: {} }
      ]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(DocsExampleComponent);

    // get from fixture
    comp = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    debugElement = fixture.debugElement;
  });

  it('should be defined', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));
  it('should have div[class="example-viewer"]', async(() => {
    fixture.detectChanges();
    expect(nativeElement.querySelector('div[class="example-viewer"]')).toBeTruthy();
  }));
  it('should have div[class="example-viewer-title"] in div[class="example-viewer"]', async(() => {
    fixture.detectChanges();
    expect(nativeElement.querySelector('div[class="example-viewer"] > div[class="example-viewer-title"]')).toBeTruthy();
  }));
  it('should have property all @Input `undefined`', async(() => {
    expect(comp.css).not.toBeDefined();
    expect(comp.html).not.toBeDefined();
    expect(comp.title).not.toBeDefined();
    expect(comp.ts).not.toBeDefined();
  }));
  it('should have property `title` defined in component and have visible value in template', async(() => {
    const title = 'title-property';
    comp.title = title;
    fixture.detectChanges();
    expect(nativeElement.innerText).toContain(title);
  }));
});
