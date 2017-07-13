import {Component, forwardRef, Input} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {isNullOrUndefined} from "util";
import {PickerModal} from "./picker.base";
/**
 * Created by tc949 on 2017/7/11.
 */

@Component({
  selector: "Tdatetimepicker",
  template: `
    <table class="table-condensed">
      <thead>
      <tr>
        <th class="prev" data-action="previous" [innerHtml]="pretext" (click)="subPicker.prepage()"></th>
        <th class="picker-switch" data-action="pickerSwitch" colspan="5" (click)="subPicker.headerClick()">
          {{date | date:subPicker.getFormat()}}
        </th>
        <th class="next" data-action="next" [innerHtml]="nexttext" (click)="subPicker.nextpage()"></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td colspan="7">
          <Tminutespicker *ngIf="pickerModel==='minute'" class="datetimepicker-minutes"
                          (onChange)="dateChange($event)"></Tminutespicker>
          <Thourpicker *ngIf="pickerModel==='hour'" class="datetimepicker-hours"
                       (onChange)="dateChange($event)"></Thourpicker>
          <Tdaypicker *ngIf="pickerModel==='day'&&date" class="datepicker-days"
                      (onChange)="dateChange($event)"></Tdaypicker>
          <Tmonthpicker *ngIf="pickerModel==='month'" class="datepicker-months"
                        (onChange)="dateChange($event)"></Tmonthpicker>
          <Tyearpicker *ngIf="pickerModel==='year'" class="datetimepicker-years"
                       (onChange)="dateChange($event)"></Tyearpicker>
        </td>
      </tr>
      </tbody>
    </table>

  `,
  host: {"class": "bootstrap-datetimepicker-widget"},
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TDatetimePickerComponent),
      multi: true
    }
  ]
})
export class TDatetimePickerComponent implements ControlValueAccessor {
  date: Date = new Date();
  readonly: boolean;
  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;
  pickerModel: string = "day";
  @Input("pretext")
  pretext: string = '&lt;';

  @Input("nexttext")
  nexttext: string = '&gt;';

  subPicker: PickerModal;

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

