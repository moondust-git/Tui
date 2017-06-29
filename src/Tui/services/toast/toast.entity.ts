import {EventEmitter} from '@angular/core';
/**
 * Created by tc949 on 2017/6/20.
 */
export class ToastEntity {
  private _isVisible: boolean;
  public event: EventEmitter<string> = new EventEmitter();

  constructor(public id: number, public message: string, public options?: any) {
    if (!options) this.options = {};
  }

  get isVisible(): boolean {
    return this._isVisible;
  }

  set isVisible(value: boolean) {
    this._isVisible = value;
  }
}
