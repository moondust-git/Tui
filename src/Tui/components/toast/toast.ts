/**
 * Created by tc949 on 2017/6/20.
 */
import {ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector} from '@angular/core';
import {ToastEntity} from './toast.entity';
import {ToastComponent} from './toast.cmt';
@Injectable()
export class TToast {
  private ids: number = 1;
  private _toastFactory: ComponentFactory<ToastComponent>;
  private _toastInstanseTop: ToastComponent;
  private _toastInstanseCenter: ToastComponent;
  private _toastInstanseBottom: ToastComponent;


  constructor(private _applicationRef: ApplicationRef, private _injector: Injector, private _componentFactoryResolver: ComponentFactoryResolver) {
    this._toastFactory = _componentFactoryResolver.resolveComponentFactory(ToastComponent);
  }


  public toast(message: string, options?: { timeLong?: number, postion?: 'top' | 'center' | 'bottom' }): ToastEntity {
    let toast = this.buildToast(message, options);
    let postion = 'top';
    if (options && options.postion) {
      postion = options.postion;
    }
    if ('center' === postion) {
      if (!this._toastInstanseCenter) {
        this._toastInstanseCenter = this.buildToastInstance(postion);
      }
      this._toastInstanseCenter.addToast(toast);
    } else if ('bottom' === postion) {
      if (!this._toastInstanseBottom) {
        this._toastInstanseBottom = this.buildToastInstance(postion);
      }
      this._toastInstanseBottom.addToast(toast);
    } else {
      if (!this._toastInstanseTop) {
        this._toastInstanseTop = this.buildToastInstance('top');
      }
      this._toastInstanseTop.addToast(toast);
    }
    return toast;
  }


  public remove(id: number) {
    if (this._toastInstanseTop)
      this._toastInstanseTop.removeToast(id);
    if (this._toastInstanseCenter)
      this._toastInstanseCenter.removeToast(id);
    if (this._toastInstanseBottom)
      this._toastInstanseBottom.removeToast(id);
  }

  public removeAll() {
    if (this._toastInstanseTop)
      this._toastInstanseTop.removeAllToasts();
    if (this._toastInstanseCenter)
      this._toastInstanseCenter.removeAllToasts();
    if (this._toastInstanseBottom)
      this._toastInstanseBottom.removeAllToasts();
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
    let toast = new ToastEntity(message, this.ids, options ? options.timeLong : null);
    this.ids++;
    return toast;
  }
}

export class Callback {
  _onClick: Function = function () {

  }

  _onHide: Function = function () {

  }

  onClick(cb: Function) {
    this._onClick = cb;
    return this
  }


  onHide(cb: Function) {
    this._onHide = cb;
    return this
  }
}
