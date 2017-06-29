import {NgModule} from '@angular/core';
import {TAccordionModule} from './components/accordion';
import {TPopoverModule} from './components/popover';
import {TToastModule} from './services/toast';
import {TMessageModule} from './services/message';
import {TConfirmModule} from './services/confirm/index';
import {TModalModule} from './services/modal/index';
import {TTimepickerModule} from './components/timepicker/timepicker.module';
import {TDropdownModule} from './components/Dropdown/index';
import {TTabsetModule} from './components/tab';
import {TCollapseModule} from './components/collpase/index';
import {TSidenavModule} from './components/sidenav/sidenav.module';
import {TCarouselModule} from './components/carousel/index';
import {TComponentCreaterModule} from './services/componentCreater/index';
/**
 * Created by tc949 on 2017/6/19.
 */

const MODULES = [
  TAccordionModule,
  TPopoverModule,
  TTabsetModule,
  TModalModule,
  TTimepickerModule,
  TDropdownModule,
  TCollapseModule,
  TCarouselModule,


  //service
  TComponentCreaterModule,
  TToastModule,
  TConfirmModule,
  TMessageModule
];
@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class TuiModule {
}
