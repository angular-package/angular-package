import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  selector: 'ap-spectre-input',
  templateUrl: './spectre-input.component.html',
  styleUrls: [
    './spectre-input.component.scss'
  ]
})

export class SpectreInputComponent implements OnInit {

  @Input() id: string;
  @Input() placeHolder = 'Placeholder';
  @Input() type = 'text';
  @Input() value = '';

  constructor() { }

  ngOnInit(): void {
  }

}
