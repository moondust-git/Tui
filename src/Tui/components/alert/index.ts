import {NgModule} from '@angular/core';
import {TAlertCmt} from './alert.cmt';
import {TAlertConfig} from './config';
import {CommonModule} from '@angular/common';
/**
 * Created by tc949 on 2017/7/5.
 */


@NgModule(
  {
    imports: [CommonModule],
    declarations: [TAlertCmt],
    providers: [TAlertConfig],
    exports: [TAlertCmt]
  }
)
export class TAlertModule {
}
