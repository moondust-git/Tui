import {Component, EventEmitter, Input, Output} from "@angular/core";
import {TDatetimePickerComponent} from "./datetimepicker.cmt";
import {PickerModal} from "./picker.base";
/**
 * Created by tc949 on 2017/7/12.
 */
@Component({
  selector: "Tmonthpicker",
  template: `
    <span class="month" *ngFor="let month of months"
          [ngClass]="{'active':month.getMonth()===timepicker.date.getMonth()}"
          (click)="changeValue(month)">{{month | date:monthShowFormat}}</span>
  `
})
export class TMonthPickerComponent implements PickerModal {
  @Input("format")
  format: string = 'yyyy';

  @Input("monthShowFormat")
  monthShowFormat: string = "MMM";

  months: Date[] = [];

  @Output("onChange")
  onChange: EventEmitter<Date> = new EventEmitter<Date>();

  constructor(public timepicker: TDatetimePickerComponent) {
    timepicker.subPicker = this;
    this.getMonths();
  }

  changeValue(date) {
    this.timepicker.date = date;
    this.onChange.emit(date);
    this.timepicker.pickerModel = 'day';
  }

  nextpage() {
    let year = this.timepicker.date.getFullYear() + 1;
    this.timepicker.date = new Date(this.timepicker.date.getTime());
    this.timepicker.date.setUTCFullYear(year);
    this.onChange.emit(this.timepicker.date);
    this.getMonths();
  }

  prepage() {
    let year = this.timepicker.date.getFullYear() - 1;
    this.timepicker.date = new Date(this.timepicker.date.getTime());
    this.timepicker.date.setUTCFullYear(year);
    this.onChange.emit(this.timepicker.date);
    this.getMonths();
  }

  headerClick() {
    this.timepicker.pickerModel = 'year';
  }


  getFormat() {
    return this.format;
  }

  private getMonths() {
    this.months = [];
    for (let i = 0; i < 12; i++) {
      let m = new Date(this.timepicker.date.getTime());
      m.setMonth(i);
      this.months.push(m);
    }
  }
}
