import {Component, forwardRef} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {isNullOrUndefined} from "util";
/**
 * Created by tc949 on 2017/7/11.
 */

@Component({
  selector: "Tdatetimepicker",
  template: `
    <div class="datetimepicker">
      <Tminutespicker *ngIf="pickerModel==='minute'" class="datetimepicker-minutes" [date]="date"
                      (onChange)="dateChange($event)"></Tminutespicker>
      <Thourpicker *ngIf="pickerModel==='hour'" class="datetimepicker-hours" [date]="date"
                   (onChange)="dateChange($event)"></Thourpicker>
      <Tdaypicker *ngIf="pickerModel==='day'" class="datetimepicker-days" [date]="date"
                  (onChange)="dateChange($event)"></Tdaypicker>
      <Tmonthpicker *ngIf="pickerModel==='month'" class="datetimepicker-months" [date]="date"
                    (onChange)="dateChange($event)"></Tmonthpicker>
      <Tyearpicker *ngIf="pickerModel==='year'" class="datetimepicker-years" [date]="date"
                   (onChange)="dateChange($event)"></Tyearpicker>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TDatetimePickerComponent),
      multi: true
    }
  ]
})
export class TDatetimePickerComponent implements ControlValueAccessor {
  date: Date;
  readonly: boolean;
  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;


  pickerModel: string = "day";

  writeValue(obj: any): void {
    if (!isNullOrUndefined(obj)) {
      this.date = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.readonly = isDisabled;
    console.log(this.readonly)
  }

  dateChange(date) {
    this.date = date;
    this.onChange(date);
  }


  nextPicker(modal: string) {
    this.pickerModel = modal;
  }
}

