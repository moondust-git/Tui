import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {YearpickerComponent} from "./yearpicker.cmt";
import {TDatetimePickerComponent} from "./datetimepicker.cmt";
import {TMonthPickerComponent} from "./monthpicker.cmt";
import {TDayPickerComponent} from "./daypicker.cmt";
import {THourPickerComponent} from "./hourpicker.cmt";
import {TMinutesPickerComponent} from "./minutespicker.cmt";
/**
 * Created by tc949 on 2017/7/11.
 */
@NgModule({
  imports: [CommonModule],
  declarations: [YearpickerComponent, TDatetimePickerComponent, TMonthPickerComponent, TDayPickerComponent, THourPickerComponent, TMinutesPickerComponent],
  exports: [TDatetimePickerComponent]
})
export class TDateTimePickerModule {
}
