/**
 * Created by tc949 on 2017/6/28.
 */

import {
  ApplicationRef, ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EventEmitter, HostBinding, HostListener,
  Injector, Input,
  Output,
  Renderer2
} from '@angular/core'
import {TModalBackdrop} from './modal-backdrop';
import {ModalConfig} from './modal-config';


@Directive({
  selector: '[Tmodal]',
  exportAs: 'Tmodal'
})
export class TModalDirective {

  @Input('size')
  size: 'lg' | 'sm' | 'md' = 'md';


  private _backdropFactory: ComponentFactory<TModalBackdrop>;

  private isShow: Boolean = false;
  @HostBinding('style.display')
  private displayed: string = 'none';

  @HostBinding('class.show')
  private showed: boolean = false;

  @HostListener('keydown.esc')
  public onEsc(): void {
    if (this.isShow) this.hide();
  }

  @Output('afterShow')
  private afterShow: EventEmitter<any> = new EventEmitter<any>();
  @Output('afterHide')
  private afterHide: EventEmitter<any> = new EventEmitter<any>();

  private backdropRef: ComponentRef<TModalBackdrop>;

  constructor(private _applicationRef: ApplicationRef, private _injector: Injector, private _componentFactoryResolver: ComponentFactoryResolver, private config: ModalConfig) {
    this._backdropFactory = _componentFactoryResolver.resolveComponentFactory(TModalBackdrop);
  }

  show() {
    if (this.isShow) {
      return;
    }
    this.createBackdrop();
    this.displayed = 'block';
    setTimeout(() => {
      this.showed = true;
      this.afterShow.next();
      this.isShow = true;
    }, 20);
  }

  hide() {
    if (!this.isShow) {
      return
    }
    this.showed = false;
    this.dismissBackdrop();
    setTimeout(() => {
      this.displayed = 'none';
      this.afterHide.next();
      this.isShow = false;
      this.backdropRef.destroy();
      this.backdropRef = null;
    }, 300)
  }

  toggle() {
    if (this.isShow) {
      this.hide();
    } else {
      this.show();
    }
  }

  private createBackdrop() {
    if (!this.backdropRef) {
      let backdropCmptRef: ComponentRef<TModalBackdrop>;
      backdropCmptRef = this._backdropFactory.create(this._injector);
      this._applicationRef.attachView(backdropCmptRef.hostView);
      document.querySelector('body').appendChild(backdropCmptRef.location.nativeElement);
      this.backdropRef = backdropCmptRef;
      this.backdropRef.instance.clickEvent.subscribe(() => {
        this.hide();
      })
    }
  }

  private dismissBackdrop() {
    if (this.backdropRef) {
      this.backdropRef.instance.hideAnimation();
    }
  }
}
