import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {DatePickerInnerComponent} from './datepicker-inner.cmt';
import {DatePickerComponent} from './datepicker.cmt';
import {DayPickerComponent} from './daypicker.cmt';
import {MonthPickerComponent} from './monthpicker.cmt';
import {YearPickerComponent} from './yearpicker.cmt';
import {DatepickerConfig} from './datepicker.config';
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DatePickerComponent, DatePickerInnerComponent, DayPickerComponent,
    MonthPickerComponent, YearPickerComponent],
  exports: [DatePickerComponent, DatePickerInnerComponent, DayPickerComponent,
    MonthPickerComponent, YearPickerComponent],
  providers: [DatepickerConfig],
  entryComponents: [DatePickerComponent]
})
export class TDatepickerModule {

}
