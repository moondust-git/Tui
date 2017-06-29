import {NgModule, ModuleWithProviders} from '@angular/core';

import {NgbModalBackdrop} from './modal-backdrop';
import {NgbModalWindow} from './modal-window';
import {TModalStack} from './modal-stack';
import {TModal} from './modal';

export {TModal, TModalOptions} from './modal';
export {NgbModalRef, TActiveModal} from './modal-ref';
export {ModalDismissReasons} from './modal-dismiss-reasons';

@NgModule({
  declarations: [NgbModalBackdrop, NgbModalWindow],
  entryComponents: [NgbModalBackdrop, NgbModalWindow],
  providers: [TModal, TModalStack]
})

export class TModalModule {

}
