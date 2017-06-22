import {
  AfterViewInit,
  Component, ComponentFactoryResolver, Directive, ElementRef, Inject, Injector, Input, NgZone, OnInit, Renderer2, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {TTabHeaders, TTabHeadersItem} from './headers.cmt';
import {TTabBody} from './body.cmt';
/**
 * Created by tc949 on 2017/6/21.
 */
@Directive({
  selector: '[Ttabs]'
})
export class TTabs implements OnInit, AfterViewInit {


  @Input() autoOpen: number = 0;


  header: TTabHeaders;

  body: TTabBody;

  constructor() {
  }

  ngOnInit(): void {
  }

  select(index: number) {
    this.header.select(index);
    this.body.select(index);
  }

  ngAfterViewInit(): void {
  }
}
