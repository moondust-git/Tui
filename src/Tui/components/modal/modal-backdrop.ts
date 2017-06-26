import {AfterViewInit, Component, ElementRef, OnDestroy, Renderer2} from '@angular/core';

@Component({
  selector: 'div.modal-backdrop',
  template: '<div></div>'
})
export class NgbModalBackdrop implements AfterViewInit, OnDestroy {
  backdropnamintion: string = 'fade';


  constructor(private _renderer: Renderer2, private _elRef: ElementRef) {
  }

  ngOnDestroy(): void {
    const backdropNativeEl = this._elRef.nativeElement.remove();
  }


  ngAfterViewInit(): void {
    if (this.backdropnamintion) this._renderer.addClass(this._elRef.nativeElement, this.backdropnamintion);
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
