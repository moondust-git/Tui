import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TButtonGroupDirective} from "./buttongroup.directive";
import {TButtonGroupItemDirective} from "./group-item.directive";
import {TButtonGroupConfig} from "./buttongroup.config";
/**
 * Created by tc949 on 2017/7/9.
 */
@NgModule({
  imports: [CommonModule],
  declarations: [TButtonGroupDirective, TButtonGroupItemDirective],
  providers: [TButtonGroupConfig],
  exports: [TButtonGroupDirective, TButtonGroupItemDirective]
})
export class TButtonGroupModule {
}
