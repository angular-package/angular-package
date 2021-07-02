// external
import {
  AfterViewInit,
  Component,
  ChangeDetectionStrategy,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApSubject } from '@angular-package/reactive/subject';

// internal
import { PrismClass } from './prism.class';
import { PrismService } from './prism.service';
import { SanitizedType } from './prism.type';

/**
 * @export
 * @class PrismComponent
 * @extends {PrismClass}
 * @implements {AfterViewInit}
 * @implements {OnChanges}
 * @implements {OnInit}
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'apPrismRxjs',
  preserveWhitespaces: false,
  providers: [ PrismService ],
  selector: 'ap-prism',
  templateUrl: './prism.component.html'
})
@ApSubject<SanitizedType>('code', 'language')
export class PrismComponent extends PrismClass implements AfterViewInit, OnChanges, OnInit {

  code$?: Observable<SanitizedType>;
  code$$$?: Subscription;
  language$?: Observable<SanitizedType>;
  language$$$?: Subscription;

  /**
   * Creates an instance of PrismComponent.
   * @param {PrismService} prismService
   * @memberof PrismComponent
   */
  constructor(public prismService: PrismService) {
    super(prismService);
  }

  /**
   * @memberof PrismComponent
   */
  ngOnInit() {
    if (this.code$) {
      this.code$$$ = this.code$.subscribe({
        next: (code: SanitizedType) => {
          if (this.codeElementRef && this.change === true) {
            this.codeElementRef.nativeElement.innerHTML = code;
            this.prismService.highlightElement(this.codeElementRef);
            this.change = false;
          }
        }
      });  
    }
    if (this.language$) {
      this.language$$$ = this.language$.subscribe({
        next: () => {
          if (this.codeElementRef && this.change === true) {
            this.prismService.highlightElement(this.codeElementRef);
            this.change = false;
          }
        }
      });        
    }
  }

  /**
   * @memberof PrismComponent
   */
  ngAfterViewInit() {
    if (this.codeElementRef) {
      this.prismService.highlightElement(this.codeElementRef);
    }
  }

  /**
   * Detect `code` and `language` property changes.
   * @param {SimpleChanges} changes
   * @memberof PrismComponent
   */
  ngOnChanges(changes: SimpleChanges) {
    this.onChanges(['code', 'language'], changes);
  }
}
