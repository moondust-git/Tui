import {ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector, OnInit, Renderer2} from '@angular/core';
import {ComponentCreater} from '../../util/ComponentCreater';
import {TModalCmt} from './modal-window';
import {TModal} from '../modal/modal';
import {TActiveModal} from '../modal/modal-ref';
import {isNullOrUndefined} from 'util';
/**
 * Created by tc949 on 2017/6/30.
 */
@Injectable()
export class TLayer {

  private componetCreater: ComponentCreater<TModalCmt>;
  private componenetRef: ComponentRef<TModalCmt>;

  constructor(private _applicationRef: ApplicationRef,
              private _injector: Injector,
              private _componentFactoryResolver: ComponentFactoryResolver) {
  }

  show(content: any, options: any = {}) {
    if (isNullOrUndefined(this.componetCreater)) {
      this.componetCreater = new ComponentCreater<TModalCmt>(TModalCmt, this._injector, this._componentFactoryResolver, this._applicationRef);
    }
    let context = new TActiveModal();
    this.componenetRef = this.componetCreater.open(content, [{
      provide: TActiveModal,
      useValue: context
    }]);
    this.componenetRef.instance.showAnimation();

    this.componenetRef.instance.dismissEvent.subscribe((rea) => {
      this.hide();
    })
  }

  hide() {
    this.componenetRef.instance.hideAnimation(() => {
      this.componetCreater.remove();
    });
  }
}
