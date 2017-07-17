import {NgModule} from '@angular/core';
import {TLayer} from './layer';
import {TModalCmt} from './modal-window';
import {TModalBackdrop} from './modal-backdrop';
import {TLayerConfig} from './layer-config';
import {ConfirmCmt} from "./confirm.cmt";
import {CommonModule} from "@angular/common";
import {TConfirmConfig} from "./confirm.config";
/**
 * Created by tc949 on 2017/6/30.
 */
@NgModule({
  imports: [CommonModule],
  declarations: [TModalCmt, TModalBackdrop, ConfirmCmt],
  entryComponents: [TModalCmt, TModalBackdrop, ConfirmCmt],
  providers: [TLayer, TLayerConfig, TConfirmConfig]
})
export class TLayerModule {

}
