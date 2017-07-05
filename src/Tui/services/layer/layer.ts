import {ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector} from '@angular/core';
import {ComponentCreater} from '../../util/ComponentCreater';
import {TModalCmt} from './modal-window';
import {TActiveModal} from '../modal/modal-ref';
import {isNullOrUndefined} from 'util';
import {TModalBackdrop} from './modal-backdrop';
import {TLayerConfig} from './layer-config';
import {copyAndOverwrite} from '../../util/util';
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
              private config: TLayerConfig) {
  }

  show(content: any, options: TLayerConfig = {}): TLayer {
    copyAndOverwrite(options, this.config);
    if (isNullOrUndefined(this.componetCreater)) {
      this.componetCreater = new ComponentCreater<TModalCmt>(TModalCmt, this._injector, this._componentFactoryResolver, this._applicationRef);
      this.backdropCreater = new ComponentCreater<TModalBackdrop>(TModalBackdrop, this._injector, this._componentFactoryResolver, this._applicationRef)
    }
    let context = new TActiveModal();
    this.componenetRef = this.componetCreater.open(content, [{
      provide: TActiveModal,
      useValue: context
    }]);

    this.backdropRef = this.backdropCreater.open();
    this.componenetRef.instance.showAnimation();
    this.componenetRef.instance.dismissEvent.subscribe((rea) => {
      this.hide();
    });
    return this;
  }

  hide(reason?: any): void {
    this.componenetRef.instance.hideAnimation(() => {
      this.componetCreater.remove();
    });
    this.backdropRef.instance.hideAnimation(() => {
      this.backdropCreater.remove();
    })
  }
}
