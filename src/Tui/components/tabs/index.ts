import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {TranscludeDirective} from "./transclude.directive";
import {TabHeadingDirective} from "./tab-heading.directive";
import {TabDirective} from "./tab.directive";
import {TabsetComponent} from "./tabset.component";
import {TTabsetConfig} from "./tabset.config";

@NgModule({
  imports: [CommonModule],
  declarations: [TranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective],
  providers: [TTabsetConfig],
  exports: [TabDirective, TabsetComponent, TabHeadingDirective]
})
export class TTabsModule {
}
