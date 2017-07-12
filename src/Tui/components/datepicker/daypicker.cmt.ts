import {Component, EventEmitter, Input, Output} from "@angular/core";
import {TDatetimePickerComponent} from "./datetimepicker.cmt";
/**
 * Created by tc949 on 2017/7/12.
 */


@Component({
  selector: "Tdaypicker",
  template: `
    <table class=" table-condensed">
      <thead>
      <tr>
        <th class="prev" style="visibility: visible;" (click)="prepage()">&lt;</th>
        <th colspan="5" class="switch" (click)="picker.nextPicker('month')">{{date | date:format}}</th>
        <th class="next" style="visibility: visible;" (click)="nextpage()">&gt;</th>
      </tr>
      <tr>
        <th class="dow" *ngFor="let w of weeks">{{w}}</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let row of days">
        <td class="day" *ngFor="let day of row"
            [ngClass]="{'active':date&&day.getDate()===date.getDate()}"
            (click)="changeValue(day)">
          {{day | date:'dd' }}
        </td>
      </tr>
      </tbody>
    </table>
  `
})
export class TDayPickerComponent {

  @Input("date")
  date: Date = new Date();
  weeks: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  @Input("format")
  format: string = 'MMMM yyyy';

  days: Array<Array<Date>> = new Array(6);
  @Output("onChange")
  onChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(public picker: TDatetimePickerComponent) {
    this.getDays();
  }

  getDays() {
    let firstday_week = this.getFirstDayWeek(this.date);
    let today = this.date.getDate();
    for (let i = 0; i < this.days.length; i++) {
      this.days[i] = new Array(7);
      for (let j = 0; j < this.days[i].length; j++) {
        let new_date = new Date(this.date.getTime());
        new_date.setDate(firstday_week);
        this.days[i][j] = new_date;
        firstday_week++;
      }
    }
  }

  changeValue(date) {
    this.date = date;
    this.onChange.emit(this.date);
    this.picker.nextPicker('hour');
  }

  prepage() {
    this.date = new Date(this.date.getTime());
    this.date.setMonth(this.date.getMonth() - 1);
    this.onChange.emit(this.date);
  }

  nextpage() {
    this.date = new Date(this.date.getTime());
    this.date.setMonth(this.date.getMonth() + 1);
    this.onChange.emit(this.date);
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
}
