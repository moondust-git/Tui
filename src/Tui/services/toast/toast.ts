/**
 * Created by tc949 on 2017/6/20.
 */
import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector
} from '@angular/core';
import {ToastEntity} from './toast.entity';
import {ToastComponent} from './toast.cmt';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {TToastConfig} from "./toast.config";
import {copyAndOverwrite} from "../../util/util";
@Injectable()
export class TToast {
  private ids: number = 1;
  private _toastFactory: ComponentFactory<ToastComponent>;
  private _toastInstanse: ToastComponent;


  constructor(private _config: TToastConfig, private _applicationRef: ApplicationRef, private _injector: Injector, private _componentFactoryResolver: ComponentFactoryResolver) {
    this._toastFactory = _componentFactoryResolver.resolveComponentFactory(ToastComponent);
  }

  public toast(message: string, options?: TToastConfig): Callback {
    let toast = this.buildToast(message, options);
    copyAndOverwrite(options, this._config)
    let cb = this.buildCallback(toast);
    if (!this._toastInstanse) {
      this._toastInstanse = this.buildToastInstance('top');
    }
    this._toastInstanse.addToast(toast);
    return cb;
  }

  private buildCallback(toastEntity: ToastEntity) {
    let cb = new Callback();
    toastEntity.event.subscribe((data: any) => {
      if ('click' === data) {
        cb._onClick(toastEntity.id)
      } else if ('hide' === data) {
        cb._onHide(toastEntity.id)
      } else if ('show' === data) {
        cb._onShow(toastEntity.id)
      }
    });
    return cb;
  }

  public remove(id: number) {
    if (this._toastInstanse)
      this._toastInstanse.removeToast(id);
  }

  public removeAll() {
    if (this._toastInstanse)
      this._toastInstanse.removeAllToasts();
  }

  private buildToastInstance(postion: string) {
    const containerSelector = 'body';
    const containerEl = document.querySelector(containerSelector);
    if (!containerEl) {
      throw new Error(`The specified modal container "${containerSelector}" was not found in the DOM.`);
    }
    let toastCmptRef: ComponentRef<ToastComponent>;
    toastCmptRef = this._toastFactory.create(this._injector);
    this._applicationRef.attachView(toastCmptRef.hostView);
    containerEl.appendChild(toastCmptRef.location.nativeElement);
    toastCmptRef.instance.postion = postion;
    return toastCmptRef.instance;
  }

  private buildToast(message: string, options?: { timeLong?: number, postion?: string }): ToastEntity {
    let toast = new ToastEntity(this.ids, message, options);
    this.ids++;
    return toast;
  }
}

export class Callback {

  _onShow: Function = function () {

  };
  _onClick: Function = function () {

  };

  _onHide: Function = function () {

  };

  onClick(cb: Function) {
    this._onClick = cb;
    return this
  }

  onHide(cb: Function) {
    this._onHide = cb;
    return this
  }

  onShow(cb: Function) {
    this._onShow = cb;
    return this;
  }
}
