import {AfterViewInit, Component, Input} from '@angular/core';
import {TProgressbarConfig} from './progressbar.config';
import {copyWithOutOverwrite} from '../../util/util';

@Component({
  selector: 'Tprogress',
  template: `
    <div class="progress-bar bg-{{level}}"
         [ngClass]="{'progress-bar-animated':animate,'progress-bar-striped':striped}"
         role="progressbar"
         [attr.aria-valuemin]="0" [attr.aria-valuemax]="max"
         [ngStyle]="{'width':width}"
    >
      <ng-content></ng-content>
    </div>
  `, host: {
    "class": "progress"
  }
})
export class TProgressbarCmt implements AfterViewInit {

  /** if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4) */
  @Input() public animate: boolean;
  /** maximum total value of progress element */
  @Input() public max: number;


  /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
  @Input() public level: string;
  /** current value of progress bar */


  @Input() public striped: boolean;

  width: string = '0%';

  @Input("value")
  set value(value: number) {
    if (this.max <= 0) {
      this.width = '0%';
      return;
    }
    if (value > this.max) {
      this.width = '100%';
      return;

    }
    if (value < 0) {
      this.width = '0%';
      return;
    }
    this.width = (100 * (value) / (this.max)) + '%'
  }

  public constructor(config: TProgressbarConfig) {
    copyWithOutOverwrite(config, this);
  }

  ngAfterViewInit(): void {
  }
}
