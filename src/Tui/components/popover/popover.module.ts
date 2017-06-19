import {NgModule, ModuleWithProviders} from '@angular/core';

import {TPopover, TPopoverCmt, TTooltipCmt} from './popover';
import {TPopoverConfig} from './popover-config';
import {CommonModule} from "@angular/common";

export {TPopover} from './popover';
export {TPopoverConfig} from './popover-config';

@NgModule({
  imports: [CommonModule],
  declarations: [TPopover, TPopoverCmt, TTooltipCmt],
  exports: [TPopover],
  entryComponents: [TPopoverCmt, TTooltipCmt]
})
export class TPopoverModule {
}
