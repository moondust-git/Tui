import {Component, OnInit} from '@angular/core';

import {DatePickerInnerComponent} from './datepicker-inner.cmt';

@Component({
  selector: 'yearpicker',
  template: `
    <table *ngIf="datePicker.datepickerMode==='year'" role="grid" class="table-condensed">
      <thead>
      <tr>
        <th (click)="datePicker.move(-1)" tabindex="-1" class="prev" style="visibility: visible;">
          &lt;
        </th>
        <th [attr.colspan]="5" class="switch" [ngClass]="{disabled: datePicker.datepickerMode === datePicker.maxMode}"
            (click)="datePicker.toggleMode()">
          {{title}}
        </th>
        <th (click)="datePicker.move(1)" tabindex="-1" class="next" style="visibility: visible;">
          &gt;
        </th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let rowz of rows">
        <td [attr.colspan]="7">
          <span class="year old" *ngFor="let dtz of rowz"
                [ngClass]="{'active':dtz.selected,disabled: dtz.disabled}"
                (click)="datePicker.select(dtz.date)">{{dtz.label}}</span>
        </td>
      </tr>
      </tbody>
    </table>
  `
})
export class YearPickerComponent implements OnInit {
  public datePicker: DatePickerInnerComponent;
  public title: string;
  public rows: any[] = [];

  public constructor(datePicker: DatePickerInnerComponent) {
    this.datePicker = datePicker;
  }

  public get isBs4(): boolean {
    return true;
  }

  public ngOnInit(): void {
    let self = this;

    this.datePicker.stepYear = {years: this.datePicker.yearRange};

    this.datePicker.setRefreshViewHandler(function (): void {
      let years: any[] = new Array(this.yearRange);
      let date: Date;
      let start = self.getStartingYear(this.activeDate.getFullYear());

      for (let i = 0; i < this.yearRange; i++) {
        date = new Date(start + i, 0, 1);
        date = this.fixTimeZone(date);
        years[i] = this.createDateObject(date, this.formatYear);
        years[i].uid = this.uniqueId + '-' + i;
      }

      self.title = [years[0].label,
        years[this.yearRange - 1].label].join(' - ');
      self.rows = this.split(years, self.datePicker.yearColLimit);
    }, 'year');

    this.datePicker.setCompareHandler(function (date1: Date, date2: Date): number {
      return date1.getFullYear() - date2.getFullYear();
    }, 'year');

    this.datePicker.refreshView();
  }

  protected getStartingYear(year: number): number {
    // todo: parseInt
    return ((year - 1) / this.datePicker.yearRange) * this.datePicker.yearRange + 1;
  }
}
