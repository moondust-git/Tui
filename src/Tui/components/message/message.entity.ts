import {EventEmitter} from '@angular/core';
/**
 * Created by tc949 on 2017/6/20.
 */
export class MessageEntity {

  private _isVisible: boolean;
  private _onhide: EventEmitter<number> = new EventEmitter();
  private _onClick: EventEmitter<number> = new EventEmitter();

  constructor(public id: number, public message: any, public options: any) {
  }

  get isVisible(): boolean {
    return this._isVisible;
  }

  set isVisible(value: boolean) {
    this._isVisible = value;

  }

  get onhide(): EventEmitter<number> {
    return this._onhide;
  }

  set onhide(value: EventEmitter<number>) {
    this._onhide = value;
  }


  get onClick(): EventEmitter<number> {
    return this._onClick;
  }

  set onClick(value: EventEmitter<number>) {
    this._onClick = value;
  }
}
