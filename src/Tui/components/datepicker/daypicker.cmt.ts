import {AfterViewInit, Component, EventEmitter, Input, Output} from "@angular/core";
import {TDatetimePickerComponent} from "./datetimepicker.cmt";
import {isNullOrUndefined} from "util";
import {PickerModal} from "./picker.base";
/**
 * Created by tc949 on 2017/7/12.
 */


@Component({
  selector: "Tdaypicker",
  template: `
    <span class="dow" *ngFor="let w of weeks">{{w}}</span>
    <span *ngFor="let day of days" class="day" (click)="changeValue(day.date)"
          [ngClass]="{'old':day.old,'new ':day.new,'today':day.today,'active':isActive(day.date,picker.date)}">
          {{day.date | date:'dd' }}
    </span>
  `
})
export class TDayPickerComponent implements PickerModal {

  @Input("weeks")
  weeks: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  @Input("format")
  format: string = 'MMMM yyyy';

  days: any[] = [];

  @Output("onChange")
  onChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(public picker: TDatetimePickerComponent) {
    picker.subPicker = this;
    this.getDays();
    console.log("create daypicker")
  }

  changeValue(date) {
    this.picker.date = date;
    this.onChange.emit(this.picker.date);
    this.picker.pickerModel = 'hour';
  }

  prepage() {
    this.picker.date = new Date(this.picker.date.getTime());
    this.picker.date.setMonth(this.picker.date.getMonth() - 1);
    this.onChange.emit(this.picker.date);
    this.getDays();
  }

  nextpage() {
    this.picker.date = new Date(this.picker.date.getTime());
    this.picker.date.setMonth(this.picker.date.getMonth() + 1);
    this.onChange.emit(this.picker.date);
    this.getDays();
  }

  headerClick() {
    this.picker.pickerModel = "month";
  }

  getFormat() {
    return this.format;
  }

  private getFirstDayWeek(date: Date): number {
    let new_date = new Date(date.getTime());
    new_date.setDate(1);
    let res = new_date.getDay();
    if (res === 0) {
      res = 7;
    }
    return -res + 1;
  }

  private getLastDayInMonth(date: Date) {
    let new_year = date.getFullYear();    //取当前地年份
    let new_month = date.getMonth() + 1;//取下一个月地第一天，方便计算（最后一天不固定）
    let new_date = new Date();                //取当年当月中地第一天
    new_date.setUTCFullYear(new_year, new_month, 1);
    return new Date(new_date.getTime() - 1000 * 60 * 60 * 24);
  }

  private getDays() {
    this.days = [];
    let firstday_week = this.getFirstDayWeek(this.picker.date);
    let lastDayInmonth = this.getLastDayInMonth(this.picker.date);
    for (let i = 0; i < 42; i++) {
      let new_date = new Date(this.picker.date.getTime());
      new_date.setDate(firstday_week);
      this.days.push(
        {
          date: new_date,
          old: firstday_week <= 0,
          new: new_date > lastDayInmonth,
          today: this.isActive(new_date, new Date())
        }
      )
      firstday_week++;
    }
  }

  isActive(date: Date, date2: Date) {
    if (date.getDate() != date2.getDate()) {
      return false;
    }
    if (date.getMonth() != date2.getMonth()) {
      return false
    }
    if (date.getFullYear() != date2.getFullYear()) {
      return false;
    }
    return true;
  }
}
