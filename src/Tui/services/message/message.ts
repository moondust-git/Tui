/**
 * Created by tc949 on 2017/6/20.
 */
import {ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector} from '@angular/core';
import {MessageEntity} from './message.entity';
import {MessageComponent} from './message.cmt';
@Injectable()
export class TMessageBox {
  ids: number = 0;
  private _messageFactory: ComponentFactory<MessageComponent>;
  private _toastInstanseTop: MessageComponent;
  private _toastInstanseBottom: MessageComponent;


  constructor(private _applicationRef: ApplicationRef, private _injector: Injector, private _componentFactoryResolver: ComponentFactoryResolver) {
    this._messageFactory = _componentFactoryResolver.resolveComponentFactory(MessageComponent);
  }

  public message(message: { title: string, message: string, icon?: string, level?: '' | 'info' | 'warn' | 'error' | 'success' },
                 options?: { timeLong?: number, postion?: string }): Callback {
    this.ids++;
    let messageEntity = this.buildMessageEntity(this.ids, message, options);
    let cb = this.buildCallback(messageEntity);
    let postion = 'top';
    if (options && options.postion) {
      postion = options.postion;
    }
    if ('bottom' === postion) {
      if (!this._toastInstanseBottom) {
        this._toastInstanseBottom = this.buildToastInstance(postion);
      }
      this._toastInstanseBottom.addToast(messageEntity);
    } else {
      if (!this._toastInstanseTop) {
        this._toastInstanseTop = this.buildToastInstance('top');
      }
      this._toastInstanseTop.addToast(messageEntity);
    }

    return cb;
  }

  private buildCallback(messageEntity: MessageEntity) {
    let cb = new Callback();
    messageEntity.event.subscribe((data: any) => {
      if ('click' === data) {
        cb._onClick(messageEntity.id)
      } else if ('hide' === data) {
        cb._onHide(messageEntity.id)
      } else if ('show' === data) {
        cb._onShow(messageEntity.id)
      }
    });
    return cb;
  }

  public remove(id: number) {
    if (this._toastInstanseTop)
      this._toastInstanseTop.removeMessage(id);
    if (this._toastInstanseBottom)
      this._toastInstanseBottom.removeMessage(id);
  }

  public removeAll() {
    if (this._toastInstanseTop)
      this._toastInstanseTop.removeAllMessage();
    if (this._toastInstanseBottom)
      this._toastInstanseBottom.removeAllMessage();
  }

  private buildToastInstance(postion: string) {
    const containerSelector = 'body';
    const containerEl = document.querySelector(containerSelector);
    if (!containerEl) {
      throw new Error(`The specified modal container "${containerSelector}" was not found in the DOM.`);
    }
    let toastCmptRef: ComponentRef<MessageComponent>;
    toastCmptRef = this._messageFactory.create(this._injector);
    this._applicationRef.attachView(toastCmptRef.hostView);
    containerEl.appendChild(toastCmptRef.location.nativeElement);
    toastCmptRef.instance.postion = postion;
    return toastCmptRef.instance;
  }

  private buildMessageEntity(id: number, message: { title: string, message: string, icon?: string },
                             options?: { timeLong?: number, postion?: string }): MessageEntity {
    let messageEntity = new MessageEntity(id, message, options);
    return messageEntity;
  }
}


export class Callback {
  _onClick: Function = function () {

  };

  _onHide: Function = function () {

  };
  _onShow: Function = function () {

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
