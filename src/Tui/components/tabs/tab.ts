import {
  Component, ComponentFactoryResolver, Directive, ElementRef, Inject, Injector, Input, NgZone, OnInit, Renderer2,
  ViewContainerRef
} from '@angular/core';
/**
 * Created by tc949 on 2017/6/21.
 */
@Directive({
  selector: '[Ttabs]'
})
export class TTabs implements OnInit {
  @Input() triggers: string;

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2, private injector: Injector,
              private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef,
              private ngZone: NgZone) {
  }
  ngOnInit(): void {
  }
}
