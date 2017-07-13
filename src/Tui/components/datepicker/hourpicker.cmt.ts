import {Component, EventEmitter, Input, Output} from "@angular/core";
import {TDatetimePickerComponent} from "./datetimepicker.cmt";
import {PickerModal} from "./picker.base";
/**
 * Created by tc949 on 2017/7/12.
 */
@Component({
  selector: 'Thourpicker',
  template: `

    <span class="hour" *ngFor="let hour of hours" [ngClass]="{'active':hour.active}"
          (click)="changeValue(hour.date)">{{hour.date}}:00</span>

  `
})
export class THourPickerComponent implements PickerModal {


  @Input("format")
  format: string = "dd MMMM yyyy";

  hours: { date: number, active: boolean }[] = [];

  @Output("onChange")
  onchange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(public timepicker: TDatetimePickerComponent) {
    timepicker.subPicker = this;
    this.getHours();
  }


  prepage() {
    this.timepicker.date = new Date(this.timepicker.date.getTime());
    this.timepicker.date.setDate(this.timepicker.date.getDate() - 1);
    this.onchange.emit(this.timepicker.date);
  }

  nextpage() {
    this.timepicker.date = new Date(this.timepicker.date.getTime());
    this.timepicker.date.setDate(this.timepicker.date.getDate() + 1);
    this.onchange.emit(this.timepicker.date);
  }

  changeValue(date) {
    this.timepicker.date = new Date(this.timepicker.date.getTime())
    this.timepicker.date.setHours(date);
    this.onchange.emit(this.timepicker.date);
    this.timepicker.pickerModel = 'minute';
    this.getHours();
  }

  headerClick() {
    this.timepicker.pickerModel = 'day';
  }
  getFormat() {
    return this.format;
  }

  private  getHours() {
    this.hours = [];

    for (let i = 0; i < 24; i++) {
      this.hours.push({date: i, active: this.timepicker.date.getHours() === i});
    }
  }
}
