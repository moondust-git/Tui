import {NgModule} from '@angular/core';
import {TAccordionModule} from './components/accordion/accordion.module';
import {TCollapseModule} from './components/collapse/collapse.module';
import {TPopoverModule} from './components/popover/popover.module';
import {TTimepickerModule} from './components/timepicker/timepicker.module';
/**
 * Created by tc949 on 2017/6/19.
 */
const MODULES = [
  TAccordionModule,
  TCollapseModule,
  TPopoverModule,
  TTimepickerModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class TuiModule {
}
