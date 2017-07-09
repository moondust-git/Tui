import {AfterViewInit, Component, Input} from '@angular/core';
import {TProgressbarConfig} from './progressbar.config';
import {copyWithOutOverwrite} from '../../util/util';

@Component({
  selector: 'Tprogress',
  template: `
    <div class="progress-bar bg-{{level}}"
         [ngClass]="{'progress-bar-animated':animate,'progress-bar-striped':striped}"
         role="progressbar" [attr.aria-valuenow]="value"
         [attr.aria-valuemin]="min" [attr.aria-valuemax]="max"
         [ngStyle]="{'width':getWidth()}"
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

  @Input() public min: number;

  /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
  @Input() public level: string;
  /** current value of progress bar */
  @Input() public value: number;

  @Input() public striped: boolean;

  public getWidth(): string {
    if (this.max - this.min <= 0) return 0 + '%';
    if (this.value > this.max) {
      this.value = this.max;
    }
    if (this.value < this.min) {
      this.value = this.min;
    }
    return (100 * (this.value) / (this.max - this.min)) + '%'
  }

  public constructor(config: TProgressbarConfig) {
    copyWithOutOverwrite(config, this);
  }

  ngAfterViewInit(): void {
  }
}
