// external
import {

} from 'jasmine';

// import { DebugElement } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import {
  async,
  ComponentFixture,
  TestBed,
  ComponentFixtureAutoDetect
} from '@angular/core/testing';
import { DebugElement } from '@angular/core';

// internal
import { ApChangeDetectorClass } from '@angular-package/change-detection/change-detector';
import { ApPrismComponent } from './prism.component';
import { ApPrismModule } from './prism.module';
import { ApPrismTemplate } from '../interface';
import { TestingClass } from '../../../test/test.class';
import { ApObject } from '../interface/src/object.interface';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('PrismComponent', () => {

  let comp: ApPrismComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<ApPrismComponent>;
  let nativeElement: HTMLElement;
  let test: TestingClass;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ApPrismModule],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: false }
      ]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ApPrismComponent);

    // get from fixture
    comp = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    debugElement = fixture.debugElement;
    test = new TestingClass(debugElement);
  });

  // #1.
  it('#1 should be defined', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));

  // #2.
  it('#2 should havent <pre>.', async(() => {
    // console.info(nativeElement);
    expect(nativeElement.querySelector('pre')).toBeNull();
  }));

  // #3.
  it('#3 should have <pre>.', async(() => {
    comp.language = 'html';
    comp.ngAfterViewInit();
    expect(nativeElement.querySelector('pre')).toBeTruthy();
  }));

  // #4.
  it('#4 should have pre > code html.', async(() => {
    comp.language = 'html';
    comp.ngAfterViewInit();
    expect(nativeElement.querySelector('pre > code')).toBeTruthy();
  }));

  // #5.
  it('#5 should have class language-html defined.', async(() => {
    comp.language = 'html';
    comp.ngAfterViewInit();
    fixture.detectChanges();
    expect(nativeElement.querySelector('code[class*="language-html"]')).toBeTruthy();
  }));

  // #6. ChangeDetector instance.
  it('#6 should have ApChangeDetectorClass instance.', async(() => {
    expect(comp.changeDetector instanceof ApChangeDetectorClass).toBeTruthy();
  }));

  // #7. Change detection with property properties.
  it('#7 should havent visible <pre class="language-html">', async(() => {
    comp.properties = {
      language: false
    };
    comp.language = 'html';
    expect(nativeElement.querySelector('pre[class*="language-html"]')).toBeFalsy();
  }));

  // #8. Change detection with property detection - it doesn't work properly.
  it('#8 should have visible <pre class="language-html">', async(() => {
    comp.detection = true;
    comp.properties = {
      ...comp.properties,
      language: false
    };
    comp.language = 'html';
    comp._detect();
    expect(nativeElement.querySelector('pre[class*="language-html"]')).toBeTruthy();
  }));

  // #9 @Input('attribute').
  it('#9 should have attributes.', async(() => {
    const attributes: ApPrismTemplate<ApObject<string>> = {
      code: {
        'code-attr-firstname': 'Sławomir',
        'code-attr-age': '23',
        'code-attr-weight': '127'
      },
      pre: {
        'pre-attr-firstname': 'Ścibor',
        'pre-attr-age': '27',
        'pre-attr-weight': '150'
      }
    };
    // Assign language.
    comp.language = 'html';
    // Assign attributes to component.
    comp.attribute = attributes;

    // Check if they were properly added to view.
    for (const attribute in { ...attributes.code, ...attributes.pre }) {
      if (attribute) {
        test.attribute(attribute, { ...attributes.code, ...attributes.pre }[attribute]);
      }
    }
  }));

  // #10. @Input('class').
  it('#10 should have class defined.', async(() => {
    const className: ApPrismTemplate<string[]> = {
      code: ['code-class1', 'code-class2'],
      pre: ['pre-class1', 'pre-class2']
    };
    comp.class = className;
    comp.language = 'html';
    comp.ngAfterViewInit();
    [...className.code, ...className.pre].forEach(name => {
      test.class(name);
    });
  }));

  // #11. `lastAttribute` property.
  it('#11 should have `lastAttribute` property store last `attribute` value.', async(() => {
    comp.attribute = {
      pre: {
        'attr': 'exist'
      },
      code: {
        'attr': 'exist'
      }
    };
    expect(comp.prismService._attribute).toEqual(comp.attribute);
  }));

  // #12. `_class` property.
  it('#12 should have `_class` property store last `class` value.', async(() => {
    comp.class = {
      pre: ['class', 'class1'],
      code: ['class2', 'class3']
    };
    expect(comp.prismService._class).toEqual({
      pre: ['class', 'class1'],
      code: ['class2', 'class3']
    });
  }));

  // #13. `callback()` method and `code` property.
  it('#13 should have `callback()` method working properly and `code` property visible in template.', async(() => {
    comp.callback = () => {
      comp.detection = true;
    };
    comp.code = `code is working properly`;
    comp.language = 'html';
    comp.ngAfterViewInit();
    expect(comp.detection).toBeTruthy();
    test.toContain(comp.code);
  }));

  // #14. `properties` linked to `changeDetector` object.
  it('#14. should have `properties` linked to `changeDetector` object.', async(() => {
    comp.properties = {
      language: false
    };
    // console.info(comp.properties.language);
    // console.info(comp.properties);
    expect(comp.properties.language).toEqual(comp.changeDetector.properties.language);
    comp.properties = {
      language: true
    };
    expect(comp.properties.language).toEqual(comp.changeDetector.properties.language);
  }));

  // #15. should have interpolated highlight code.
  it('#15. should have interpolated highlight code.', async(() => {
    comp.code = `{{test}} code is working properly`;
    comp.interpolation = {
      test: 'interpolation'
    };
    comp.language = 'html';
    fixture.detectChanges();
    test.toContain('interpolation');
  }));

  // #16. should have method _detach().
  it('#16. should have method _detach().', async(() => {
    comp.detection = true;
    expect(comp.detection).toBeTruthy();
    expect((comp._detach instanceof Function)).toBeTruthy();
    comp._detach();
    expect(comp.detection).toBeFalsy();
    expect(comp.changeDetector.detection).toBeFalsy();
  }));

  // #17. should have method _detect().
  it('#17. should have method _detect().', async(() => {
    comp.properties = {
      language: undefined
    };
    expect(comp.detection).toBeFalsy();
    expect((comp._detect instanceof Function)).toBeTruthy();
    comp.language = 'html';
    expect(debugElement.nativeElement.innerHTML).toEqual('<!--bindings={}-->');
    comp._detect();
    test.class(`language-${comp.language}`);
  }));

  // #18. should have method _reattach().
  it('#18. should have method _reattach().', async(() => {
    expect((comp._reattach instanceof Function)).toBeTruthy();
    expect(comp.detection).toBeFalsy();
    comp._reattach();
    expect(comp.detection).toBeTruthy();
    expect(comp.changeDetector.detection).toBeTruthy();
  }));

  // #19. should have hooks.
  // it('#19. should have hooks.', async(() => { }));
});
