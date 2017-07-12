import {Component, EventEmitter, Input, Output} from "@angular/core";
import {TDatetimePickerComponent} from "./datetimepicker.cmt";
/**
 * Created by tc949 on 2017/7/12.
 */
@Component({
  selector: 'Thourpicker',
  template: `
    <div class="datetimepicker-hours" style="display: block;">
      <table class=" table-condensed">
        <thead>
        <tr>
          <th class="prev" style="visibility: visible;" (click)="prepage()">&lt;</th>
          <th colspan="5" class="switch" (click)="timepicker.nextPicker('day')">{{date | date:format}}</th>
          <th class="next" style="visibility: visible;" (click)="nextpage()">&gt;</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td colspan="7">
            <span class="hour" *ngFor="let hour of hours" [ngClass]="{'active':hour.active}"
                  (click)="changeDate(hour.date)">{{hour.date}}:00</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>`
})
export class THourPickerComponent {
  @Input("date")
  date: Date = new Date;

  @Input("format")
  format: string = "dd M yyyy";

  hours: { date: number, active: boolean }[] = [];

  @Output("onChange")
  onchange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(public timepicker: TDatetimePickerComponent) {
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
    this.timepicker.nextPicker('minute');
    this.getHours();
  }

  getHours() {
    this.hours = [];

    for (let i = 0; i < 24; i++) {
      this.hours.push({date: i, active: this.date.getHours() === i});
    }
  }
}
