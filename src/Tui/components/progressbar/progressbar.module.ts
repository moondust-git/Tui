import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TProgressbar} from './progressbar';
import {TProgressbarConfig} from './progressbar-config';

export {TProgressbar} from './progressbar';
export {TProgressbarConfig} from './progressbar-config';

@NgModule({declarations: [TProgressbar], exports: [TProgressbar], imports: [CommonModule]})
export class TProgressbarModule {
  static forRoot(): ModuleWithProviders { return {ngModule: TProgressbarModule, providers: [TProgressbarConfig]}; }
}
