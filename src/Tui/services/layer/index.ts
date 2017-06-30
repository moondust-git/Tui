import {NgModule} from '@angular/core';
import {TLayer} from './layer';
import {TModalCmt} from './modal-window';
/**
 * Created by tc949 on 2017/6/30.
 */
@NgModule({
  declarations: [TModalCmt],
  entryComponents: [TModalCmt],
  providers: [TLayer]
})
export class TLayerModule {

}
