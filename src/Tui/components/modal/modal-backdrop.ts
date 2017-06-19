import {AfterViewInit, Component, ElementRef, OnDestroy, Renderer2} from '@angular/core';
import {sha1} from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'tui-modal-backdrop',
  template: '',
  host: {'class': 'modal-backdrop'}
})
export class TModalBackdrop implements AfterViewInit, OnDestroy {
  backdropnamintion: string = 'fade';

  constructor(private _elRef: ElementRef, private _renderer: Renderer2) {
    if (this.backdropnamintion) this._renderer.addClass(this._elRef.nativeElement, this.backdropnamintion);
  }

  ngOnDestroy(): void {
    const backdropNativeEl = this._elRef.nativeElement.remove();
  }

  ngAfterViewInit(): void {
    this.showAnimation();
  }
  hideAnimation() {
    this._renderer.removeClass(this._elRef.nativeElement, 'show');
  }

  showAnimation() {
    setTimeout(() => {
      this._renderer.addClass(this._elRef.nativeElement, 'show');
    }, 1);
  }
}
