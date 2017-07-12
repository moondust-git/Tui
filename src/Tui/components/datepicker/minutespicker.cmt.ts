import {AfterViewInit, Component, EventEmitter, Input, Output} from "@angular/core";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {TDatetimePickerComponent} from "./datetimepicker.cmt";
/**
 * Created by tc949 on 2017/7/12.
 */
@Component({
  selector: 'Tminutespicker',
  template: `
    <div class="datetimepicker-minutes" style="display: block;">
      <table class=" table-condensed">
        <thead>
        <tr>
          <th class="prev" style="visibility: visible;" (click)="prepage()">&lt;</th>
          <th colspan="5" class="switch" (click)="timepicker.nextPicker('hour')">14 June 2012</th>
          <th class="next" style="visibility: visible;" (click)="nextpage()">&gt;</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td colspan="7">
            <span class="minute" *ngFor="let minute of minutes" [ngClass]="{'active':minute===date.getMinutes()}"
                  (click)="changeDate(minute)">{{date.getHours()}}:{{minute < 10 ? '0' + minute : minute}}</span>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <th colspan="7" class="today" style="display: none;">Today</th>
        </tr>
        </tfoot>
      </table>
    </div>`
})
export class TMinutesPickerComponent implements AfterViewInit {
  @Input("date")
  date: Date = new Date;
  minutes: number[] = [];

  @Output("onChange")
  onchange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(public timepicker: TDatetimePickerComponent) {
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
    // this.timepicker.nextPicker('day');
  }

  ngAfterViewInit() {
  }

  getMinutes() {
    this.minutes = [];
    for (let i = 0; i <= 11; i++) {
      this.minutes.push(5 * i);
    }
  }
}
