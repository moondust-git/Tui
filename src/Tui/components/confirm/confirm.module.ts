import {NgModule, ModuleWithProviders} from '@angular/core';
import {TConfirm} from './confirm.service';
import {ConfirmCmt} from './confirm';
import {TModalModule} from '../modal/modal.module';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [CommonModule],
  declarations: [ConfirmCmt],
  entryComponents: [ConfirmCmt],
  providers: [TConfirm]
})
export class TConfirmModule {

}
