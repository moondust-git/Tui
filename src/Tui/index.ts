import {NgModule} from "@angular/core";
import {TAccordionModule} from "./components/accordion/accordion.module";
import {TCollapseModule} from "./components/collapse/collapse.module";
import {TConfirmModule} from "./components/confirm/confirm.module";
import {TModalModule} from "./components/modal/modal.module";
import {TPopoverModule} from "./components/popover/popover.module";
import {TTabsModule} from "./components/tabs/tabs.module";
import {TTimepickerModule} from "./components/timepicker/timepicker.module";
/**
 * Created by tc949 on 2017/6/19.
 */
const MODULES = [
  TAccordionModule,
  TCollapseModule,
  TConfirmModule,
  TModalModule,
  TPopoverModule,
  TTabsModule,
  TTimepickerModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class TuiModule {
}
