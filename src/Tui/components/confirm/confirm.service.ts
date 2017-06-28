import {Injectable} from '@angular/core';
import {ConfirmCmt} from './confirm';
import {ConfirmCallback} from './callback';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Injectable()
export class TConfirm {
  // private _callback: ConfirmCallback;
  //
  // private config: TModalOptions;
  //
  // constructor(private modal: TModal) {
  //   this.config = {backdrop: true, container: 'body', keyboard: false};
  // }
  //
  // confirm(content: string, opt?: any): ConfirmCallback {
  //   this._callback = new ConfirmCallback();
  //   const confirmRef = this.modal.open(ConfirmCmt, this.config);
  //   confirmRef.componentInstance.isConfirm = true;
  //   Object.assign(confirmRef.componentInstance, opt);
  //   confirmRef.componentInstance.content = content;
  //   confirmRef.result.then((result) => {
  //     this.callback(result);
  //   }, (reason) => {
  //     this.callback(reason);
  //   });
  //   return this._callback;
  // }
  //
  // alert(content: string, opt?: any) {
  //   this._callback = new ConfirmCallback();
  //   const confirmRef = this.modal.open(ConfirmCmt, this.config);
  //   confirmRef.componentInstance.isConfirm = false;
  //   Object.assign(confirmRef.componentInstance, opt);
  //   confirmRef.componentInstance.content = content;
  //   confirmRef.result.then((result) => {
  //     this.callback(result);
  //   }, (reason) => {
  //     this.callback(reason);
  //   });
  //   return this._callback;
  // }
  //
  // callback(result: any) {
  //   if (result === 'ok') {
  //     this._callback._ok();
  //   } else if (result === 'cancel') {
  //     this._callback._cancel();
  //   } else {
  //     this._callback._dismiss();
  //   }
  // }
}
