import {Directive, Input} from "@angular/core";
/**
 * Created by tc949 on 2017/7/8.
 */
@Directive({
  selector: "[Tbutton]",
  exportAs: "Tbutton",
  host: {
    "[class]": "'btn-'+(outline===true?'outline-':'' )+level",
    "[class.btn]": "true",
    "[class.active]": 'active',
    "role": "button",
    "[disabled]": 'disable',
    "[class.disabled]": 'disable'
  }
})
export class TButtonDirective {
  @Input("Tbutton") level: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'link';
  @Input("outline") outline: boolean = false;
  @Input("disabled") disable: boolean = false;
  @Input("active") active: boolean = false;
}
