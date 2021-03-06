import {NgModule} from "@angular/core";
import {TAccordionModule} from "./components/accordion";
import {TPopoverModule} from "./directives/popover";
import {TToastModule} from "./services/toast";
import {TMessageModule} from "./services/message";
import {TTimepickerModule} from "./components/timepicker/timepicker.module";
import {TDropdownModule} from "./directives/dropdown/index";
import {TCollapseModule} from "./components/collpase/index";
import {TCarouselModule} from "./components/carousel/index";
import {TLayerModule} from "./services/layer/index";
import {TAlertModule} from "./components/alert/index";
import {TProgressbarModule} from "./components/progress/index";
import {TButtonModule} from "./directives/button/index";
import {TButtonGroupModule} from "./directives/buttonGroup/index";
import {TTabsModule} from "./components/tabs/index";
import {TPaginationModule} from "./components/pagination/index";
import {TDateTimePickerModule} from "./components/datepicker/index";
/**
 * Created by tc949 on 2017/6/19.
 */

const MODULES = [
  TAlertModule,
  TAccordionModule,
  TPopoverModule,
  TTabsModule,
  TDateTimePickerModule,
  TTimepickerModule,
  TDropdownModule,
  TCollapseModule,
  TCarouselModule,
  TProgressbarModule,
  TPaginationModule,
  //directive
  TButtonModule,
  TButtonGroupModule,

  //service
  TToastModule,
  TMessageModule,
  TLayerModule
];
@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class TuiModule {
}
