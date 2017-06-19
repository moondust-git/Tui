/**
 * Created by tc949 on 2017/5/26.
 */
/**
 * Created by tc949 on 2017/5/26.
 */
export class SideNavCallback {

  _then: Function = function () {
  };


  then(ok: Function): SideNavCallback {
    this._then = ok;
    return this;
  }
}
