import {NgModule} from '@angular/core';
import {TAccordionModule} from './components/accordion';
import {TPopoverModule} from './directives/popover';
import {TToastModule} from './services/toast';
import {TMessageModule} from './services/message';
import {TConfirmModule} from './services/confirm/index';
import {TModalModule} from './services/modal/index';
import {TTimepickerModule} from './components/timepicker/timepicker.module';
import {TDropdownModule} from './directives/dropdown/index';
import {TTabsetModule} from './components/tab';
import {TCollapseModule} from './components/collpase/index';
import {TCarouselModule} from './components/carousel/index';
import {TLayerModule} from './services/layer/index';
import {TAlertModule} from './components/alert/index';
import {TProgressbarModule} from './components/progressbar/index';
/**
 * Created by tc949 on 2017/6/19.
 */

const MODULES = [
  TAlertModule,
  TAccordionModule,
  TPopoverModule,
  TTabsetModule,
  TModalModule,
  TTimepickerModule,
  TDropdownModule,
  TCollapseModule,
  TCarouselModule,
  TProgressbarModule,

  //service
  TToastModule,
  TConfirmModule,
  TMessageModule,
  TLayerModule
];
@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class TuiModule {
}
