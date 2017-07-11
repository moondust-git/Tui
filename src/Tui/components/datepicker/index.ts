import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {YearpickerComponent} from "./yearpicker.cmt";
import {TDatetimePickerComponent} from "./datetimepicker.cmt";
/**
 * Created by tc949 on 2017/7/11.
 */
@NgModule({
  imports:[CommonModule],
  declarations:[YearpickerComponent,TDatetimePickerComponent],
  exports:[TDatetimePickerComponent]
})
export  class TDateTimePickerModule{}
