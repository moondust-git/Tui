import {Component, EventEmitter, Input, Output} from "@angular/core";
import {TDatetimePickerComponent} from "./datetimepicker.cmt";
/**
 * Created by tc949 on 2017/7/12.
 */
@Component({
  selector: "Tmonthpicker",
  template: `


    <table class="table-condensed">
      <thead>
      <tr>
        <th class="prev" style="visibility: visible;" (click)="prepage()">&lt;</th>
        <th colspan="5" class="switch" (click)="timepicker.nextPicker('year')">{{date | date:format}}</th>
        <th class="next" style="visibility: visible;" (click)="nextpage()">&gt;</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td colspan="7">
          <span class="month" *ngFor="let month of months" [ngClass]="{'active':date.getMonth()===month.getMonth()}"
                (click)="changeValue(month)">{{month | date:monthShowFormat}}</span></td>
      </tr>
      </tbody>
    </table>

  `
})
export class TMonthPickerComponent {
  @Input("date")
  date: Date = new Date;

  @Input("format")
  format: string = 'yyyy';

  @Input("monthShowFormat")
  monthShowFormat: string = "MMM";

  months: Date[] = [];

  @Output("onChange")
  onChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(public timepicker: TDatetimePickerComponent) {
    this.getMonths();
  }

  changeValue(date) {
    this.date = date;
    this.onChange.emit(date);
    this.timepicker.nextPicker('day');
  }

  nextpage() {
    let year = this.date.getFullYear() + 1;
    this.date = new Date(this.date.getTime());
    this.date.setUTCFullYear(year);
    this.onChange.emit(this.date);
    this.getMonths();
  }

  prepage() {
    let year = this.date.getFullYear() - 1;
    this.date = new Date(this.date.getTime());
    this.date.setUTCFullYear(year);
    this.onChange.emit(this.date);
    this.getMonths();
  }

  getMonths() {
    this.months = [];
    for (let i = 0; i < 12; i++) {
      let m = new Date(this.date.getTime());
      m.setMonth(i);
      this.months.push(m);
    }
  }
}
