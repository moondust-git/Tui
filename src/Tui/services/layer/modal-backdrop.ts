import {AfterViewInit, Component, ElementRef, OnDestroy, Renderer2} from '@angular/core';
import {TLayerConfig} from './layer-config';
import {copyWithOutOverwrite} from '../../util/util';

@Component({
  selector: 'modal-backdrop',
  template: '<div></div>',
  host: {
    'class': 'modal-backdrop fade'
  }
})
export class TModalBackdrop implements AfterViewInit, OnDestroy {
  shadow: boolean;

  constructor(private _renderer: Renderer2, private _elRef: ElementRef, private config: TLayerConfig) {
    console.log("sh")
    copyWithOutOverwrite(config, this);
    console.log("sh")
  }

  ngOnDestroy(): void {
    const backdropNativeEl = this._elRef.nativeElement.remove();
  }

  ngAfterViewInit(): void {
    this.showAnimation();
  }


  hideAnimation(cb: Function = () => {
  }) {
    this._renderer.removeClass(this._elRef.nativeElement, 'show');
    setTimeout(cb, 300)
  }


  showAnimation() {
    setTimeout(() => {
      if (this.shadow) {
        this._renderer.addClass(this._elRef.nativeElement, 'show');
      }
    }, 1);
  }
}
