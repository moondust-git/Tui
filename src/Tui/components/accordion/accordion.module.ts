import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {AccordionPanelComponent} from './accordion-group.component';
import {AccordionComponent} from './accordion.component';
import {TCollapseModule} from '../collapse/collapse.module';

@NgModule({
  imports: [CommonModule, TCollapseModule],
  declarations: [AccordionComponent, AccordionPanelComponent],
  exports: [AccordionComponent, AccordionPanelComponent],
  providers: []
})
export class TAccordionModule {
}
