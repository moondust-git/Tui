import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Inject,
  Input,
  LOCALE_ID,
  NgZone,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewContainerRef,
  OnChanges, SimpleChanges, Output, EventEmitter, AfterViewInit
} from "@angular/core";
import {positionElements} from "../../util/positioning";
import {TimepickerComponent} from "./timepicker.component";
import {TimepickerConfig} from "./timepicker.config";
import {listenToTriggers} from "../../util/triggers";
import {DateFormatter} from "../../util/intl";
import {ControlValueAccessor} from "@angular/forms";

@Directive({
  selector: 'input[Ttimepicker]', exportAs: 'Ttimepicker', host: {'(blur)': 'blur()'}
})
export class TimepickerDirective implements OnInit, OnDestroy, ControlValueAccessor, AfterViewInit {
  ngAfterViewInit(): void {
    this.transform();
  }


  @Input() placement: string;
  @Input() triggers: string;
  @Input() format: string;

  private _model: Date;
  private _zoneSubscription: any;
  private _cRef: ComponentRef<TimepickerComponent> = null;
  private _unregisterListenersFn: Function;

  //
  private _onChange = (_: any) => {
  }
  private _onTouched = () => {
  }
  private _validatorChange = () => {
  }

  constructor(private _elRef: ElementRef, private _vcRef: ViewContainerRef,
              private _renderer: Renderer2, private _cfr: ComponentFactoryResolver, ngZone: NgZone, private config: TimepickerConfig, @Inject(LOCALE_ID) private _locale: string) {
    this._zoneSubscription = ngZone.onStable.subscribe(() => {
      if (this._cRef) {
        positionElements(this._elRef.nativeElement, this._cRef.location.nativeElement, this.placement);
      }
    });
  }

  ngOnInit(): void {
    if (!this.placement) this.placement = this.config.placement;
    if (!this.triggers) this.triggers = this.config.triggers;
    if (!this.format) this.format = this.config.format;
    this._unregisterListenersFn = listenToTriggers(this._renderer, this._elRef.nativeElement, this.triggers, this.show.bind(this), this.close.bind(this),
      this.toggle.bind(this));
    this._renderer.setAttribute(this._elRef.nativeElement, 'readonly', 'true');
  }

  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.show();
    }
  }

  isOpen() {
    return !!this._cRef;
  }

  show() {
    if (!this.isOpen()) {
      const cf = this._cfr.resolveComponentFactory(TimepickerComponent);
      this._cRef = this._vcRef.createComponent(cf);
      this._applyPopupStyling(this._cRef.location.nativeElement);
      this._cRef.instance.writeValue(this._model);
      // this._applyDatepickerInputs(this._cRef.instance);
      // this._subscribeForDatepickerOutputs(this._cRef.instance);
      this._cRef.instance.ngOnInit();
      // date selection event handling
      this._cRef.instance.blur.subscribe(() => {
        this.close();
      });
      this._cRef.instance.registerOnChange((selectTime) => {
        this.writeValue(selectTime);

      });
    }
  }


  blur() {
    // this.close();
  }

  writeValue(value) {
    console.log('writeValue')
    this._model = value;
    this._writeModelValue(this._model);
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }


  setDisabledState(isDisabled: boolean): void {
  }

  private _writeModelValue(model: Date) {
    this._renderer.setProperty(this._elRef.nativeElement, 'value', model);
    if (this.isOpen()) {
      this.transform();
      this._cRef.instance.writeValue(model);
      this._onTouched();
    }
  }


  private transform() {
    this._elRef.nativeElement.value = DateFormatter.format(this._model, this._locale, this.format);
  }


  close() {
    if (this.isOpen()) {
      this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
      this._cRef = null;
    }
  }

  private _applyPopupStyling(nativeElement: any) {
    this._renderer.addClass(nativeElement, 'dropdown-menu');
    this._renderer.setStyle(nativeElement, 'padding', '0');
    this._renderer.setStyle(nativeElement, 'display', 'inline-block');
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
    this.close();
    this._unregisterListenersFn();
  }
}



