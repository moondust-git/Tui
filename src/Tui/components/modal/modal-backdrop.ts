import {AfterViewInit, Component, ElementRef, EventEmitter, HostListener, OnDestroy, Renderer2} from '@angular/core';

@Component({
  selector: 'div.modal-backdrop',
  template: '<div></div>',
  host: {
    '(click)': 'clickEvent.next()'
  }
})
export class TModalBackdrop implements AfterViewInit, OnDestroy {
  backdropnamintion: string = 'fade';

  public clickEvent = new EventEmitter<any>();

  constructor(private _renderer: Renderer2, private _elRef: ElementRef) {
  }

  ngOnDestroy(): void {
    const backdropNativeEl = this._elRef.nativeElement.remove();
  }

  ngAfterViewInit(): void {
    if (this.backdropnamintion) this._renderer.addClass(this._elRef.nativeElement, this.backdropnamintion);
    setTimeout(() => {
      this.showAnimation();
    }, 20)
  }

  hideAnimation() {
    this._renderer.removeClass(this._elRef.nativeElement, 'show');
  }

  showAnimation() {
    this._renderer.addClass(this._elRef.nativeElement, 'show');
  }
}
