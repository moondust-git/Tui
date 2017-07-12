import {Component, EventEmitter, Input, Output} from "@angular/core";
/**
 * Created by tc949 on 2017/7/12.
 */
@Component({
  selector: 'Tminutespicker',
  template: `
    <p>
      <button class="btn" (click)="prepage()">pre</button>
      <button class="btn" *ngFor="let minute of minutes" (click)="changeDate(minute.date)">{{minute.date}}</button>
      <button class="btn" (click)="nextpage()">next</button>
    </p>`
})
export class TMinutesPickerComponent {

  @Input("date")
  date: Date = new Date;
  minutes: { date: number }[] = [];

  @Output("onChange")
  onchange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {
    this.getMinutes();
  }

  prepage() {
    this.date = new Date(this.date.getTime());
    this.date.setHours(this.date.getHours() - 1);
    this.onchange.emit(this.date);
  }

  nextpage() {
    this.date = new Date(this.date.getTime());
    this.date.setHours(this.date.getHours() - 1);
    this.onchange.emit(this.date);
  }

  changeDate(date) {
    this.date = new Date(this.date.getTime());
    this.date.setMinutes(date);
    this.onchange.emit(this.date);
  }

  getMinutes() {
    this.minutes = [];
    for (let i = 0; i <= 11; i++) {
      this.minutes.push({date: 5 * i});
    }
  }
}
