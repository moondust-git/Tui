/**
 * Created by tc949 on 2017/5/26.
 */
import {Directive, Output, HostListener, EventEmitter} from '@angular/core';

@Directive({selector: '[Twheel]', exportAs: 'Twheel'})
export class TWheelDirective {
  @Output() TWheelUp = new EventEmitter();
  @Output() TWheelDown = new EventEmitter();

  @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
    this.mouseWheelFunc(event);
  }

  @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
    this.mouseWheelFunc(event);
  }

  mouseWheelFunc(event: any) {
    event = window.event || event; // old IE support
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    if (delta > 0) {
      this.TWheelUp.emit(event);
    } else if (delta < 0) {
      this.TWheelDown.emit(event);
    }
    // for IE
    event.returnValue = false;
    // for Chrome and Firefox
    if (event.preventDefault) {
      event.preventDefault();
    }
  }
}
