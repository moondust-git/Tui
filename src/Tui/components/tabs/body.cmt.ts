import {
  Directive, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Input, OnDestroy, OnInit, Output,
  Renderer2
} from '@angular/core';
import {TTabs} from './tab';
import {el} from '@angular/platform-browser/testing/src/browser_util';
/**
 * Created by tc949 on 2017/6/21.
 */
@Directive({
  selector: '[Ttabs-body]',
})
export class TTabBody implements OnInit {

  @Input('showClass')
  showClass: string;
  protected items: BodyItem[] = [];

  ngOnInit(): void {
  }

  constructor(@Inject(TTabs) public  tab: TTabs) {
    tab.body = this;
  }

  addItem(one: BodyItem) {
    this.items.push(one)
  }

  select(index: number) {
    console.log(index);
    this.items.forEach(item => {
      if (index === this.items.indexOf(item)) {
        item.show(this.showClass);
      } else {
        item.hide(this.showClass);
      }
    })
  }
}

@Directive({
  selector: '[Body-item]'
})
export class BodyItem implements OnInit {

  constructor(@Inject(TTabBody) private body: TTabBody,
              private renderer: Renderer2,
              private eleRef: ElementRef) {
  }


  ngOnInit(): void {
    this.body.addItem(this);
  }

  @HostBinding('style.display')
  display: string;

  show(sclass: string) {
    if (sclass) {
      this.renderer.addClass(this.eleRef.nativeElement, sclass);
    } else {
      this.display = 'block';
    }
  }

  hide(sclass: string) {
    if (sclass) {
      this.renderer.removeClass(this.eleRef.nativeElement, sclass);
    } else {
      this.display = 'none';
    }
  }
}


