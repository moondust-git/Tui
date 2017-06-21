import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AccordionPanelComponent} from './accordion-item.component';
import {AccordionComponent} from './accordion.component';
import {TCollapseComponent} from './collapse.cmt';

@NgModule({
  imports: [CommonModule],
  declarations: [AccordionComponent, AccordionPanelComponent, TCollapseComponent],
  entryComponents: [TCollapseComponent],
  exports: [AccordionComponent, AccordionPanelComponent],
  providers: []
})
export class TAccordionModule {
}
