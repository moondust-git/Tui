import {
  Component,
  Directive,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  Injector,
  Renderer2,
  ComponentRef,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  NgZone, AfterViewInit, ApplicationRef
} from '@angular/core';

import {listenToTriggers} from '../../util/triggers';
import {positionElements} from '../../util/positioning';
import {ComponentCreater} from '../../util/ComponentCreater';
import {TPopoverConfig} from './popover-config';

let nextId = 0;
// "popover show popover-" + placement
@Component({
  selector: 't-popover-cmt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'[class]': '"popover fade  popover-" + placement', 'role': 'tooltip', '[id]': 'id'},
  template: `
    <h3 class="popover-title">{{title}}</h3>
    <div class="popover-content">
      <ng-content></ng-content>
    </div>
  `
})
export class TPopoverCmt implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.show();
    }, 1);
  }

  constructor(private _eleref: ElementRef, private _renderer: Renderer2) {
  }

  show(): void {
    this._renderer.addClass(this._eleref.nativeElement, 'show');
  }


  hide() {
    this._renderer.removeClass(this._eleref.nativeElement, 'show');
  }

  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() title: string;
  @Input() id: string;
  @Input() type: string = 'popover';
}


@Component({
  selector: 't-tooltip-cmt',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'[class]': '"tooltip fade  tooltip-" + placement', 'role': 'tooltip', '[id]': 'id'},
  template: `
    <div class="tooltip-inner">
      <ng-content></ng-content>
    </div>
  `
})
export class TTooltipCmt extends TPopoverCmt {
  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() title: string;
  @Input() id: string;
  @Input() type: string = 'popover';

  constructor(private _elerefs: ElementRef, private _renderers: Renderer2) {
    super(_elerefs, _renderers);
  }

  show(): void {
    this._renderers.addClass(this._elerefs.nativeElement, 'show');
  }

  hide() {
    this._renderers.removeClass(this._elerefs.nativeElement, 'show');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.show();
    }, 1);
  }
}

/**
 * A lightweight, extensible directive for fancy popover creation.
 */
@Directive({selector: '[TPopover]', exportAs: 'TPopover'})
export class TPopover implements OnInit, OnDestroy {
  /**
   * Content to be displayed as popover.
   */
  @Input() TPopover: string | TemplateRef<any>;

  /**
   * Title of a popover.
   */
  @Input() popoverTitle: string;
  /**
   *
   * Placement of a popover. Accepts: "top", "bottom", "left", "right"
   */
  @Input() placement: 'top' | 'bottom' | 'left' | 'right';


  @Input() type: 'popover' | 'tooltip';
  /**
   * Specifies events that should trigger. Supports a space separated list of event names.
   */
  @Input() triggers: string;
  /**
   * A selector specifying the element the popover should be appended to.
   * Currently only supports "body".
   */
  @Input() container: string;
  /**
   * Emits an event when the popover is shown
   */
  @Output() shown = new EventEmitter();
  /**
   * Emits an event when the popover is hidden
   */
  @Output() hidden = new EventEmitter();

  private _ngbPopoverWindowId = `t-popover-${nextId++}`;
  private _ComponentCreater: ComponentCreater<TPopoverCmt>;
  private _windowPopRef: ComponentRef<TPopoverCmt>;
  private _unregisterListenersFn;
  private _zoneSubscription: any;


  private closeTimeOut: any;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2, private injector: Injector, private _applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private config: TPopoverConfig,
              private ngZone: NgZone) {

  }

  /**
   * Opens an element’s popover. This is considered a “manual” triggering of the popover.
   * The context is an optional value to be injected into the popover template when it is created.
   */
  open(context?: any) {
    if (!this._windowPopRef) {
      this._windowPopRef = this._ComponentCreater.open(this.TPopover, context);
      this._windowPopRef.instance.placement = this.placement;
      this._windowPopRef.instance.title = this.popoverTitle;
      this._windowPopRef.instance.type = this.type || 'popover';
      this._windowPopRef.instance.id = this._ngbPopoverWindowId;

      this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
      if (this.container === 'body') {
        window.document.querySelector(this.container).appendChild(this._windowPopRef.location.nativeElement);
      }
      // we need to manually invoke change detection since events registered via
      // Renderer::listen() are not picked up by change detection with the OnPush strategy
      this._windowPopRef.changeDetectorRef.markForCheck();
      this._windowPopRef.instance.show();
      this.shown.emit();
    }
  }

  /**
   * Closes an element’s popover. This is considered a “manual” triggering of the popover.
   */
  close(): void {
    if (this._windowPopRef) {
      this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
      this._windowPopRef.instance.hide();
      this.closeTimeOut = setTimeout(() => {
        this._ComponentCreater.remove();
        this._windowPopRef = null;
        this.hidden.emit();
      }, 300)
    }
  }

  /**
   * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
   */
  toggle(): void {
    if (this._windowPopRef) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Returns whether or not the popover is currently being shown
   */
  isOpen(): boolean {
    return this._windowPopRef != null;
  }

  ngOnInit() {
    if (!this.placement) this.placement = this.config.placement;
    if (!this.triggers) this.triggers = this.config.triggers;
    if (!this.container) this.container = this.config.container;
    if (!this.type) this.type = this.config.type;
    if (this.type === 'popover') {
      this._ComponentCreater = new ComponentCreater<TPopoverCmt>(TPopoverCmt, this.injector, this.componentFactoryResolver, this._applicationRef, this.viewContainerRef);
    } else {
      this._ComponentCreater = new ComponentCreater<TTooltipCmt>(TTooltipCmt, this.injector, this.componentFactoryResolver, this._applicationRef, this.viewContainerRef);
    }
    this._zoneSubscription = this.ngZone.onStable.subscribe(() => {
      if (this._windowPopRef) {
        positionElements(this._elementRef.nativeElement, this._windowPopRef.location.nativeElement, this.placement, this.container === 'body');
      }
    });
    this._unregisterListenersFn = listenToTriggers(
      this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this),
      this.toggle.bind(this));
  }
  ngOnDestroy() {
    this.close();
    this._unregisterListenersFn();
    this._zoneSubscription.unsubscribe();
    if (this.closeTimeOut) {
      clearTimeout(this.closeTimeOut);
    }
  }
}
