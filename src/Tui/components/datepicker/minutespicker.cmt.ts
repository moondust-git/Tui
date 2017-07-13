import {AfterViewInit, Component, EventEmitter, Input, Output} from "@angular/core";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {TDatetimePickerComponent} from "./datetimepicker.cmt";
import {PickerModal} from "./picker.base";
/**
 * Created by tc949 on 2017/7/12.
 */
@Component({
  selector: 'Tminutespicker',
  template: `
    <span class="minute" *ngFor="let minute of minutes"
          [ngClass]="{'active':minute===timepicker.date.getMinutes()}"
          (click)="changeValue(minute)">{{timepicker.date.getHours()}}:{{minute < 10 ? '0' + minute : minute}}</span>
  `
})
export class TMinutesPickerComponent implements PickerModal {

  minutes: number[] = [];

  @Input("format")
  format: string = 'dd MMMM yyyy';

  @Output("onChange")
  onchange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(public timepicker: TDatetimePickerComponent) {
    timepicker.subPicker = this;
    this.getMinutes();
  }

  prepage() {
    this.timepicker.date = new Date(this.timepicker.date.getTime());
    this.timepicker.date.setHours(this.timepicker.date.getHours() - 1);
    this.onchange.emit(this.timepicker.date);
  }

  nextpage() {
    this.timepicker.date = new Date(this.timepicker.date.getTime());
    this.timepicker.date.setHours(this.timepicker.date.getHours() - 1);
    this.onchange.emit(this.timepicker.date);
  }

  changeValue(date) {
    this.timepicker.date = new Date(this.timepicker.date.getTime());
    this.timepicker.date.setMinutes(date);
    this.onchange.emit(this.timepicker.date);
  }


  headerClick() {
    this.timepicker.pickerModel = 'hour'
  }
  getFormat() {
    return this.format;
  }

  private getMinutes() {
    this.minutes = [];
    for (let i = 0; i <= 11; i++) {
      this.minutes.push(5 * i);
    }
  }
}
