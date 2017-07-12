import {Component, EventEmitter, Input, Output} from "@angular/core";
/**
 * Created by tc949 on 2017/7/12.
 */
@Component({
  selector: "Tmonthpicker",
  template: `
    <p>
      <button class="btn " (click)="prepage()">pre</button>
      <button class="btn" *ngFor="let month of months" (click)="changeValue(month.date)">
        {{month.date | date:monthShowFormat}}
      </button>
      <button class="btn " (click)="nextpage()">next</button>
    </p>
  `
})
export class TMonthPickerComponent {
  @Input("date")
  date: Date = new Date;

  @Input("monthShowFormat")
  monthShowFormat: string = "MMMM";

  months: { date: Date }[] = [];

  @Output("onChange")
  onChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {
    this.getMonths();
  }

  changeValue(date) {
    this.date = date;
    this.onChange.emit(date);
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
      this.months.push({date: m});
    }
  }
}
