import {Component, Host, Input, OnDestroy, OnInit} from '@angular/core';

import {TProgressDirective} from './progress.directive';

// todo: number pipe
// todo: use query from progress?
@Component({
  selector: 'Tbar',
  template: `
    <div class="progress-bar bg-{{type}}"
         style="min-width: 0;"
         role="progressbar"
         [ngClass]="{'progress-bar-striped':striped,'progress-bar-animated':animate}"
         [ngStyle]="{width: (percent < 100 ? percent : 100) + '%', transition: transition}"
         aria-valuemin="0"
         [attr.aria-valuenow]="value"
         [attr.aria-valuetext]="percent.toFixed(0) + '%'"
         [attr.aria-valuemax]="max">
      <ng-content></ng-content>
    </div>
  `,
  host: {
    'style': 'width:100%'
  }
})
export class TBarComponent implements OnInit, OnDestroy {
  public max: number;

  /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
  @Input() public type: string;

  /** current value of progress bar */
  @Input()
  public get value(): number {
    return this._value;
  }

  @Input()
  striped: boolean;

  @Input()
  animate: boolean;

  public set value(v: number) {
    if (!v && v !== 0) {
      return;
    }
    this._value = v;
    this.recalculatePercentage();
  }

  public percent: number = 0;
  public transition: string="";
  public progress: TProgressDirective;

  protected _value: number;

  public constructor(@Host() progress: TProgressDirective) {
    this.progress = progress;
  }

  public ngOnInit(): void {
    this.progress.addBar(this);
  }

  public ngOnDestroy(): void {
    this.progress.removeBar(this);
  }

  public recalculatePercentage(): void {
    this.percent = +(100 * this.value / this.progress.max).toFixed(2);

    let totalPercentage = this.progress.bars.reduce(function (total: number, bar: TBarComponent): number {
      return total + bar.percent;
    }, 0);

    if (totalPercentage > 100) {
      this.percent -= totalPercentage - 100;
    }
  }
}
