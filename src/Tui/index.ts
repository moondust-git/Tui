import {NgModule} from '@angular/core';
import {TAccordionModule} from './components/accordion';
import {TPopoverModule} from './components/popover';
import {TToastModule} from './components/toast';
import {TMessageModule} from './components/message';
import {TConfirmModule} from './components/confirm/index';
import {TModalModule} from './components/modal/index';
import {TTimepickerModule} from './components/timepicker/timepicker.module';
import {TDropdownModule} from './components/Dropdown/index';
import {TTabsetModule} from './components/tab';
/**
 * Created by tc949 on 2017/6/19.
 */

const MODULES = [
  TAccordionModule,
  TPopoverModule,
  TToastModule,
  TTabsetModule,
  TMessageModule,
  TConfirmModule,
  TModalModule,
  TTimepickerModule,
  TDropdownModule
];


@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class TuiModule {
}
