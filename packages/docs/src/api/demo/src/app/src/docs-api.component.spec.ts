// import { BrowserModule } from '@angular/platform-browser';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CommonModule } from '@angular/common';
import { PrismModule } from '@ngx-prism/rxjs';
import { MarkdownModule } from '@ngx-markdown/core';

import { DocsApiComponent } from './docs-api.component';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('DocsApiComponent', () => {

  let comp: DocsApiComponent;
  let fixture: ComponentFixture<DocsApiComponent>;
  let debugElement: any;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DocsApiComponent
      ],
      imports: [
        MarkdownModule.forRoot({
          // this options are defaults when use forChild().
          options: {
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
          },
          // template while loading
          loadingTemplate: `<div> Loading ... </div>`
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsApiComponent);
    comp = fixture.componentInstance;
    debugElement = fixture.debugElement;
    nativeElement = fixture.nativeElement;
  });

  it('should have been created.', () => {
    expect(comp).toBeTruthy();
  });

  it('should have been created.', () => {
    comp.header = [
      'Name', 'Description'
    ];
    comp.description = 'My description';
    comp.body = [
      {
        name: `aaaa`,
        description: `bbbb`
      }
    ];
    fixture.detectChanges();
  });
});
