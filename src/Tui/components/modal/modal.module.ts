import {NgModule, ModuleWithProviders} from '@angular/core';

import {NgbModalWindow} from './modal-window';
import {TModalStack} from './modal-stack';
import {TModal} from './modal';
import {TModalBackdrop} from './modal-backdrop';

export {TModal, TModalOptions} from './modal';
export {NgbModalRef, TActiveModal} from './modal-ref';
export {ModalDismissReasons} from './modal-dismiss-reasons';

@NgModule({
  declarations: [TModalBackdrop, NgbModalWindow],
  entryComponents: [TModalBackdrop, NgbModalWindow],
  providers: [TModal, TModalStack]
})

export class TModalModule {

}
