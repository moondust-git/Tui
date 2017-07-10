import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {TPaginationConfig} from "./pagination.config";
import {TPaginationComponent} from "./pagination.cmt";

@NgModule({
  imports: [CommonModule],
  declarations: [TPaginationComponent],
  providers: [TPaginationConfig],
  exports: [TPaginationComponent]
})
export class TPaginationModule {
}
