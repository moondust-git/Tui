import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {PaginationConfig} from "./pagination.config";
import {TPaginationComponent} from "./pagination.cmt";

@NgModule({
  imports: [CommonModule],
  declarations: [TPaginationComponent],
  providers: [PaginationConfig],
  exports: [TPaginationComponent]
})
export class TPaginationModule {
}
