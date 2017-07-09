import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {TProgressbarConfig} from './progressbar.config';
import {TProgressbarCmt} from "./progress.cmt";

@NgModule({
  imports: [CommonModule],
  declarations: [TProgressbarCmt],
  providers: [TProgressbarConfig],
  exports: [TProgressbarCmt,]
})
export class TProgressbarModule {
}
