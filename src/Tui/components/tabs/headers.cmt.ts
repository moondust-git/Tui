import {Directive, ElementRef, EventEmitter, HostListener, Inject, Input, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {listenToTriggers} from '../../util/triggers';
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
  }

  constructor() {
  }

  addItem(one: TTabHeadersItem) {
    this.items.push(one)
  }

  chooseOne(one: TTabHeadersItem) {
    this.items.forEach(tabItem => {
      tabItem.active(tabItem === one);
    })
  }
}

@Directive({
  selector: '[headers-item]',
})
export class TTabHeadersItem implements OnInit, OnDestroy {


  private triggers: string;


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
