/**
 * Created by tc949 on 2017/5/26.
 */
export class ConfirmCallback {

  _ok: Function = function () {
  };
  _cancel: Function = function () {
  };

  ok(ok: Function): ConfirmCallback {
    this._ok = ok;
    return this;
  }

  cancel(cancel: Function): ConfirmCallback {
    this._cancel = cancel;
    return this;
  }
}
