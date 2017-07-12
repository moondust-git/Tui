import {Component, EventEmitter, Input, Output} from "@angular/core";
/**
 * Created by tc949 on 2017/7/12.
 */
@Component({
  selector: 'Thourpicker',
  template: `
    <p>
      <button class="btn" (click)="prepage()">pre</button>
      <button class="btn" *ngFor="let hour of hours" (click)="changeDate(hour.date)">{{hour.date}}:00</button>
      <button class="btn" (click)="nextpage()">next</button>
    </p>`
})
export class THourPickerComponent {
  @Input("date")
  date: Date = new Date;

  hours: { date: number }[] = [];

  @Output("onChange")
  onchange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {
    this.getHours();
  }

  prepage() {
    this.date = new Date(this.date.getTime());
    this.date.setDate(this.date.getDate() - 1);
    this.onchange.emit(this.date);
  }

  nextpage() {
    this.date = new Date(this.date.getTime());
    this.date.setDate(this.date.getDate() + 1);
    this.onchange.emit(this.date);
  }

  changeDate(date) {
    this.date = new Date(this.date.getTime())
    this.date.setHours(date);
    this.onchange.emit(this.date);
  }
  getHours() {
    this.hours = [];
    for (let i = 0; i < 24; i++) {
      this.hours.push({date: i});
    }
  }
}
