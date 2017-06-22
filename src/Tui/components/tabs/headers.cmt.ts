import {
  Directive, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Input, OnDestroy, OnInit, Output,
  Renderer2
} from '@angular/core';
import {listenToTriggers} from '../../util/triggers';
import {TTabs} from './tab';
/**
 * Created by tc949 on 2017/6/21.
 */
@Directive({
  selector: '[Ttabs-headers]',
})
export class TTabHeaders implements OnInit {
  @Output() choose: EventEmitter<any> = new EventEmitter();
  protected items: TTabHeadersItem[] = [];

  ngOnInit(): void {
    this.tab.header = this;
  }

  constructor(@Inject(TTabs) private  tab: TTabs) {
  }

  addItem(one: TTabHeadersItem) {
    this.items.push(one)
  }

  chooseOne(one: TTabHeadersItem) {
    console.log('noti tab');
    this.tab.select(this.items.indexOf(one));
  }

  select(index: number) {
    this.items.forEach(tabItem => {
      tabItem.active(index === this.items.indexOf(tabItem));
    });
  }
}

@Directive({
  selector: '[headers-item]',
})
export class TTabHeadersItem implements OnInit, OnDestroy {

  constructor(@Inject(TTabHeaders) private  headersCmt: TTabHeaders,
              private _renderer: Renderer2,
              private _elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.headersCmt.addItem(this);
  }

  @HostListener('click')
  open() {
    this.headersCmt.chooseOne(this);
  }

  active(fg: boolean) {
    if (fg) {
      this._renderer.addClass(this._elementRef.nativeElement, 'active');
    } else {
      this._renderer.removeClass(this._elementRef.nativeElement, 'active');
    }
  }

  ngOnDestroy(): void {
  }
}
