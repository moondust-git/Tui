import {Component, forwardRef} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {isNullOrUndefined} from "util";
/**
 * Created by tc949 on 2017/7/11.
 */

@Component({
  selector: "Tdatetimepicker",
  template: `
    <Tyearpicker [date]="date" (onChange)="dateChange($event)"></Tyearpicker>
    <Tmonthpicker [date]="date" (onChange)="dateChange($event)"></Tmonthpicker>
    <Tdaypicker [date]="date" (onChange)="dateChange($event)"></Tdaypicker>
    <Thourpicker [date]="date" (onChange)="dateChange($event)"></Thourpicker>
    <Tminutespicker [date]="date" (onChange)="dateChange($event)"></Tminutespicker>
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


}
