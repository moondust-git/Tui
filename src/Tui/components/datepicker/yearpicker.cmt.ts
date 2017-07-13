import {AfterViewInit, Component, EventEmitter, Input, Output} from "@angular/core";
import {TDatetimePickerComponent} from "./datetimepicker.cmt";
import {PickerModal} from "./picker.base";
/**
 * Created by tc949 on 2017/7/11.
 */
@Component({
  selector: "Tyearpicker",
  template: `
    <span class="year" *ngFor="let year of years" (click)="changeValue(year)"
          [ngClass]="{'active':year==timepicker.date.getFullYear()}">{{year}}</span>
  `
})
export class YearpickerComponent implements PickerModal {

  date: Date;
  years: any[] = [];
  readonly: boolean;
  @Input("format")
  format: string = 'yyyy';

  @Output("onChange")
  public onChange: any = new EventEmitter<Date>();

  constructor(private timepicker: TDatetimePickerComponent) {
    this.getyears();
  }

  changeValue(number) {
    this.timepicker.date = new Date(this.timepicker.date.getTime());
    this.timepicker.date.setFullYear(number);
    this.onChange.emit(this.timepicker.date);
    this.timepicker.pickerModel = "month";
  }


  headerClick() {
    return;
  }

  getyears() {
    this.years = [];
    const thisyear = this.timepicker.date.getFullYear();
    for (let i = thisyear - 5; i <= thisyear + 6; i++) {
      this.years.push(i);
    }
  }

  prepage() {
    for (const i in this.years) {
      this.years[i] = this.years[i] - 9;
    }
  }

  nextpage() {
    for (const i in this.years) {
      this.years[i] = this.years[i] + 9;
    }
  }

  getFormat() {
    return this.format;
  }
}
