import {NgModule} from '@angular/core';
import {TAccordionModule} from './components/accordion';
import {TPopoverModule} from './components/popover/popover.module';
import {TToastModule} from './components/toast';
import {TMessageModule} from './components/message';
import {TTabsModule} from './components/tabs/index';
/**
 * Created by tc949 on 2017/6/19.
 */
const MODULES = [
  TAccordionModule,
  TPopoverModule,
  TToastModule,
  TTabsModule,
  TMessageModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class TuiModule {
}
