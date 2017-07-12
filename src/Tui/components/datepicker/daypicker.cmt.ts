import {Component, EventEmitter, Input, Output} from "@angular/core";
/**
 * Created by tc949 on 2017/7/12.
 */


@Component({
  selector: "Tdaypicker",
  template: `
    <p>
      <button class="btn" (click)="prepage()">pre</button>
      <button class="btn" *ngFor="let day of days" (click)="changeValue(day.date)">{{day.date | date:'dd'}}</button>
      <button class="btn" (click)="nextpage()">next</button>
    </p>

  `
})
export class TDayPickerComponent {


  @Input("date")
  date: Date = new Date;

  days: { date: Date }[] = [];
  @Output("onChange")
  onChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {
    this.getDays();
  }


  getDays() {
    this.days = [];
    let l = this.getDaysInMonth(this.date);
    for (let i = 1; i <= l; i++) {
      let new_date = new Date(this.date.getTime());
      new_date.setDate(i);
      this.days.push({date: new_date})
    }
  }

  getDaysInMonth(date: Date) {
    let new_year = date.getFullYear();    //取当前地年份
    let new_month = date.getMonth() + 1;//取下一个月地第一天，方便计算（最后一天不固定）
    let new_date = new Date();                //取当年当月中地第一天
    new_date.setUTCFullYear(new_year, new_month, 1);
    console.log(1000 * 60 * 60 * 24);
    return (new Date(new_date.getTime() - 1000 * 60 * 60 * 24)).getDate();
  }

  changeValue(date) {
    this.date = date;
    this.onChange.emit(this.date);
  }

  prepage() {
    this.date = new Date(this.date.getTime());
    this.date.setMonth(this.date.getMonth() - 1);
    this.onChange.emit(this.date);
    this.getDays();
  }
  nextpage() {
    this.date = new Date(this.date.getTime());
    this.date.setMonth(this.date.getMonth() + 1);
    this.onChange.emit(this.date);
    this.getDays();
  }
}
