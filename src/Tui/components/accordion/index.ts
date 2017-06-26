import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AccordionPanelComponent} from './accordion-item.component';
import {AccordionComponent} from './accordion.component';
import {TCollapseModule} from '../collpase/index';

@NgModule({
  imports: [CommonModule, TCollapseModule],
  declarations: [AccordionComponent, AccordionPanelComponent],
  exports: [AccordionComponent, AccordionPanelComponent],
  providers: []
})
export class TAccordionModule {
}
