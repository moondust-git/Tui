import {NgModule, ModuleWithProviders} from '@angular/core';
import {TConfirm} from './confirm.service';
import {ConfirmCmt} from './confirm';
import {CommonModule} from '@angular/common';
import {TModalModule} from '../modal/index';
import {TConfirmConfig} from './confirm.config';


@NgModule({
  declarations: [ConfirmCmt],
  entryComponents: [ConfirmCmt],
  imports: [TModalModule, CommonModule],
  providers: [TConfirm, TConfirmConfig]
})
export class TConfirmModule {

}