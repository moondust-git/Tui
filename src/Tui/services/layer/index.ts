import {NgModule} from '@angular/core';
import {TLayer} from './layer';
import {TModalCmt} from './modal-window';
import {TModalBackdrop} from './modal-backdrop';
import {TLayerConfig} from './layer-config';
/**
 * Created by tc949 on 2017/6/30.
 */
@NgModule({
  declarations: [TModalCmt, TModalBackdrop],
  entryComponents: [TModalCmt, TModalBackdrop],
  providers: [TLayer, TLayerConfig]
})
export class TLayerModule {

}
