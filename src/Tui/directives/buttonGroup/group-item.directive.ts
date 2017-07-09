/**
 * Created by tc949 on 2017/7/9.
 */
import {AfterViewInit, Directive, HostBinding, HostListener, Input} from "@angular/core";
import {TButtonGroupDirective} from "./buttongroup.directive";
@Directive({
  selector: "[TgroupItem]",
  exportAs: "TgroupItem"
})
export class TButtonGroupItemDirective {

  @Input("TgroupItem") value: any;

  constructor(private buttonGroup: TButtonGroupDirective) {
    buttonGroup.registerItem(this);
    console.log('c')
  }

  @HostListener("click")
  choose() {
    this.buttonGroup.value = this.value;
  }

  @HostBinding("class.active")
  isActive: boolean = false;
}
