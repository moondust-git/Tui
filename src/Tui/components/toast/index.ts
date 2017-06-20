/**
 * Created by tc949 on 2017/6/20.
 */
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ToastComponent} from './toast.cmt';
import {TToast} from './toast';

@NgModule({
  imports: [CommonModule],
  declarations: [ToastComponent],
  entryComponents: [ToastComponent],
  providers: [TToast]
})

export class TToastModule {

}
