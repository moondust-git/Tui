import {
  Component,
  Output,
  EventEmitter,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
  AfterViewInit,
  OnDestroy, ViewChild
} from '@angular/core';

import {ModalDismissReasons} from './reasons';

@Component({
  selector: 'moondust-modal-window',
  host: {
    'class': 'modal fade',
    'role': 'dialog',
    'tabindex': '-1',
    'scrollTop': '0',
    'aria-hidden': 'true',
    'style': 'display: none',
    '(keyup.esc)': 'escKey($event)',
    '(click)': 'backdropClick($event)'
  },
  template: `
    <div [class]="'modal-dialog' + (size ? ' modal-' + size : '')" role="document">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  `,
})
export class TModalCmt implements OnInit, AfterViewInit, OnDestroy {
  private _elWithFocus: Element;  // element that is focused prior to modal opening

  @Input() backdrop: boolean | string = true;
  @Input() keyboard = true;
  @Input() size: string;
  @Input() windowClass: string;

  @Output('dismiss') dismissEvent = new EventEmitter();

  constructor(private _renderer: Renderer2, private _elRef: ElementRef) {

  }

  backdropClick($event): void {
    if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
      this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
    }
  }

  escKey($event): void {
    if (this.keyboard && !$event.defaultPrevented) {
      this.dismiss(ModalDismissReasons.ESC);
    }
  }


  dismiss(reason): void {
    this.dismissEvent.emit(reason);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._elWithFocus = document.activeElement;


    if (!this._elRef.nativeElement.contains(document.activeElement)) {
      this._elRef.nativeElement['focus'].apply(this._elRef.nativeElement, []);
    }
    this.showAnimation();
  }

  showAnimation() {
    this._renderer.setStyle(this._elRef.nativeElement, 'display', 'block');
    setTimeout(() => {
      this._renderer.addClass(this._elRef.nativeElement, 'show');
    }, 1);
  }

  hideAnimation(cb: Function = () => {
  }) {
    this._renderer.removeClass(this._elRef.nativeElement, 'show');
    setTimeout(cb, 300);
  }


  ngOnDestroy() {
    this._elRef.nativeElement.remove();
    if (this._elWithFocus && document.body.contains(this._elWithFocus)) {
      this._elWithFocus['focus'].apply(this._elWithFocus, []);
    } else {
      document.body['focus'].apply(document.body, []);
    }
    this._elWithFocus = null;
    this._renderer.removeClass(document.body, 'modal-open');
  }
}
