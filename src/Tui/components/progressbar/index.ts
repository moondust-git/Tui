import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {TBarComponent} from './bar.component';
import {TProgressDirective} from './progress.directive';
import {TProgressbarCmt} from './progressbar.component';
import {TProgressbarConfig} from './progressbar.config';

@NgModule({
  imports: [CommonModule],
  declarations: [TProgressDirective, TBarComponent, TProgressbarCmt],
  providers: [TProgressbarConfig],
  exports: [TProgressbarCmt,]
})
export class TProgressbarModule {
}
