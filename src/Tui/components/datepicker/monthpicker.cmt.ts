import {Component, OnInit} from '@angular/core';

import {DatePickerInnerComponent} from './datepicker-inner.cmt';

@Component({
  selector: 'monthpicker',
  template: `
    <table *ngIf="datePicker.datepickerMode==='month'" role="grid" class="table-condensed">
      <thead>
      <tr>
        <th>
          <button type="button" class="btn btn-secondary btn-block btn-sm "
                  (click)="datePicker.move(-1)" tabindex="-1">
            &lt;
          </button>
        </th>
        <th [attr.colspan]="((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2">
          <button [id]="datePicker.uniqueId + '-title'"
                  type="button" class="btn btn-secondary btn-block btn-sm"
                  (click)="datePicker.toggleMode()"
                  [disabled]="datePicker.datepickerMode === maxMode"
                  [ngClass]="{disabled: datePicker.datepickerMode === maxMode}" tabindex="-1">
            <strong>{{title}}</strong>
          </button>
        </th>
        <th>
          <button type="button" class="btn btn-secondary btn-block btn-sm pull-right"
                  (click)="datePicker.move(1)" tabindex="-1">
            &gt;
          </button>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let rowz of rows">
        <td *ngFor="let dtz of rowz" class="text-center" role="gridcell" id="{{dtz.uid}}" [ngClass]="dtz.customClass">
          <button type="button" style="min-width:100%;" class="btn btn-default"
                  [ngClass]="{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}"
                  [disabled]="dtz.disabled"
                  (click)="datePicker.select(dtz.date)" tabindex="-1">
            <span
              [ngClass]="{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}">{{dtz.label}}</span>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  `
})
export class MonthPickerComponent implements OnInit {
  public title: string;
  public rows: any[] = [];
  public datePicker: DatePickerInnerComponent;
  public maxMode: string;

  public constructor(datePicker: DatePickerInnerComponent) {
    this.datePicker = datePicker;
  }

  public get isBs4(): boolean {
    return true;
  }

  public ngOnInit(): void {
    let self = this;

    this.datePicker.stepMonth = {years: 1};

    this.datePicker.setRefreshViewHandler(function (): void {
      let months: any[] = new Array(12);
      let year: number = this.activeDate.getFullYear();
      let date: Date;

      for (let i = 0; i < 12; i++) {
        date = new Date(year, i, 1);
        date = this.fixTimeZone(date);
        months[i] = this.createDateObject(date, this.formatMonth);
        months[i].uid = this.uniqueId + '-' + i;
      }

      self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
      self.rows = this.split(months, self.datePicker.monthColLimit);
    }, 'month');

    this.datePicker.setCompareHandler(function (date1: Date, date2: Date): number {
      let d1 = new Date(date1.getFullYear(), date1.getMonth());
      let d2 = new Date(date2.getFullYear(), date2.getMonth());
      return d1.getTime() - d2.getTime();
    }, 'month');

    this.datePicker.refreshView();
  }

  // todo: key events implementation
}
