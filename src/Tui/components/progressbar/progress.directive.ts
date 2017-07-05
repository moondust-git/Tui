import {Directive, HostBinding, Input} from '@angular/core';

import {TBarComponent} from './bar.component';

@Directive({selector: '[Tprogress]'})
export class TProgressDirective {
  /** if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4) */
  @Input() public animate: boolean;

  /** maximum total value of progress element */
  @HostBinding('attr.max')
  @Input()
  public get max(): number {
    return this._max;
  }

  public set max(v: number) {
    this._max = v;
    this.bars.forEach((bar: TBarComponent) => {
      bar.recalculatePercentage();
    });
  }

  @HostBinding('class.progress') public addClass: boolean = true;

  public bars: any[] = [];

  protected _max: number = 100;

  public addBar(bar: TBarComponent): void {
    if (!this.animate) {
      bar.transition = 'none';
    }
    this.bars.push(bar);
  }

  public removeBar(bar: TBarComponent): void {
    this.bars.splice(this.bars.indexOf(bar), 1);
  }
}
