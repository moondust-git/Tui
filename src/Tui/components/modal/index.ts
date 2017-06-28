import {NgModule} from '@angular/core';
import {TModalDirective} from './modal-directive';
import {TModalBackdrop} from './modal-backdrop';


@NgModule({
  declarations: [TModalDirective, TModalBackdrop],
  exports: [TModalDirective],
  entryComponents: [TModalBackdrop]
})
export class TModalModule {
}
