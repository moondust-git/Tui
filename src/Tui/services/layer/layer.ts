import {ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector} from "@angular/core";
import {ComponentCreater} from "../../util/ComponentCreater";
import {TModalCmt} from "./modal-window";
import {isNullOrUndefined} from "util";
import {TModalBackdrop} from "./modal-backdrop";
import {TLayerConfig} from "./layer-config";
import {copyAndOverwrite} from "../../util/util";
import {ConfirmCmt} from "./confirm.cmt";
import {TConfirmConfig} from "./confirm.config";
import {ConfirmCallback} from "./callback";
/**
 * Created by tc949 on 2017/6/30.
 */
@Injectable()
export class TLayer {

  private componetCreater: ComponentCreater<TModalCmt>;
  private componenetRef: ComponentRef<TModalCmt>;

  private backdropCreater: ComponentCreater<TModalBackdrop>;
  private backdropRef: ComponentRef<TModalBackdrop>;

  constructor(private _applicationRef: ApplicationRef,
              private _injector: Injector,
              private _componentFactoryResolver: ComponentFactoryResolver,
              private config: TLayerConfig,
              private confirmOptions: TConfirmConfig) {
  }

  show(content: any, options: TLayerConfig = {}): TLayer {
    copyAndOverwrite(options, this.config);
    if (isNullOrUndefined(this.componetCreater)) {
      this.componetCreater = new ComponentCreater<TModalCmt>(TModalCmt, this._injector, this._componentFactoryResolver, this._applicationRef);
      this.backdropCreater = new ComponentCreater<TModalBackdrop>(TModalBackdrop, this._injector, this._componentFactoryResolver, this._applicationRef)
    }
    this.componenetRef = this.componetCreater.open(content);
    this.backdropRef = this.backdropCreater.open();
    this.componenetRef.instance.showAnimation();
    this.componenetRef.instance.dismissEvent.subscribe((rea) => {
      this.hide();
    });
    return this;
  }

  hide(reason?: any): void {
    if (this.componenetRef) {
      this.componenetRef.instance.hideAnimation(() => {
        this.componetCreater.remove();
      });
    }
    if (this.backdropRef) {
      this.backdropRef.instance.hideAnimation(() => {
        this.backdropCreater.remove();
      })
    }
  }

  alert(text: string, modalOptions: TLayerConfig = {}, confirmOptions: TConfirmConfig = {}): ConfirmCallback {
    let callback = new ConfirmCallback();
    copyAndOverwrite(modalOptions, this.config);
    copyAndOverwrite(confirmOptions, this.confirmOptions);
    if (isNullOrUndefined(this.componetCreater)) {
      this.componetCreater = new ComponentCreater<TModalCmt>(TModalCmt, this._injector, this._componentFactoryResolver, this._applicationRef);
      this.backdropCreater = new ComponentCreater<TModalBackdrop>(TModalBackdrop, this._injector, this._componentFactoryResolver, this._applicationRef)
    }
    this.componenetRef = this.componetCreater.open(ConfirmCmt);
    this.backdropRef = this.backdropCreater.open();
    this.componenetRef.instance.showAnimation();
    this.componenetRef.instance.dismissEvent.subscribe((rea) => {
      this.hide();
    });
    let contentInatse: ConfirmCmt = this.componetCreater.getContentInstance();
    contentInatse.content = text;

    contentInatse.eventEmit.subscribe((source: string) => {
      if ('ok' === source) {
        callback._ok();
      } else {
        callback._dismiss()
      }
      this.hide();
    });
    return callback;
  }
}
