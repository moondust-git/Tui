import {AfterViewInit, Component, Input} from '@angular/core';
import {TProgressbarConfig} from './progressbar.config';
import {copyWithOutOverwrite} from '../../util/util';

@Component({
  selector: 'Tprogressbar',
  template: `
    <div Tprogress [animate]="animate" [max]="max">
      <Tbar [type]="type" [value]="value" [striped]="striped" [animate]="animate">
        <ng-content></ng-content>
      </Tbar>
    </div>
  `
})
export class TProgressbarCmt implements AfterViewInit {

  /** if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4) */
  @Input() public animate: boolean;
  /** maximum total value of progress element */
  @Input() public max: number;
  /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
  @Input() public type: string;
  /** current value of progress bar */
  @Input() public value: number;

  @Input() public striped: boolean;

  public constructor(config: TProgressbarConfig) {
    copyWithOutOverwrite(config, this);
    console.log('asd')
  }

  ngAfterViewInit(): void {
    console.log(this.value)
    console.log(this.type)
  }
}
