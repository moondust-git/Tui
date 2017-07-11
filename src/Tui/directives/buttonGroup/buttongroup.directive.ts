import {AfterViewInit, Directive, forwardRef, HostBinding, Input} from "@angular/core";
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";
import {TButtonGroupItemDirective} from "./group-item.directive";
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {TButtonGroupConfig} from "./buttongroup.config";
import {copyWithOutOverwrite} from "../../util/util";
import {isNullOrUndefined} from "util";
/**
 * Created by tc949 on 2017/7/9.
 */

const BUTTONGROUP_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TButtonGroupDirective),
  multi: true
};

@Directive({
  selector: '[TbuttonGroup]',
  exportAs: "TbuttonGroup",
  host: {
    "[class]": "(size?'btn-group-'+size:'')",
    "[class.btn-group-vertical]": "vertical",
    "[class.btn-group]": "!vertical",
    "[attr.readonly]": "readonly",
    "role": "group",
  },
  providers: [BUTTONGROUP_CONTROL_VALUE_ACCESSOR]
})
export class TButtonGroupDirective implements ControlValueAccessor, AfterViewInit {


  @Input("size") size: 'md' | 'lg' | 'sm';

  @Input("readonly") readonly: boolean;

  @Input("vertical")
  vertical: boolean;

  private _value: any;

  private items: Array<TButtonGroupItemDirective> = [];


  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
  }

  constructor(private config: TButtonGroupConfig) {
    copyWithOutOverwrite(config, this);
  }

  public registerItem(item: TButtonGroupItemDirective) {
    this.items.push(item);
  }

  writeValue(obj: any): void {
    if (this._value === obj) {
      return;
    }
    if (obj) {
      this._value = obj;
      this.setActive(obj);
    }
  }

  public onChange: any = Function.prototype;
  public onTouched: any = Function.prototype;

  public registerOnChange(fn: (_: any) => any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.readonly = isDisabled;
  }

  ngAfterViewInit(): void {
  }

  private  setActive(value: any) {
    this.items.forEach(item => {
      if (value === item.value) {
        item.isActive = true
      } else {
        item.isActive = false
      }
    })
  }

  change(value) {
    if (this.readonly) {
      return;
    }
    this.value = value;
    this.setActive(value);
    this.onChange(value);
  }
}


