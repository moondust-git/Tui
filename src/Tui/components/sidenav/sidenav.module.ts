/**
 * Created by tc949 on 2017/5/26.
 */
import {NgModule, ModuleWithProviders} from '@angular/core';
import {TSidenav} from "./sideNav";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [TSidenav],
  exports: [TSidenav],
  entryComponents: [TSidenav]
})
export class TSidenavModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: TSidenavModule, providers: []};
  }
}
