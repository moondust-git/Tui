import {EventEmitter} from '@angular/core';
/**
 * Created by tc949 on 2017/6/20.
 */
export class ToastEntity {
  private _isVisible: boolean;
  private _onhide: EventEmitter<number> = new EventEmitter();
  private _onClick: EventEmitter<number> = new EventEmitter();

  constructor(private _message: string, private _id: number, private _timeLong?: number) {

  }

  get isVisible(): boolean {
    return this._isVisible;
  }

  set isVisible(value: boolean) {
    this._isVisible = value;
    setTimeout(() => {
      this._onhide.next(this._id);
    }, this.timeLong ? this.timeLong : 3000);
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }


  get timeLong(): number {
    return this._timeLong;
  }

  set timeLong(value: number) {
    this._timeLong = value;
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
